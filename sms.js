var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('sms.json', 'utf8'));
var obj2 = obj.sms_list;
var required_income = obj.required_income;



// imu tik income iš objekto. 
// nesugalvoju kaip padaryti, kad 0.41 būtų = 0.5 

var viso = [];
for (var i = 0; i < obj2.length; i++) {
    viso.push(obj2[i].income)
}
// console.log(viso)

// funkcija skaičiuoja iš duoto skaičiaus objekte "required_income": 11 
// atiminėja tol kol bus arčiausiai 0

function sum_best(src, val) {
    var result = [];

    while (val > 0) {
        for (var i = src.length - 1; i >= 0; i--) {
            if (src[i] <= val || i == 0) {
                val = val - src[i];
                result.push(src[i]);
                break;
            }
        }
    }
    return result;
}
// į funkciją paduodi array ir sumą reikiamą. 
console.log(sum_best(viso, required_income))

