var webdriver = require('selenium-webdriver');
require('chromedriver');
var browser = 'firefox';
var driver = new webdriver.Builder().forBrowser(browser).build();

// process.argv.forEach((val, index) => {
  
// });

var url = 'http://مركز-التسجيل.السعودية/';
driver.get(url);

// driver.takeScreenshot().then(
//     function(image, err) {
//         require('fs').writeFile('out.png', image, 'base64', function(err) {
//             console.log(err);
//         });
//     }
// );
driver.manage().window().getPosition().then((data)=>{
console.log(data.x);
var spawn = require("child_process").spawn;
var process = spawn('python',["screen.py", data.x,data.y,data.width,url]);
process.stdout.on('data', function (data){
    
// Do something with the data returned from python script
});


}).catch((err)=>{
console.log(err);
});

// const screenshot = require('screenshot-desktop')

// screenshot().then((img) => {


// }).catch((err) => {
//   // ...
// })
// var webshot = require('node-webshot');

// webshot('www.google.com', 'google.png', function(err) {
//   // screenshot now saved to google.png
// });

// var fs = require('fs');
// fs.writeFile("/test", "Hey there!", function(err) {
//     if(err) {
//         return console.log(err);
//     }

//     console.log("The file was saved!");
// }); 

 var fs = require('fs');
var dateTime = require('node-datetime');
var dt = dateTime.create();
dt.format('m/d/Y H:M:S');
fs.appendFileSync('test.csv', '\n'+url+','+ new Date(dt.now()) + ','+ __dirname +',' +process.platform +','+browser);
