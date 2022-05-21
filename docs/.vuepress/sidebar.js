
// 具体配置文档: https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F


module.exports = {
	
	// 普通菜单-管控
	'/guide/': require('../guide/sidebar'),

	// 多级菜单-管控
	'/baodian/high/': require('../baodian/high/sidebar'),
	'/baodian/zero/': require('../baodian/zero/sidebar')

	// ...
}