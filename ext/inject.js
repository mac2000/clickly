const s = document.createElement('script');
s.src = 'https://localhost:8080/clickly.client.js?v=' + Date.now();
s.setAttribute('data-clickly-tid', 'UA-XXXXX-1')
s.async = true;
(document.head || document.documentElement).appendChild(s);