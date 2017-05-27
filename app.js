const channelComponent = new Channels({
  target: document.querySelector( 'main' ),
  data: {
    channelPickMode: false,
  }
});

  channelComponent.on( 'shown-clicked', event => {
  	if(channelComponent.get('channelPickMode')) {
	  	const channels = channelComponent.get('channels')

	  	const filteredChannels = channels.map(function(channel, index) {
		   if(index === event.i) {
		     return Object.assign(channel, { shown: !channel.shown } )
		   }
		   else return channel
		});

	  	channelComponent.set({ channels: filteredChannels })
  	}
  });