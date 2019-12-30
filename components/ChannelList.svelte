<script>
	export let providers = []
	export let channels = []
	export let isDarkMode = false
	$: displayChannels = calcDisplayChannel(channels, providers)

	const badge = (className, text) => {
		return { className, text }
	}

	const yes = badge('badge-primary', 'Yes')
	const no = badge('badge-danger', 'No')
	const addon = badge('badge-warning', 'Add-on')

	const getBadge = (channel, provider) => {
		const providerChannelSupport = channel.providers[provider.name]

		if (providerChannelSupport === 'add-on') {
			return addon
		} else if (providerChannelSupport) {
			return yes
		} else {
			return no
		}
	}

	const calcDisplayChannel = (channels, providers) => {
		return channels.map(channel => {
			const providerBadges = providers
				.reduce((acc, provider) => {
					return Object.assign({}, acc, {
						[provider.name]: getBadge(channel, provider)
					})
				}, {})

			return Object.assign({}, channel, { providers: providerBadges })
		})
	}
</script>

<style>
	a {
		color: unset;
	}
</style>

<div class="table-responsive">
	<table class="table table-hover table-bordered" class:table-dark="{isDarkMode}">
		<thead>
			<tr>
				<th scope="col">
					Channel
				</th>
				{#each providers as provider}
				<th scope="col">
					<a href="{provider.url}" target="_blank">{provider.name}</a>
				</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each displayChannels as channel}
			<tr>
				<th scope="row">{channel.name}</th>
				{#each Object.keys(channel.providers) as provider}
				<td>
					<span class="badge badge-pill {channel.providers[provider].className}">
						{channel.providers[provider].text}
					</span>
				</td>
				{/each}
			</tr>
			{/each}
		</tbody>
	</table>
</div>