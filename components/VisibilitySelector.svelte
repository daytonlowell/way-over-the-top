<script>
  export let context
  export let items = []
  export let shown= {}
  export let displayProperty = ''
  export let isDarkMode = false

  function showItem(item, show) {
    shown = { ...shown, [item[displayProperty]]: show }

    localStorage.setItem(`shown${ context }`, JSON.stringify(shown))
  }
</script>

<table class="table table-hover text-center table-bordered table-responsive" class:table-dark="{isDarkMode}">
  <thead class="thead-inverse">
    <tr>
      <th style="width: 100vw">{ context }</th>
    </tr>
  </thead>
  <tbody>
    {#each items as item}
      <tr
        on:click={(e) => showItem(item, !shown[item[displayProperty]])}
        class:bg-primary={ shown[item[displayProperty]] }
        style="cursor: pointer;"
      >
        <th scope="row">{ item[displayProperty] }</th>
      </tr>
    {/each}
  </tbody>
</table>
