const getCookie = (name) => {
    let value = ";"+document.cookie;
    
    let parts = value.split(`; ${name}=`);

    if(parts.length === 2){
        return parts.pop().split(";").shift() // pop() 배열의 맨 뒤에 요소 제거 shift() 배열의 제일 앞에 요소 제거
    }
}

const setCookie = (name, value, exp = 5) => {

    let date = new Date();//현재 시간을 가져올수 있는 객채이다.
    date.setTime(date.getTime() + exp*24*60*60*1000)//getTime()으로 현재 시간을 숫자로 가져오고 setTime으로 객체의 일시를 지정해줄 수 있다.
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}`;//toUTCString()은 문자로 바꿔주는 역할을 한다. 날짜를 숫자에서 문자로 바꿔준다.
}

const deleteCookie = (name) => {
    let date = new Date("2020-01-01").toUTCString();
    console.log(date);

    document.cookie = name+"=; expires="+date;
}

export {getCookie, setCookie, deleteCookie}