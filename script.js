// dataset.jsに質問と回答
import flowChart from './dataset.js';
// HTML取得
const $button = document.getElementsByTagName('button');
const $remove = document.getElementsByClassName('remove');
const $statusContent = document.getElementsByClassName('status');
const $status = document.getElementById('js-status');
const $status_1 = document.getElementById('js-status_1');
const $status_2 = document.getElementById('js-status_2');
const $question = document.getElementById('js-question');
const $h1 = document.getElementsByTagName('h1');
const $main = document.getElementById('main');
const $_1gou_kokuho = document.getElementById('_1gou_kokuho');
const $_1gou_huyou = document.getElementById('_1gou_huyou');
const $_1gou_ninkei = document.getElementById('_1gou_ninkei');
const $_2gou = document.getElementById('_2gou');
const $_2gou_kamo = document.getElementById('_2gou_kamo');
const $_3gou = document.getElementById('_3gou');
const $aboutQuestion = document.querySelectorAll('.about-question');
// dataset.jsの定数flowChart何番目
let flowChartIndex = 0;
// 質問文と選択肢とstatusの定義
const setup = () => {
    // 結果画面を表示する
    // else以降は質問画面
    if(flowChartIndex === '一号・国保') {
        $_1gou_kokuho.style.display = 'block';
        $main.style.display = 'none';
    } else if(flowChartIndex === '一号・扶養') {
        $_1gou_huyou.style.display = 'block';
        $main.style.display = 'none';
    } else if (flowChartIndex === '一号・任継') {
        $_1gou_ninkei.style.display = 'block';
        $main.style.display = 'none';
    } else if(flowChartIndex === '二号') {
        $_2gou.style.display = 'block';
        $main.style.display = 'none';
    } else if(flowChartIndex === '二号かも') {
        $_2gou_kamo.style.display = 'block';
        $main.style.display = 'none';
    } else if(flowChartIndex === '三号') {
        $_3gou.style.display = 'block';
        $main.style.display = 'none';
    } else {
        // 現在のflowChartのインデックス番号
        let now = flowChart[flowChartIndex]
        // statusの数に応じてstatus表示を変える
        let statusLength = now.status.length;
        if(now.status === '') {
            $statusContent[0].style.display = 'none';
        } else {
            $statusContent[0].style.display = 'block';
            if(statusLength === 1) {
                $status.style.display = 'none';
                $status_1.textContent = now.status;
            } else {
                $status.style.display = 'initial';
                $status_1.textContent = now.status[0];
                $status_2.textContent = now.status[1];
            }
        }
        // 質問を取得して表示
        $question.textContent = now.question;
        // answersの数
        let answersLength = now.answers.length;
        // ボタン2つか4つか
        if(answersLength === 2) {
            $remove[0].style.display = 'none';
            $remove[1].style.display = 'none';
        } else {
            $remove[0].style.display = 'initial';
            $remove[1].style.display = 'initial';
        }
        // ボタンに回答表示
        let buttonIndex = 0;
        while(buttonIndex < answersLength) {
            $button[buttonIndex].textContent = now.answers[buttonIndex];
            buttonIndex ++;
        }
    }
};
setup();

// ボタンクリックしたらば
// 次の質問インデックスへ
const clickHandler = (e) => {
    if(flowChart[flowChartIndex].answers[0] === e.target.textContent) {
        flowChartIndex = flowChart[flowChartIndex].index[0];
    } else if(flowChart[flowChartIndex].answers[1] === e.target.textContent) {
        flowChartIndex = flowChart[flowChartIndex].index[1];
    } else if(flowChart[flowChartIndex].answers[2] === e.target.textContent) {
        flowChartIndex = flowChart[flowChartIndex].index[2];
    } else if(flowChart[flowChartIndex].answers[3] === e.target.textContent) {
        flowChartIndex = flowChart[flowChartIndex].index[3];
    }
    setup();
};
// クリックイベント
let handleIndex = 0;
while(handleIndex < 4) {
    $button[handleIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handleIndex ++;
}
// タイトルクリックで最初に戻る
$h1[0].addEventListener('click', function() {
    flowChartIndex = 0;
    $_1gou_kokuho.style.display = 'none';
    $_1gou_huyou.style.display = 'none';
    $_1gou_ninkei.style.display = 'none';
    $_2gou.style.display = 'none';
    $_2gou_kamo.style.display = 'none';
    $_3gou.style.display = 'none';
    $main.style.display = 'block';
    setup();
});
// 結果画面アコーディオン
$aboutQuestion.forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('open');
        question.nextElementSibling.classList.toggle('open');
    });
});