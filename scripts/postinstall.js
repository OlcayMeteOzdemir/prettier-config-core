const fs = require('fs');
const path = require('path');

const configPath = path.join(process.env.INIT_CWD, '.prettierrc.js');
const ignorePath = path.join(process.env.INIT_CWD, '.prettierignore');

if (!fs.existsSync(configPath)) {
	fs.writeFileSync(
		configPath,
		"module.exports = {\n\t...require('@meteozdemir/prettier-config-core'),\n};\n",
	);
}

if (!fs.existsSync(ignorePath)) {
	fs.writeFileSync(ignorePath, 'node_modules\n');
}
