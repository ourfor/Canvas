var Connection = require("tedious").Connection;
var config= {
    userName: 'sa',
    password: '2320813747DB$$',
    server: "mssql.ourfor.top",
    options: {
        encrypt: true,
        databases: "Study"
    }
};

let conn = new Connection(config);

conn.on('connect',function(err){
    console.log("Connected");
    executeStatement();
});

var Request = require("tedious").Request;
var TYPES = require("tedious").TYPES;

function execStatement(){
    request = new Request("select sno,sage from student",function(err){
        if(err){
            console.log(err);
        }
    });

    var result = "";
    console.log("查询结果为:");

    request.on('row',function(columns){
        columns.forEach(function(column){
            if(column === null) {
                console.log("NULL");
            } else{
                result += column.value + "\t";
            }
            console.log(result);
            result = "";
        });
    });

    request.on("done",function(rowCount,more){
        console.log(rowCount + " rows returned");
    });

    conn.execSql(request);
}

var Request = require('tedious').Request;  
    var TYPES = require('tedious').TYPES;  
  
    function executeStatement() {  
        request = new Request("select * from student;", function(err) {  
        if (err) {  
            console.log(err);}  
        });  
        var result = "";  
        request.on('row', function(columns) {  
            columns.forEach(function(column) {  
              if (column.value === null) {  
                console.log('NULL');  
              } else {  
                result+= column.value + " ";  
              }  
            });  
            console.log(result);  
            result ="";  
        });  
  
        request.on('done', function(rowCount, more) {  
        console.log(rowCount + ' rows returned');  
        });  
        conn.execSql(request);  
    }  

