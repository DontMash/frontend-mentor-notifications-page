<script lang="ts">
  import Footer from './lib/Footer.svelte';
  import Header from './lib/Header.svelte';
  import Notification from './lib/Notification.svelte';

  type NotificationPayloadDTO = {
    type: 'react' | 'group' | 'message' | 'comment';
    data?: string;
  };

  type NotificationDTO = {
    read?: boolean;
    by: string;
    event: string;
    payload?: NotificationPayloadDTO;
    at: string;
  };

  let notifications: NotificationDTO[] = [
    {
      by: 'Mark Webber',
      event: 'reacted to your recent post',
      payload: { type: 'react', data: 'My first tournament today!' },
      at: '1m',
    },
    {
      by: 'Angela Gray',
      event: 'followed you',
      payload: { type: 'react', data: 'My first tournament today!' },
      at: '5m',
    },
    {
      by: 'Jacob Thompson',
      event: 'has joined your group',
      payload: { type: 'group', data: 'Chess Club' },
      at: '1 day',
    },
    {
      read: true,
      by: 'Rizky Hasanuddin',
      event: 'sent you a private message',
      payload: {
        type: 'message',
        data: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      },
      at: '5 days',
    },
    {
      read: true,
      by: 'Kimberly Smith',
      event: 'commented on your picture',
      payload: { type: 'comment', data: 'image-chess' },
      at: '1 week',
    },
    {
      read: true,
      by: 'Nathan Peterson',
      event: 'reacted to your recent post',
      payload: {
        type: 'react',
        data: '5 end-game strategies to increase your win rate',
      },
      at: '2 weeks',
    },
    {
      read: true,
      by: 'Anna Kim',
      event: 'left the group',
      payload: { type: 'group', data: 'Chess Club' },
      at: '2 weeks',
    },
  ];
  let unreadNotificationsCount: number = 0;

  function markAllNotificationsRead() {
    const readNotifications: NotificationDTO[] = [...notifications];
    for (const notification of readNotifications) {
      notification.read = true;
    }
    notifications = readNotifications;
  }

  $: {
    const unreadNotifications: NotificationDTO[] = notifications.filter(
      (notification) => !notification.read
    );
    unreadNotificationsCount = unreadNotifications.length;
  }
</script>

<div class="md:max-w-[800px] px-4 md:px-8 mx-auto rounded-2xl bg-white md:shadow-2xl">
  <Header
    notificationsCount={unreadNotificationsCount}
    on:clear={markAllNotificationsRead}
  />
  <main>
    <section>
      <h2 class="sr-only">List of Notifications</h2>
      <ul class="space-y-4">
        {#each notifications as notification}
          <li>
            <div
              class={`w-full ${notification.read ? 'pointer-events-none' : ''}`}
              role="button"
              tabindex={notification.read ? null : 0}
              on:click={() => {
                notification.read = true;
              }}
              on:keydown={(event) => {
                if (event.code !== 'Enter') return;

                notification.read = true;
              }}
            >
              <Notification
                read={notification.read}
                by={notification.by}
                event={notification.event}
                payload={notification.payload}
                at={notification.at}
              />
            </div>
          </li>
        {/each}
      </ul>
    </section>
  </main>
</div>
<Footer />

<style>
  :root {
    @apply desktop;
  }
</style>
