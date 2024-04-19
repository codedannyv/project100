<script>
	import { quartInOut } from 'svelte/easing';
    import { slide } from 'svelte/transition'

    let dropdowns = {
        dropdown1: false,
        dropdown2: false,
        dropdown3: false,
        dropdown4: false
    }

    const toggleDropdown = (key) => {
        dropdowns[key] = !dropdowns[key];
    };

</script>

<!-- <div class="flex items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-4 m-10"> -->
<div class="flex items-center bg-gradient-to-br from-emerald-500 from-10% via-sky-500 via-30% to-indigo-500 to-90% p-4 m-10">
    <div class="text-left bg-blue-950 p-4 space-y-1 text-white rounded w-full">
        <div>
            <button class="hover:bg-teal-900 hover:bg-opacity-40 w-full rounded text-left" on:click={() => toggleDropdown('dropdown1')}>
                <img>
                What is dia de los muertos?</button>
                <img>
            <div >
            {#if dropdowns['dropdown1']}
                <p transition:slide={{ delay: 0, duration: 300, easing:quartInOut}}>while halloween and day of the dead occur nearly in tandem and share similar customs (candy, face painting, and community gathering), the two are not related. halloween has ancient celtic roots, while day of the dead has its own origins that date back to the indigenous people of mexico and central america</p>
            {/if}
            </div>
        </div>

        <div>
            <button class="hover:bg-teal-900 hover:bg-opacity-40 w-full rounded text-left" on:click={() => toggleDropdown('dropdown2')}>When did it begin?</button>
            {#if dropdowns['dropdown2']}
                <p transition:slide={{ delay: 0, duration: 300, easing:quartInOut}}>roughly 3000 years ago, amongst the aztec, toltec, and mayans, death and the dead were seen as a natural part of life that should be honored and celebrated, rather than mourned. in particular, the nahua people of central mexico believed the deceased traveled on a years-long journey to chicunamictlán, the land of the dead. the living would provide supplies, such as food and water to aid them on the trek. this practice inspired the modern tradition of creating altars —known as ofrendas— at their homes, in addition to leaving offerings at the gravesites of loved ones.</p>
            {/if}
        </div>

        <div>
            <button class="hover:bg-teal-900 hover:bg-opacity-40 w-full rounded text-left" on:click={() => toggleDropdown('dropdown3')}>When is it celebrated?</button>
            {#if dropdowns['dropdown3']}
                <p transition:slide={{ delay: 0, duration: 300, easing:quartInOut}}>once the spanish colonized mexico in the 16th century, their own catholic views on the dead influenced mexican customs. día de los muertos was originally celebrated in the summer months. the holiday came to fall on november 1 and november 2 to align with all saints day and all souls day.</p>
            {/if}
        </div>

        <div>
            <button class="hover:bg-teal-900 hover:bg-opacity-40 w-full rounded text-left" on:click={() => toggleDropdown('dropdown4')}>What are ofrendas?</button>
            {#if dropdowns['dropdown4']}
                <p transition:slide={{ delay: 0, duration: 300, easing:quartInOut}}>to beckon spirits back into the land of the living for the festivities, revelers create makeshift altars, or ofrendas, at their homes and at the gravesites of their deceased loved ones. families gather at the site to eat, tell stories, and even clean the graves.</p>
            {/if}
        </div>
    </div>
</div>