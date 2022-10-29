<script lang="ts">
  import { fade } from 'svelte/transition';
  import Avatar from './Avatar.svelte';

  type NotificationPayload = {
    type: 'react' | 'group' | 'message' | 'comment';
    data?: string;
  };

  export let read: boolean = false;
  export let by: string;
  export let event: string;
  export let payload: NotificationPayload = { type: 'react' };
  export let at: string;
</script>

<article
  class="flex p-4 rounded-lg transition-colors text-sm md:text-base text-left"
  class:bg-very-light-grayish-blue={!read}
>
  <h2 class="sr-only">Notification by {by}</h2>
  <div>
    <Avatar name={by} />
  </div>

  <div class="flex justify-between w-full ml-2 md:ml-4">
    <div class="w-full">
      <!-- By -->
      <span class="inline text-very-dark-blue font-extrabold">{by}</span>

      <!-- Event -->
      <p class="inline ml-[0.2em] text-grayish-blue">{event}</p>

      <!-- Title -->
      {#if (payload.type === 'react' || payload.type === 'group') && payload.data}
        <a
          class="inline ml-[0.2em] font-extrabold hover:text-blue transition-colors pointer-events-auto"
          class:text-grayish-blue={payload.type === 'react'}
          class:text-blue={payload.type !== 'react'}
          href="/"
        >
          {payload.data}
        </a>
      {/if}

      <!-- Unread -->
      {#if !read}
        <i
          class="inline-block w-[0.5em] h-[0.5em] ml-[0.2em] mb-[0.1em] rounded-full bg-red"
        />
      {/if}

      <!-- Time -->
      <p class="text-light-grayish-blue">{at} ago</p>

      <!-- Message -->
      {#if payload.type === 'message' && payload.data}
        <a
          class="block p-4 mt-4 rounded-md border border-light-grayish-blue pointer-events-auto hover:border-transparent hover:bg-lighter-grayish-blue transition-colors"
          href="/"
        >
          <p class="text-grayish-blue">{payload.data}</p>
        </a>
      {/if}
    </div>

    <!-- Comment -->
    {#if payload.type === 'comment' && payload.data}
      <a
        transition:fade={{ duration: 150 }}
        class="flex-shrink-0 w-10 h-10 ml-4 rounded-md overflow-hidden pointer-events-auto"
        href="/"
      >
        <img
          src={`/images/${payload.data}.webp`}
          alt={`Commented picture ${payload.data}`}
          width="40"
          height="40"
        />
      </a>
    {/if}
  </div>
</article>
