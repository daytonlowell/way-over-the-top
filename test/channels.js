require('reify')

const tap = require('tap')

const providerChannels = require('../data/provider-channels.js').default
const providers = require('../data/providers.js').default

const providerMap = providers.reduce((map, provider) => {
	map[provider.name] = provider
	return map
}, Object.create(null))

tap.ok(Array.isArray(providerChannels), `provider-channels exports an array`)

tap.test(`Every channel has a name and a providers object`, t => {
	providerChannels.forEach(channel => {
		t.equal(typeof channel.Name, 'string')
		t.equal(typeof channel.Providers, 'object')
	})
	t.end()
})

tap.test(`Every channel's provider has a matching provider in providers.js`, t => {
	providerChannels.forEach(({ Name: channelName, Providers }) => {
		Object.keys(Providers).forEach(providerName => t.ok(providerMap[providerName], `${channelName} - ${providerName}`))
	})
	t.end()
})

tap.test(`Every channel's providers have matching badges in providers.js`, t => {
	providerChannels.forEach(({ Providers }) => {
		Object.keys(Providers).forEach(providerName => {
			const badges = providerMap[providerName].badges
			const channelProviderValue = Providers[providerName]

			const type = typeof channelProviderValue

			if (type === 'object') {
				Object.keys(channelProviderValue).forEach(providerLevel => {
					if (channelProviderValue[providerLevel]) {
						t.ok(badges[providerLevel])
					}
				})
			} else {
				t.ok(badges[channelProviderValue])
			}
		})
	})
	t.end()
})
