export const emailCheck = (email) => {
    let _reg = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/
      //^[]는 첫글자를 뜻하고 ([])안에 있는것들은 n번 들어갈수 있다는 뜻 
    return _reg.test(email)
}