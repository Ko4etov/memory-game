import React, { Component } from 'react';
import './Field.scss';
import Timer from '../Timer/Timer'

export default class Field extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: [
                {id:1, name: 'dog', link: '../img/dog.jpg', isOpen: false, isFounded: false},
                {id:2, name: 'crocodile', link: '../img/crocodile.jpg', isOpen: false, isFounded: false},
                {id:3, name: 'giraffe', link: '../img/giraffe.jpg', isOpen: false, isFounded: false},
                {id:4, name: 'horse', link: '../img/horse.jpg', isOpen: false, isFounded: false},
                {id:5, name: 'lion', link: '../img/lion.jpg', isOpen: false, isFounded: false},
                {id:6, name: 'rhino', link: '../img/rhino.jpg', isOpen: false, isFounded: false},
                {id:7, name: 'snake', link: '../img/snake.jpg', isOpen: false, isFounded: false},
                {id:8, name: 'turtle', link: '../img/turtle.jpg', isOpen: false, isFounded: false},
                {id:9, name: 'wolf', link: '../img/wolf.jpg', isOpen: false, isFounded: false},
                {id:10, name: 'cat', link: '../img/cat.jpg', isOpen: false, isFounded: false},
                {id:11, name: 'deer', link: '../img/deer.jpg', isOpen: false, isFounded: false},
                {id:12, name: 'elephant', link: '../img/elephant.jpg', isOpen: false, isFounded: false},
                {id:13, name: 'frog', link: '../img/frog.jpg', isOpen: false, isFounded: false},
                {id:14, name: 'hedgehog', link: '../img/hedgehog.jpg', isOpen: false, isFounded: false},
                {id:15, name: 'pig', link: '../img/pig.jpg', isOpen: false, isFounded: false},
                {id:16, name: 'puppy', link: '../img/puppy.jpg', isOpen: false, isFounded: false},
                {id:17, name: 'snail', link: '../img/snail.jpg', isOpen: false, isFounded: false},
                {id:18, name: 'toad', link: '../img/toad.jpg', isOpen: false, isFounded: false},
              ],
              arrayCardsCopy: [],
              prevCard: {},
              secondCard: {},
              checkStartGame: 0,
              checkEndGame: 0,
              moveCount: 0,
              gameEndTime: 0
        }
    }

    componentDidMount() {
        this.addSecondCart(this.state.cards)
        this.shuffleArray(this.state.cards)
        this.setState({
            arrayCardsCopy: this.state.cards
        })
    }
    //Сброс всех значений
    gameReset() {
        setTimeout(() => {
            this.state.arrayCardsCopy.map( element => {
                element.isFounded = false;
                element.isOpen = false;
            })
            this.setState({
                cards: this.state.arrayCardsCopy,
                prevCard: {},
                secondCard: {},
                checkStartGame: 0,
                checkEndGame: 0,
                moveCount: 0,
                gameEndTime: 0
            })
        }, 1000);
    }

    checkEndGame() {
        if (this.state.cards.find(item => item.isFounded === false) === undefined) {
            this.setState({
                checkEndGame: 1
            })
            this.gameReset()
        }
    }

    // Удваиваем каждую карточку
    addSecondCart(array) {
        let elementCount = this.state.cards.length + 1;
        array.forEach((element, index) => {
            let cardCopy = {};
            cardCopy = Object.assign(cardCopy, element)
            cardCopy.id = elementCount;
            elementCount += 1;
            this.state.cards.push(cardCopy)
        })
        this.setState({
            cards: array
        })
    }

    // Перемешиваем массив
    shuffleArray(array) {
        var m = array.length, t, i;
        while (m) {
          i = Math.floor(Math.random() * m--);
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }
        this.setState({
            cards: array
        })
    }

    //Функция сравнения карточек
    compareCards(prevCard, currentCard) {
        if (Object.keys(prevCard).length !== 0 && currentCard.index !== prevCard.index) {
            if (prevCard.name === currentCard.name) {
                this.state.arrayCardsCopy.map((element, index) => {
                    if(element.id == currentCard.index || element.id == prevCard.index) {
                        element.isFounded = true;
                    }
                })
                this.setState({
                    cards: this.state.arrayCardsCopy,
                    prevCard: {},
                    secondCard: {},
                    moveCount: this.state.moveCount + 1,
                })
                this.checkEndGame()
            } else {
                setTimeout(() => {
                    currentCard.card.classList.toggle('card--open')
                    prevCard.card.classList.toggle('card--open')
                    this.setState({
                        prevCard: {},
                        secondCard: {},
                        moveCount: this.state.moveCount + 1,
                    })
                }, 800);
            }
        }
    }

    //Собираем нужную информацию о карточке
    makeCardInfo (index, name, card) {
        return {index, name, card}
    }

    //Сохраняем карточку в стейт
    saveCardInState(prevCard, cardInfo) {
        if (Object.keys(prevCard).length === 0) {
            this.setState({
                prevCard: cardInfo,
            })
        } else {
            this.setState({
                secondCard: cardInfo,
            })
        }
    }


    //Обрабатываем клик по карточке
    openCardHandler(e) {
        let card = e.currentTarget;
        //Если у карточки уже найдена пара или она открыта или это открыта вторая карточка
        if (card.classList.contains('card--founded') || card.classList.contains('card--open') || Object.keys(this.state.secondCard).length !== 0 || this.state.checkStartGame === 0) {
            return
        }
        card.classList.toggle('card--open')
        //Сохраняем информацию о карточке
        let cardInfo = this.makeCardInfo(card.dataset.index, card.dataset.name, card);
        //Сохраняем карточку в стейт
        this.saveCardInState(this.state.prevCard, cardInfo);
        //Сравниваем карточки
        this.compareCards(this.state.prevCard, cardInfo);
    }

    checkStartGame = (value) => {
        this.setState({ 
            checkStartGame: value,
        })
    }

    getEndTime = (time) => {
        this.setState({ 
            gameEndTime: time
        })
        let playerGameInfo = {
            id: 0,
            time: this.state.gameEndTime,
            moveCount: this.state.moveCount
        };
        this.props.getPlayerInfo(playerGameInfo)
    }


      render() {
        const fieldClasses = {
            field: ['field'],
            fieldHeader: ['field-header'],
            fieldBody: ['field-body'],
            fieldSquare: ['field-square'],
            fieldCard: ['card'],
            cardImg: ['img']
        }
        return(
            <div className={fieldClasses.field}>
                <div className={fieldClasses.fieldHeader}>
                    <Timer
                        showButton = {true}
                        checkStartGame = {this.checkStartGame}
                        checkEndGame = {this.state.checkEndGame}
                        getEndTime = {this.getEndTime}
                    />
                </div>

                <div className={fieldClasses.fieldBody}>
                    <div className={fieldClasses.fieldSquare}>
                        {
                            this.state.cards.map((element, index) => {
                                let newCardClass = fieldClasses.fieldCard.slice(0);
                                if (element.isFounded) {
                                    newCardClass.push('card--founded', 'card--open')
                                } else if (element.isOpen) {
                                    newCardClass.push('card--open')
                                }
                                return(
                                    <div
                                    key={index}
                                    className={newCardClass.join(' ')}
                                    onClick={this.openCardHandler.bind(this)}
                                    data-name={element.name}
                                    data-index={element.id}
                                    >
                                        <div className="card_front"> </div>
                                        <div className="card_back"><img className={fieldClasses.cardImg} data-cardname={element.name} src={element.link} alt={element.name}></img></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}