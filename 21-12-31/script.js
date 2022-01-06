// var (x) , let (바뀌는거), const(상수, 이걸로만 변수 만들기)
// 1. a 변수안에 10 저장
    let a = 10
// 2. b 변수안에 hello 글자 저장 (b는 더 이상 변경되지 않음)
    const b = "hello"
    // "" / '' / ``
// 3. a 변수값에 + 10 추가 
    a = a + 10
// 4. a, b 변수를 콘솔로 출력
    console.log(a,b)

    const c = 'world'

// 5. b와 c 더한 후 새로운 변수에 저장, 콘솔 출력
    const d = b + c
    console.log(d)
// 6. 만약 b가 hello 이면 경고창으로 hi 출력
    // 아니라면 hello 출력
    // if (b=="hello") {
    //     alert(`hi`)
    // } else {
    //     alert(`hello`)
    // }
// 7. arr 변수에 red, yellow, green 저장
    let arr = [`red`, `yellow`, `green`]
    console.log(arr)
// 8. 콘솔로 yellow 출력 (arr 변수 활용)
    console.log(arr[1])
// 9. arr 배열의 길이를 콘솔로 출력
    console.log(arr.length)
// 10. arr에 black 요소 추가
    arr.push(`black`)
    console.log(arr)
// 11. user 객체 생성. name과 age 속성(프로퍼티) 추가

    let user = {
        name: `김영민`,
        age: `18`
    }
    console.log(user.name) // 객체.프로퍼티, 객체[프로퍼티명]
    console.log(user[`age`])
// 12. hello 함수 생성. hello함수가 호출되면 경고창에 hello 라고 나옴
    function hello(num) {
        // alert(`hello`)
        console.log(`hello`)
        // 함수 결과값: 리턴
        // 모든 함수는 기본적으로 undefined를 리턴
        console.log(num) // 10
        return true // 함수 종료
        return false
    }
    hello(10)
// 13. getNumber 함수 생성. 이 함수는 숫자 10을 리턴
    function getNumber() {
        return `10`
    }
// 14. sum 함수 생성. 매개변수 2개를 받아서 더한 후 결과값 리턴
    function sum(a,b) {
        return a + b
    }
// 14-1. sum 함수의 결과값을 변수에 저장 후 콘솔로 출력
    const text = sum(9,3)
    console.log(text)
    const users = [ {
        name: `김영민`,
        age: `18`
    }, {
        name: `elly`,
        age: `20`
    }]
// 15. getAge 함수 생성. user를 받은 후 콘솔로 user의 age 출력
    // function getAge(sel) {
    //     console.log(users[sel].age)
    // }
    function getAge(user) {
        // console.log(users)
            console.log(user.age)
    }

    const age = 10
    let result = ''
    if (age < 19) {
        result = 'false'
    } else {
        result = 'true'
    }

    // 조건 ? 참 : 거짓
    age < 19 ? result = `false` : result = `true`
    result = age < 19 ?`false` : `true`