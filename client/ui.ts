console.log('[SYSTEM] ui.ts START GOOD')
$('body').hide();

addEventListener('message', (event) => {
    if (event.data.type === 'open') {
        $('body').show();
    } else {
        $('body').hide();
    }
});

addEventListener('message', (event) => {
    if (event.data.close === 'close')
   $('body').hide();
});

    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
                    $('body').hide();
                  fetch(`https://${GetParentResourceName()}/close`, {
                      method: 'POST',
                      headers: {
                          'Content-Type': 'application/json; charset=UTF-8',
                      },
                      body: JSON.stringify({
                          debug: '[DEBUG] NUI successfully closed'
                      })
                  })
        }
    })

const button = document.querySelector('button');

button.addEventListener('click', (event) => {
  button.textContent = `Click count: ${event.detail}`;
  console.log('sgfrepoljn')
});