// Auto-refresh iframe every 60 seconds
setInterval(() => {
  const iframe = document.querySelector("iframe");
  if (iframe) iframe.src = iframe.src;
}, 60000); // 60,000ms = 60 seconds
