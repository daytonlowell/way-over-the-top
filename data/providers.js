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
	}
}, {
	name: 'YouTube TV',
	url: 'https://tv.youtube.com/welcome/',
	badges: {
		true: yes,
		false: no,
		'Add-on': addon,
	}
}, {
	name: 'Sling TV',
	url: 'https://www.sling.com/service',
	badges: {
		true: yes,
		false: no,
		'Add-on': addon,
		20: badge('badge-default', '$20'),
		25: badge('badge-primary', '$25')
	}
}, {
	name: 'DirecTV Now',
	url: 'http://cdn.directv.com/content/dam/dtv/gmott/html/compare-packages-account.html',
	badges: {
		true: yes,
		false: no,
		'Add-on': addon,
		35: badge('badge-default', '$35'),
		50: badge('badge-primary', '$50'),
		60: badge('badge-info', '$60'),
		70: badge('badge-success', '$70')
	}
}, {
	name: 'PlayStation Vue',
	url: 'https://www.playstation.com/en-us/network/vue/channels/',
	badges: {
		true: yes,
		false: no,
		'Add-on': addon,
		30: badge('badge-default', '$30'),
		35: badge('badge-primary', '$35'),
		45: badge('badge-info', '$45'),
		65: badge('badge-success', '$65')
	}
}]
