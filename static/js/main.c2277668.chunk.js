(window["webpackJsonptest-exercise"]=window["webpackJsonptest-exercise"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(9),r=a.n(i),o=(a(15),a(1)),d=a(2),c=a(5),m=a(3),l=a(4),u=(a(16),a(6)),h=a(7),p=a.n(h),f=(a(18),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={mainTimerValue:0,name:1},a.timerStartHandler=a.timerStartHandler.bind(Object(u.a)(a)),a}return Object(l.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=p()([0,0],"mm:ss").format("mm:ss");this.setState({mainTimerValue:e})}},{key:"timerTick",value:function(e,t,a){if(1!==this.props.checkEndGame){e=t.add(1,"seconds").format("mm:ss"),this.setState({mainTimerValue:e}),this.props.getEndTime(this.state.mainTimerValue)}else{clearInterval(a),this.timeRef.disabled=!1;var n=p()([0,0],"mm:ss").format("mm:ss");this.setState({mainTimerValue:n})}}},{key:"timerStartHandler",value:function(e){var t=this;e.target.disabled=!0;var a=this.state.mainTimerValue,n=p()([0,0],"mm:ss");this.props.checkStartGame(1);var s=setInterval((function(){t.timerTick(a,n,s)}),1e3)}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:["timer"].join(" ")},this.state.mainTimerValue),s.a.createElement("button",{onClick:this.timerStartHandler,className:["button-timer"],ref:function(t){e.timeRef=t}},"\u041d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443"))}}]),t}(n.Component)),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).checkStartGame=function(e){a.setState({checkStartGame:e})},a.getEndTime=function(e){a.setState({gameEndTime:e});var t={id:0,time:a.state.gameEndTime,moveCount:a.state.moveCount};a.props.getPlayerInfo(t)},a.state={cards:[{id:1,name:"dog",link:"img/dog.jpg",isOpen:!1,isFounded:!1},{id:2,name:"crocodile",link:"img/crocodile.jpg",isOpen:!1,isFounded:!1},{id:3,name:"giraffe",link:"img/giraffe.jpg",isOpen:!1,isFounded:!1},{id:4,name:"horse",link:"img/horse.jpg",isOpen:!1,isFounded:!1},{id:5,name:"lion",link:"img/lion.jpg",isOpen:!1,isFounded:!1},{id:6,name:"rhino",link:"img/rhino.jpg",isOpen:!1,isFounded:!1},{id:7,name:"snake",link:"img/snake.jpg",isOpen:!1,isFounded:!1},{id:8,name:"turtle",link:"img/turtle.jpg",isOpen:!1,isFounded:!1},{id:9,name:"wolf",link:"img/wolf.jpg",isOpen:!1,isFounded:!1},{id:10,name:"cat",link:"img/cat.jpg",isOpen:!1,isFounded:!1},{id:11,name:"deer",link:"img/deer.jpg",isOpen:!1,isFounded:!1},{id:12,name:"elephant",link:"img/elephant.jpg",isOpen:!1,isFounded:!1},{id:13,name:"frog",link:"img/frog.jpg",isOpen:!1,isFounded:!1},{id:14,name:"hedgehog",link:"img/hedgehog.jpg",isOpen:!1,isFounded:!1},{id:15,name:"pig",link:"img/pig.jpg",isOpen:!1,isFounded:!1},{id:16,name:"puppy",link:"img/puppy.jpg",isOpen:!1,isFounded:!1},{id:17,name:"snail",link:"img/snail.jpg",isOpen:!1,isFounded:!1},{id:18,name:"toad",link:"img/toad.jpg",isOpen:!1,isFounded:!1}],arrayCardsCopy:[],prevCard:{},secondCard:{},checkStartGame:0,checkEndGame:0,moveCount:0,gameEndTime:0},a}return Object(l.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.addSecondCart(this.state.cards),this.shuffleArray(this.state.cards),this.setState({arrayCardsCopy:this.state.cards})}},{key:"gameReset",value:function(){var e=this;setTimeout((function(){e.state.arrayCardsCopy.map((function(e){e.isFounded=!1,e.isOpen=!1})),e.setState({cards:e.state.arrayCardsCopy,prevCard:{},secondCard:{},checkStartGame:0,checkEndGame:0,moveCount:0,gameEndTime:0})}),1e3)}},{key:"checkEndGame",value:function(){void 0===this.state.cards.find((function(e){return!1===e.isFounded}))&&(this.setState({checkEndGame:1}),this.gameReset())}},{key:"addSecondCart",value:function(e){var t=this,a=this.state.cards.length+1;e.forEach((function(e,n){var s={};(s=Object.assign(s,e)).id=a,a+=1,t.state.cards.push(s)})),this.setState({cards:e})}},{key:"shuffleArray",value:function(e){for(var t,a,n=e.length;n;)a=Math.floor(Math.random()*n--),t=e[n],e[n]=e[a],e[a]=t;this.setState({cards:e})}},{key:"compareCards",value:function(e,t){var a=this;0!==Object.keys(e).length&&(e.name===t.name?(this.state.arrayCardsCopy.map((function(a,n){a.id!=t.index&&a.id!=e.index||(a.isFounded=!0)})),this.setState({cards:this.state.arrayCardsCopy,prevCard:{},secondCard:{},moveCount:this.state.moveCount+1}),this.checkEndGame()):setTimeout((function(){t.card.classList.toggle("card--open"),e.card.classList.toggle("card--open"),a.setState({prevCard:{},secondCard:{},moveCount:a.state.moveCount+1})}),800))}},{key:"makeCardInfo",value:function(e,t,a){return{index:e,name:t,card:a}}},{key:"saveCardInState",value:function(e,t){var a=this;0===Object.keys(e).length?(this.setState((function(e){return{prevCard:t}})),this.timerCards=setTimeout((function(){a.state.prevCard.card.classList.toggle("card--open"),a.setState({prevCard:{}})}),5e3)):(this.setState({secondCard:t}),clearTimeout(this.timerCards))}},{key:"openCardHandler",value:function(e){var t=e.currentTarget;if(!t.classList.contains("card--founded")&&!t.classList.contains("card--open")&&0===Object.keys(this.state.secondCard).length&&0!==this.state.checkStartGame){t.classList.toggle("card--open");var a=this.makeCardInfo(t.dataset.index,t.dataset.name,t);this.saveCardInState(this.state.prevCard,a),this.compareCards(this.state.prevCard,a)}}},{key:"render",value:function(){var e=this,t={field:["field"],fieldHeader:["field-header"],fieldBody:["field-body"],fieldSquare:["field-square"],fieldCard:["card"],cardImg:["img"]};return s.a.createElement("div",{className:t.field},s.a.createElement("div",{className:t.fieldHeader},s.a.createElement(f,{showButton:!0,checkStartGame:this.checkStartGame,checkEndGame:this.state.checkEndGame,getEndTime:this.getEndTime})),s.a.createElement("div",{className:t.fieldBody},s.a.createElement("div",{className:t.fieldSquare},this.state.cards.map((function(a,n){var i=t.fieldCard.slice(0);return a.isFounded?i.push("card--founded","card--open"):a.isOpen&&i.push("card--open"),s.a.createElement("div",{key:n,className:i.join(" "),onClick:e.openCardHandler.bind(e),"data-name":a.name,"data-index":a.id},s.a.createElement("div",{className:"card_front"}," "),s.a.createElement("div",{className:"card_back"},s.a.createElement("img",{className:t.cardImg,"data-cardname":a.name,src:a.link,alt:a.name})))})))))}}]),t}(n.Component),g=function(e){return s.a.createElement("thead",{className:e.ClassNames.theadClassName},s.a.createElement("tr",{className:e.ClassNames.trClassName},e.name.map((function(t,a){var n=t.isActive?"active":"";return s.a.createElement("th",{key:a,className:e.ClassNames.thClassName+" "+n}," ",t.name," ")}))))},C=function(e){return s.a.createElement("tr",{className:e.ClassNames.trClassName},Object.keys(e.row).map((function(t,a){return 0===e.row.id?s.a.createElement("td",{className:e.ClassNames.tdClassName+" table-body-row_cell--current-player",key:a},e.row[t]):s.a.createElement("td",{className:e.ClassNames.tdClassName,key:a},e.row[t])})))},y=(a(19),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={data:[{id:1,time:"08:34",moveCount:1},{id:2,time:"10:19",moveCount:19},{id:3,time:"11:27",moveCount:29}],colNames:[{name:"\u041d\u043e\u043c\u0435\u0440",isActive:!1},{name:"\u0418\u043c\u044f",isActive:!1},{name:"\u0421\u0447\u0435\u0442",isActive:!1}],dataCopy:[]},a}return Object(l.a)(t,e),Object(d.a)(t,[{key:"componentDidUpdate",value:function(e,t){if(this.props.playerGameInfo!==e.playerGameInfo){if(-1===t.data.findIndex((function(e){return 0===e.id})))t.data.push(this.props.playerGameInfo),this.setState({data:t.data});else{var a=t.data.findIndex((function(e){return 0===e.id}));t.data[a].time=this.props.playerGameInfo.time,t.data[a].moveCount=this.props.playerGameInfo.moveCount,this.setState({data:t.data})}var n={id:this.state.data.length,time:this.props.playerGameInfo.time,moveCount:this.props.playerGameInfo.moveCount};sessionStorage[this.state.data.length]=JSON.stringify(n),this.tableSortHandler()}}},{key:"componentDidMount",value:function(){if(0!==sessionStorage.length)for(var e=0;e<sessionStorage.length;e++){var t=sessionStorage.key(e);this.state.data.push(JSON.parse(sessionStorage[t]))}this.tableSortHandler(),this.setState({dataCopy:this.state.data})}},{key:"compareFunction",value:function(e,t){return e<t?-1:e>t?1:0}},{key:"tableSortHandler",value:function(){var e=[];this.state.data.map((function(t){e.push(t)})),e.sort(function(e,t){var a=e.moveCount,n=t.moveCount;return this.compareFunction(a,n,"more")}.bind(this)),this.setState({data:e})}},{key:"render",value:function(){var e={tbodyClassName:["table-body"],trClassName:["table-body-row"],tdClassName:["table-body-row_cell"]};return s.a.createElement(s.a.Fragment,null,s.a.createElement("table",{className:"table"},s.a.createElement(g,{name:this.state.colNames,ClassNames:{theadClassName:"table-head",trClassName:"table-head-row",thClassName:"table-head-row_cell"},changeActive:this.changeActiveHandler}),s.a.createElement("tbody",{className:e.tbodyClassName},this.state.data.map((function(t,a){return s.a.createElement(C,{ClassNames:e,row:t,key:a})})))))}}]),t}(n.Component)),k=(a(20),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).getPlayerInfo=function(e){a.setState({playerGameInfo:e})},a.state={playerGameInfo:{id:0,time:0,moveCount:0}},a}return Object(l.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement(v,{getPlayerInfo:this.getPlayerInfo}),s.a.createElement(y,{playerGameInfo:this.state.playerGameInfo}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.c2277668.chunk.js.map