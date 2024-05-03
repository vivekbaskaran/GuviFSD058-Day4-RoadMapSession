var json = [{
    "id" : "vivek", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "zen portal task",
    "mail": "vivbas@gmail.com"
},
{
    "id" : "vivek", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "zen portal task",
    "mail": "vivbas6@gmail.com"
}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.task);
    console.log(obj.mail);

}
//for Each
json.forEach(function(obj) { console.log(obj.msg); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].id);
  //console.log(json[key].msg);
 
}
}
//for Of
let text = "";
for (let x of json[key].id) {
 text += x; 
}
 console.log(text);