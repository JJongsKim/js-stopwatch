let min = 0;
let sec = 0;
let ms = 0; // 시간의 초기값을 설정합니다.

// 각 변수 별로 html에서 element를 가져오는 코드를 작성하세요 (*변수명을 수정하지 말아주세요)
const millisec = document.querySelector('#millisec');
const second = document.querySelector('#seconds');
const minutes = document.querySelector('#minutes');

const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

// 스톱워치의 상태
let state

// 시작 버튼 클릭 시 시간이 10ms씩 증가합니다.
// 중복 방지 clearInterval 추가
startBtn.addEventListener('click', ()=>{
    console.log('Start click!');
    clearInterval(state)
    state = setInterval(increasingTime, 10);
})

// 10ms=1/100s -> 99 초과 시 second로 -> 60 초과 시 minutes로
// min, sec는 01, 02, 03 형태로 표시되도록
function increasingTime() {
    ms++;
    millisec.innerHTML = ms;
    if (ms > 99) {
        sec++;
        if (sec > 9) {
            second.innerHTML = sec;
        } else { second.innerHTML = "0" + sec;}

        // ms 초기화 
        ms = 0
        millisec.innerHTML = "00";

        if (sec > 59) {
            min++;
            if (min > 9) {
                minutes.innerHTML = min;
            } else {minutes.innerHTML = "0" + min;}

        // sec 초기화
            sec = 0;
            second.innerHTML = "00";
        }
    }
}

//일시정지 버튼 클릭 시 시간 증가가 정지됩니다.
stopBtn.addEventListener('click', ()=>{
    console.log('Stop Click!');
    clearInterval(state);
})


//리셋 버튼 클릭 시 시간이 상태로 초기화 됩니다.
resetBtn.addEventListener('click', ()=>{
    console.log('Reset Click!');
    clearInterval(state);
    ms=0; sec=0; min=0;
    millisec.innerHTML="00";
    second.innerHTML="00";
    minutes.innerHTML="00";
})