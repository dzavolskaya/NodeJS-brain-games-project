install:
	npm install
brain-even:
	npx babel-node -- src/bin/brain-even.js
brain-calc:
	npx babel-node -- src/bin/brain-calc.js
brain-gcd:
	npx babel-node -- src/bin/brain-gcd.js
brain-progression:
	npx babel-node -- src/bin/brain-progression.js
publish:
	npm publish
lint:
	npx eslint src/
