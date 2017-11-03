# Clickly

Demo

# Hooks

**.git/hooks/post-commit**

```sh
#!/bin/sh

exec git push && npm run deploy
```

For this to work file must be executable - `chmod +x .git/hooks/post-commit`