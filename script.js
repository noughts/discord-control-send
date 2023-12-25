const app = document.querySelector('#app-mount');
const useCapture = true;
app.addEventListener('keydown', (event) => {
	const isMsgTextbox = event.target.role === 'textbox' && event.target.ariaMultiline;
	if (isMsgTextbox === false) {
		console.log("テキストボックスが見つかりません")
		return;
	}

	const pressedShiftEnter = event.metaKey && event.key === 'Enter';
	if (pressedShiftEnter) {
		console.log("送信します")
		return;
	}

	const pressedEnter = event.altKey === false && event.ctrlKey === false && event.key === 'Enter';
	if (pressedEnter) {
		console.log("送信抑制")
		event.stopPropagation();
	}
}, useCapture);