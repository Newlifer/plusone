chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.text === 'plusone') {
        $('textarea[name="comment[body]"]').val('+1');
        $('.btn-primary').click();
        location.reload();
    }
});