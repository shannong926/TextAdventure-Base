var player = function(name,profession,items) {
      this.name = "Player 1";
      this.profession = "lost child";
      this.items = [];
      describeInventory();
}



var interpret = function(str){
    var trimStr = str.trim();
    var splitStr = trimmedStr.split('');
    var action = splitStr.shift();
    return [action,splitStr.join('')];
}

var execute = function(player.items){
    var action = items.pull[0];
}


var report = function(){
}


var gameStep = function(){
    interpret();
    execute();
    report();
}

enter.onClick = gameStep;

enter.addEventListener('gameStep',run);

