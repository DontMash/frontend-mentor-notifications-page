<script lang="ts">
  import { fade } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';

  export let notificationsCount = 0;

  const dispatch = createEventDispatcher();

  function dispatchClear() {
    dispatch('clear');
  }
</script>

<header class="flex items-center h-20 md:h-24 py-6">
  <h1 class=" text-xl text-very-dark-blue font-jakarta font-extrabold">Notifications</h1>
  {#if notificationsCount > 0}
    <span
      transition:fade={{ duration: 150 }}
      class="px-2.5 py-0.5 ml-2 rounded-md bg-blue text-base text-white">{notificationsCount}</span
    >
    <button
      transition:fade={{ duration: 150 }}
      class="ml-auto text-grayish-blue hover:text-blue transition-colors"
      type="button"
      on:click={dispatchClear}>Mark all as read</button
    >
  {/if}
</header>
