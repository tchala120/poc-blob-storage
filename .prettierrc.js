module.exports = {
	endOfLine: 'auto',
	semi: false,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'all',
	useTabs: true,
	printWidth: 120,
	plugins: ['@trivago/prettier-plugin-sort-imports'],
	importOrder: ['@/api', '@/components', '@/fonts', '@/setup', '^[./]'],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
}
