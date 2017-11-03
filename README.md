# Clickly

Demo

# Hooks

**.git/hooks/post-commit**

```sh
#!/bin/sh

exec git push
exec npm run deploy
```