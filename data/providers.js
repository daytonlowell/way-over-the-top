function badge(className, text) {
	return { className, text }
}
const yes = badge('badge-success', 'Yes')
const no = badge('badge-danger', 'No')
const addon = badge('badge-warning', 'Add-on')

export default [{
	name: 'Hulu Live TV',
	url: 'https://www.hulu.com/live-tv',
	badges: {
		true: yes,
		false: no,
		'Add-on': addon,
	},
}, {
	name: 'YouTube TV',
	url: 'https://tv.youtube.com/welcome/',
	badges: {
		true: yes,
		false: no,
		'Add-on': addon,
	},
}, {
	name: 'Sling TV',
	url: 'https://www.sling.com/service',
	badges: {
		true: yes,
		false: no,
		'Add-on': addon,
		20: badge('badge-default', '$20'),
		25: badge('badge-primary', '$25'),
	},
}, {
	name: 'DirecTV Now',
	url: 'http://cdn.directv.com/content/dam/dtv/gmott/html/compare-packages-account.html',
	badges: {
		true: yes,
		false: no,
		'Add-on': addon,
		40: badge('badge-default', '$40'),
		55: badge('badge-primary', '$55'),
		65: badge('badge-info', '$65'),
		75: badge('badge-success', '$75'),
	},
}, {
	name: 'PlayStation Vue',
	url: 'https://www.playstation.com/en-us/network/vue/channels/',
	badges: {
		true: yes,
		false: no,
		'Add-on': addon,
		45: badge('badge-default', '$45'),
		50: badge('badge-primary', '$50'),
		60: badge('badge-info', '$60'),
		80: badge('badge-success', '$80'),
	},
}]
