<script lang="ts">
    export let name: string;

    const avatarName: string = name.toLowerCase().split(' ').join('-');
</script>

<picture class="block w-10 h-10 rounded-full overflow-hidden">
    <img src={`/src/assets/images/avatar-${avatarName}.webp`} alt={`Avatar of ${avatarName}`} width="40" height="40"/>
</picture>
