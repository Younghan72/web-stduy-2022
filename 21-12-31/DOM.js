// dom (돔)
// html 요소를 가지고 와서 자바스크립트로 제어하는 것을 돔이라고 함
// 1. add 버튼 가지고 와서 콘솔로 출력
    const button = document.querySelector(`button`)
   console.log()
//    console.log(document.getElementsByTagName(`button`))
   
// 2. add 버튼 클릭하면 경고창 출력
button.addEventListener('click', function () {
        alert()
    })
// 3. li 클릭하면 경고창 출력
    const clickLi = document.querySelectorAll(`li`)
    // console.log(clili[3])
    
    for (let i = 0; i < clickLi.length; i++) {
        clickLi[i].addEventListener(`click`,function () {
            // alert(clickLi[i].innerText)       
            alert(clickLi[i].id)
        })   
    }

    // const clickLi = document.querySelectorAll(`li`) // 배열!!
    // for (let i = 0; i < clickLi.length; i++) {
    //     clickLi.addEventListener(`click`,function () {
    //         alert()        
    //     })
    // }  