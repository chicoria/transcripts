export const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    document.execCommand('insertHTML', false, text);
}

export const disableNewlines = event => {
    const keyCode = event.keyCode || event.which

    if (keyCode === 13) {
        event.returnValue = false
        if (event.preventDefault) event.preventDefault()
    }
}
