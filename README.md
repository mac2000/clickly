# Clickly

Demo

# Google Tag Manager

```html
<script>
    var s = document.createElement('script');
    s.src = 'https://clickly.marchenko.net.ua/clickly.client.js?v=' + Date.now();
    s.setAttribute('data-clickly-tid', 'UA-XXXXX-1')
    s.async = true;
    (document.head || document.documentElement).appendChild(s);
</script>
```

Do not forget change `UA-XXXXX-1`

# TODO:

fix image alt/title issue
filter events not by === but for startsWith
group by page type
