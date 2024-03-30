// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

const input = document.querySelector('#from');
const span = document.querySelector('span');
input.addEventListener("input", () => {
    span.textContent = input.value
});
// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const btn = document.querySelector('.messageBtn');
const message = document.querySelector('.message');
btn.addEventListener("click", (e) => {
    message.classList.add("animate_animated", "animate_fadeInLeftBig");
    message.style.visibility = "visible";
})

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.
const form = document.querySelector('form');
const input1 = document.querySelector('input.form-control');
const input2 = document.querySelector('select');
const btn2 = document.querySelector('form button');
btn2.addEventListener("click", (e) => {
    e.preventDefault();
    if (input1.value === "" || input2.value === "") {
        input1.classList.add("error");
        input2.classList.add("error");
        const error = document.querySelectorAll('.error');
        error.forEach(element => {
            element.style.background = "red";
        });
    }else{
        input1.removeAttribute('style');
        input2.removeAttribute('style');
        input1.classList.remove("error");
        input2.classList.remove("error");
        
    }})