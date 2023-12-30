
function loadContentBlock(id, content) {
    setTimeout(() => {
      document.getElementById(id).innerHTML = content;
    }, Math.random() * 2000); 
  }

  
  loadContentBlock('content-block-1', 'bigpipe 1');
  loadContentBlock('content-block-2', 'bigpipe 2');
  loadContentBlock('content-block-3', 'bigpipe 3');
  loadContentBlock('content-block-4', 'bigpipe 4');
  loadContentBlock('content-block-5', 'bigpipe 5');
  loadContentBlock('content-block-6', 'bigpipe 6');
  loadContentBlock('content-block-7', 'bigpipe 7');
  loadContentBlock('content-block-8', 'bigpipe 8');
  loadContentBlock('content-block-9', 'bigpipe 9');



