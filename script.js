// firstname
var form = document.createElement('form');
var label1 = label('label','First Name');
label1.setAttribute('for','firstname');

var br1 = document.createElement('br');

var input1 = document.createElement('input');
input1.setAttribute('type','text');
input1.setAttribute('id','firstname');
input1.setAttribute('placeholder','firstname');

form.append(label1,br1,input1);
// middlename
var br2 = document.createElement('br');

var label2 = label('label','Middle Name');
label2.setAttribute('for','middlename');

var br3 = document.createElement('br');

var input2 = document.createElement('input');
input2.setAttribute('type','text');
input2.setAttribute('id','middlename');
input2.setAttribute('placeholder','middlename');

form.append(br2,label2,br3,input2);
// lastname
var br3 = document.createElement('br');

var label3 = label('label','Last Name');
label3.setAttribute('for','lastname');

var br4 = document.createElement('br');

var input3 = document.createElement('input');
input3.setAttribute('type','text');
input3.setAttribute('id','lastname');
input3.setAttribute('placeholder','lastname');

form.append(br3,label3,br4,input3);
// email
var br4 = document.createElement('br');

var label4 = label('label','Email');
label4.setAttribute('for','email');

var br5 = document.createElement('br');

var input4 = document.createElement('input');
input4.setAttribute('type','email');
input4.setAttribute('id','email');
input4.setAttribute('placeholder','email');

form.append(br4,label4,br5,input4);
// break
var br6 = document.createElement('br');
var br7 = document.createElement('br');

//submit

form.append(br6,br7);
var input5 = document.createElement('input');
 input5.setAttribute('type','submit');
 input5.setAttribute('value','submit');
 input5.setAttribute('onclick','foo()');



document.body.append(form);

function label(text,value) {
    var element = document.createElement(text);
    element.innerHTML = value;
    return element;
}

function foo() {
    var result1 = document.getElementById("firstname").value;
    console.log(result1);
    var result2 = document.getElementById("middlename").value;
    console.log(result2);
    var result3 = document.getElementById("lastname").value;
    console.log(result3);
    var result4 = document.getElementById("email").value;
    console.log(result4);
}