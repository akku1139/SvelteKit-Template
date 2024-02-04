<script type="ts">
import { t, lang } from "$lib/i18n.ts";

</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{ $t("langname") }
<button type="button" on:click='{()=>{lang.set($lang=="en"?"ja":"en");}}'>Switch lang (en/ja)</button>
