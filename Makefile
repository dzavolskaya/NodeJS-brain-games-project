install:
	npm install
brain-even:
	npx babel-node -- src/bin/brain-even.js
brain-calc:
	npx babel-node -- src/bin/brain-calc.js
publish:
	npm publish
lint:
	npx eslint src/
