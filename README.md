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

group by page type

category - document.querySelectorAll('.subcategoryName').length > 0
products - document.querySelectorAll('.product-grid').length > 0 && document.querySelectorAll('.subcategoryName').length === 0
product  - document.querySelectorAll('input[name="product_id"]').length > 0