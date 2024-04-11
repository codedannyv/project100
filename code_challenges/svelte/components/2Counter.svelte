<script>
    let count = 0;

    const increment = () => {
        count += 1;
    };

    const decrement = () => {
        count -= 1;
    }
</script>

<div class="flex justify-center items-center space-x-4 py-4">
    <button class="bg-green-400 hover:bg-green-700 text-white font-bold rounded py-2 px-4"
        on:click={decrement}
        aria-label="decreases the counter"
        tabindex="0">
        -
    </button>

<p class="text-lg" aria-live="polite" aria-atomic="true">{count}</p>

    <button class="bg-green-400 hover:bg-green-700 text-white font-bold rounded py-2 px-4"
        on:click={increment}
        aria-label="increases the counter"
        tabindex="0">
        +
    </button>
</div>