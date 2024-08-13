
<script context="module" lang="ts">
  export async function load({ session }) {
    return {
      props: {
        user: session.user
      }
    };
  }
</script>

<script lang="ts">
  export let user;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  {#if user}
    <h1>Signed in as {user.name}</h1>
    <button on:click={() => signOut()}>Sign out</button>
  {:else}
    <button on:click={() => signIn('google')}>Sign in with Google</button>
  {/if}
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }

  h1 {
    width: 100%;
  }

  button {
    padding: 1rem;
    font-size: 1rem;
    cursor: pointer;
  }
</style>
