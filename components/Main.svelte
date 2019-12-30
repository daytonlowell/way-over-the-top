<script>
  import channelsData from '../data/provider-channels.js'
  import providersData from '../data/providers.js'
  import ChannelList from './ChannelList.svelte'
  import ChannelSelector from './VisibilitySelector.svelte'
  import ProviderSelector from './VisibilitySelector.svelte'

  let isDarkMode = false
  let providerPickMode = false
  let channelPickMode = false
  let shownChannels = {}
  let shownProviders = {}

  let channels = sortArrayByProperty(channelsData, 'name')
  let providers = sortArrayByProperty(providersData, 'name')

  if (window.matchMedia) {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')

    function colorSchemeChange(mql) {
      isDarkMode = mql.matches
    }

    mediaQueryList.addListener(colorSchemeChange)
    colorSchemeChange(mediaQueryList)
  }

  channels.forEach(channel => shownChannels[channel.name] = true)
  providers.forEach(provider => shownProviders[provider.name] = true)
  
  function sortArrayByProperty(array, prop) {
    return array.slice().sort((a, b) => {
      const first = a[prop].toUpperCase()
      const next = b[prop].toUpperCase()

      if (first < next) {
        return -1
      } else return 1
    })
  }

  const localStorageShownChannels = localStorage.getItem('shownChannels')
  if (localStorageShownChannels) {
    Object.assign(shownChannels, JSON.parse(localStorageShownChannels))
  }

  const localStorageShownProviders = localStorage.getItem('shownProviders')
  if (localStorageShownProviders) {
    let providersForMigration = JSON.parse(localStorageShownProviders)

    //Migrate old provider keys to new ones. Delete defunct providers.
    if (providersForMigration['Sling TV']) {
      providersForMigration['Sling Orange'] = providersForMigration['Sling TV']
      providersForMigration['Sling Blue'] = providersForMigration['Sling TV']

      delete providersForMigration['Sling TV']
    }

    if (providersForMigration['DirecTV Now']) {
      providersForMigration['AT&T TV Now'] =
      providersForMigration['DirecTV Now']

      delete providersForMigration['DirecTV Now']
    }

    delete providersForMigration['PlayStation Vue']

    Object.assign(shownProviders, providersForMigration)

    //Now that we've migrated, rewrite the providers.
    localStorage.setItem('shownProviders', JSON.stringify(providersForMigration))
  }

  $: visibleChannels = channels.filter(channel => shownChannels[channel.name])
  $: visibleProviders = providers.filter(provider => shownProviders[provider.name])
  $: pickingMode = channelPickMode || providerPickMode

  function showAll(show) {
    if (channelPickMode) {
      Object.keys(shownChannels).forEach(channel => {
        shownChannels[channel] = show
      })

      if (show) localStorage.removeItem('shownChannels')
      else localStorage.setItem('shownChannels', JSON.stringify(shownChannels))
    } else if (providerPickMode) {
      Object.keys(shownProviders).forEach(provider => {
        shownProviders[provider] = show
      });

      if (show) localStorage.removeItem('shownProviders')
      else
        localStorage.setItem('shownProviders', JSON.stringify(shownProviders))
    }
  }

  function donePicking() {
    channelPickMode = false
    providerPickMode = false
  }
</script>

<style>
  .pick-buttons {
    margin-top: 5px;
    margin-bottom: 5px;
    display: inline-block;
    cursor: pointer;
  }
</style>

<div class="container">
  <div class="d-flex mb-1 mt-1" class:sticky={pickingMode}>
    <div class="mr-auto">
      {#if pickingMode}
        <button
          class="btn btn-outline-primary pick-buttons"
          on:click={e => showAll(true)}>
          Select All
        </button>
        <button
          class="btn btn-outline-primary pick-buttons"
          on:click={e => showAll(false)}>
          Select None
        </button>
      {:else}
      <p class="h3 d-none d-sm-block" class:text-white={isDarkMode}>
        Way
        <a
          style="color: unset"
          href="https://en.wikipedia.org/wiki/Over-the-top_content"
          target="_blank">
          Over the Top
        </a>
      </p>
      {/if}
    </div>
    <div>
    {#if pickingMode}
      <button
        class="btn btn-outline-primary pick-buttons"
        on:click={e => donePicking()}>
        Done
      </button>
    {:else}
      <button
        class="btn btn-outline-primary pick-buttons"
        on:click={e => channelPickMode = true}>
        Pick Channels
      </button>
      <button
        class="btn btn-outline-primary pick-buttons"
        on:click={e => providerPickMode = true}>
        Pick Providers
      </button>
    {/if}
    </div>
  </div>
  {#if channelPickMode}
    <ChannelSelector
      context={'Channels'}
      displayProperty={'name'}
      bind:items={channels}
      bind:visibleItems={visibleChannels}
      bind:shown={shownChannels}
      isDarkMode="{isDarkMode}" />
  {:else if providerPickMode}
    <ProviderSelector
      context={'Providers'}
      displayProperty={'name'}
      bind:items={providers}
      bind:visibleItems={visibleProviders}
      bind:shown={shownProviders}
      isDarkMode="{isDarkMode}" />
  {:else}
    <ChannelList isDarkMode="{isDarkMode}" channels={visibleChannels} providers={visibleProviders} />
  {/if}
</div>
