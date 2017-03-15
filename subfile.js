var express = require('express');

var fs = require('fs');

var data = fs.readFileSync('words.json');
var words = JSON.parse(data);

var data1 = fs.readFileSync('less.json');
var less1 = JSON.parse(data1);
var less = less1.Cipla;

var cip = words.Cipla.OpenPrice;
var cipl = words.Cipla.ClosePrice;


module.exports = function() {

  var less = { "Cipla":{} }
    for (var i = 2; i < 29; i++) {
        //if(cip["28-February-2017"] < cipl["27-February-2017"]);

        if (cip[i + "-February-2017"] !== undefined) {
            //console.log(i +"i");
        var q=i;
            while(cipl[(q - 1) + "-February-2017"] === undefined) {

                //console.log(cipl[(q - 1) + "-February-2017"]);

                q--;
           }

            if (cip[i + "-February-2017"] < cipl[(q - 1) + "-February-2017"]) {
                console.log(i + "-February-2017" + '  and  ' + cip[i + "-February-2017"]);

                less.Cipla[i + "-February-2017"] = cip[i + "-February-2017"];

                        var tdata = JSON.stringify(less, null, 2);
                        fs.writeFile('less.json', tdata, finished);

                        function finished(err) {
                            console.log('all set..')
                         }



            }//if

        }//if above

    } //for

}; //function
