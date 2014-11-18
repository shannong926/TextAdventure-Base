function Location (name.description){
    this.name = name;
    this.description = description;
    this.items = [];
}

var location0 = newLocation('cave', 'Open space that is dark and damp');

var location1 = newLocation('hallway', 'a dark cave hallway with small walls and water dripping form the ceiling');

var location2 = newLocation('cave opening', 'a bright light shines ahead and the hallway opens up into the open air');

var location = [];

location.push(location0);
location.push(location1);
location.push(location2);

var connections = [
      [0 , 1 , 0],
      [1 , 0 , 1],
      [0 , 1 , 0]
];

var map = {
    place: location,
    attatchments: connections
};

var print = function(){
    for ( var i = 0; i < connections.length; i ++){
        if (map[0][1] === 1) {
            console.log( location);
        }else if ( [0][1] === 0){
            console.log();
        }
}
