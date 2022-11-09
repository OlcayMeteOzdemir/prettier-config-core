module.exports = {
	/**
	 * Global
	 */
	// printWidth: 100, // .editorconfig (max_line_length)
	// tabWidth: 4, // .editorconfig (indent_size / tab_width)
	// useTabs: true, // .editorconfig (indent_style)
	embeddedLanguageFormatting: 'auto',
	// endOfLine: 'lf', // .editorconfig (end_of_line)
	// parser: null,
	// filepath: null,

	/**
	 * Common
	 */
	singleQuote: true,
	bracketSpacing: true,
	proseWrap: 'preserve',
	bracketSameLine: false,
	singleAttributePerLine: false,

	/**
	 * HTML
	 */
	htmlWhitespaceSensitivity: 'css',
	vueIndentScriptAndStyle: false,

	/**
	 * JavaScript
	 */
	semi: true,
	jsxSingleQuote: false,
	quoteProps: 'consistent',
	arrowParens: 'always',
	trailingComma: 'all',

	/**
	 * Special
	 */
	insertPragma: false,
	requirePragma: false,

	/**
	 * Range
	 */
	rangeStart: 0,
	rangeEnd: Infinity,

	/**
	 * Language Specific Settings
	 */
	overrides: [
		// CSS & SCSS
		{
			files: '*.?(s)css',
			options: {
				singleQuote: false,
			},
		},

		// YML & YAML
		{
			files: '*.y?(a)ml',
			options: {
				singleQuote: false,
			},
		},
	],
};
