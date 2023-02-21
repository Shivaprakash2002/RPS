
function computer(){
    const items = ['rock','paper','scissor'];
    let random = Math.floor(Math.random()*items.length);
    return items[random];
}

function playerinput(){
    const player = document.querySelectorAll('.itemset')

    player.forEach(players => {
    players.onclick = () => inputs(players.value) 
    })
}
function result(computer,playerinput) {
    let result = "";
    if(computer===playerinput) result = "Tie 🤝";
    else if(computer==="rock" && playerinput==="scissor") result = "oh shit computer wins 🤖";
    else if(computer==="paper" && playerinput==="rock") result = "oh shit computer wins 🤖";
    else if(computer==="scissor" && playerinput==="paper") result = "oh shit computer wins 🤖";
    else result = "Wooray U win!..😃";
    return result;
}
function inputs(playerinput){
    console.log({playerinput});
    const computerinput = computer()
    console.log({computerinput}) 
    const res = result(computerinput,playerinput)
    document.getElementById('result').innerHTML = `player = ${playerinput} & computer = ${computerinput}`;
    document.getElementById('sol').innerHTML = `${res}`;
}
playerinput()

