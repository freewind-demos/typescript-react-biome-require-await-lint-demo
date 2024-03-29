TypeScript React Biome Require Await Lint Demo
=================================

在biome中叫'useAwait'

注意，biome中将各种rules进行了分类，在biome.json中配置某个rule时，需要先写其分类：

```
"rules": {
	"suspicious": {
		"useAwait": "error"
	}
}
```

比如 `useAwait` 是在 `suspicious` 分类下。

当然，也可以直接

```
"rules": {
	"all": true
}
```

```
pnpm run lint
pnpm run fix
```

