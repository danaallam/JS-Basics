
const stringSize = (text) => {
    return text.length;
}
const replaceCharacterE = (text) => {
    var t=text.replace("e", " ");
    return t;
}
const concatString = (text1, text2) => {
    return text1+text2;
}
const showChar5 = (text) => {
    return text.charAt(4);
}
const showChar9 = (text) => {
    return text.substring(0, 9);
}
const toCapitals = (text) => {
    return text.toUpperCase();
}
const toLowerCase = (text) => {
    return text.toLowerCase();    
}
const removeSpaces = (text) => {
    return text.trim();
}
const IsString = (text) => {
    return typeof(text)=="string";
}

const getExtension = (text) => {
    return text.substring(15);
}
const countSpaces = (text) => {
    let s=text.split(' ');
    return s.length-1;
}
const InverseString = (text) => {
    return text.split('').reverse().join('');
}

const power = (x, y) => {
    return Math.pow(x, y);
}
const absoluteValue = (num) => {
    return Math.abs(num);
}
const absoluteValueArray = (array) => {
    return array.map(Math.abs);
}
const circleSurface = (radius) => {
    return Math.ceil(Math.PI*Math.pow(radius, 2));
}
const hypothenuse = (ab, ac) => {
    return Math.sqrt(Math.pow(ab, 2)+Math.pow(ac, 2));;
}
const BMI = (weight, height) => {
    return Math.round((weight/Math.pow(height, 2)*100))/100;
}

const createLanguagesArray = () => {
    return [ 'Html', 'CSS', 'Java', 'PHP' ];
}

const createNumbersArray = () => {
    var array=[];
    for(let i=0; i<=5; i++){
        array.push(i);
    }
    return array;
}

const replaceElement = (languages) => {
    languages[2]='Javascript';
    return languages;
}

const addElement = (languages) => {
    languages.push('Ruby');
    languages.push('Python');
    return languages;
}

const addNumberElement = (numbers) => {
    numbers.unshift(-1);
    numbers.unshift(-2);
    return numbers;
}

const removeFirst = (languages) => {
    languages.shift();
    return languages;
}

const removeLast = (languages) => {
    languages.pop();
    return languages;
}

const convertStrToArr = (social_arr) => {
    return social_arr.split(',');
}

const convertArrToStr = (languages) => {
    return languages.toString();
}

const sortArr = (social_arr) => {
    return social_arr.sort();
}

const invertArr = (social_arr) => {
    return social_arr.reverse();
}