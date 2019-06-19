//window.addEventListener('load', registerCheckin);

var db = openDatabase("SQlite", "1.0", "TIMETRACK", 2 * 1024 * 1024);

db.transaction(function(tx) {
        //tx.executeSql("DROP TABLE myTable" );
        tx.executeSql("CREATE TABLE IF NOT EXISTS Repositorio ( id INTEGER PRIMARY KEY,latitude TEXT,longitude TEXT, time TEXT)" );
//        tx.executeSql('INSERT INTO myTable ( nome,senha,email) VALUES ("a", "b", "c")');
    });

//function registerCheckin(){
	//document.getElementById('in').addEventListener('');

//}

function checkOut(){
	var lat = document.getElementById(position.coords.latitude);

	db.transaction(function(tx) {
        //tx.executeSql("DROP TABLE myTable" );
        tx.executeSql('INSERT INTO Repositorio (latitude, longitude, time) VALUES(?,?,?)',[latitude,longitude,time]);
//        tx.executeSql('INSERT INTO myTable ( nome,senha,email) VALUES ("a", "b", "c")');
    });
}



