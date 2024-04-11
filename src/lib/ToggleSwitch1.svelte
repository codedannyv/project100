<script> 
    // variable that stores the state of our switch currently off
    let isOn = false;

    // function that when called will switch the variable that stores the isOn variable
    const toggle = () => {
        isOn = !isOn;
    }
</script>

<!-- Create a container for the button -->
<!-- give the container a padding of 4 and center it in the middle of the screen.  -->
<div class="flex justify-center items-center h-12">
<!-- Create a button that when click will execute the toggle function -->
<!-- 
    set the button's width to 12 and height to 6
    use flex to center the button
    apply a gray background
    make the buttons corners rounded
    add a padding of 1
    add a duration of 300 and a transition effect of ease-in-out
 -->
 <!-- Button Role and ARIA Attributes for Accessibility
`role="switch"`: Indicates that the element is a switch control.
`aria-checked`: Indicates the state of the switch, providing a hint to assistive technologies.
`tabindex="0"`: Makes the element focusable using keyboard navigation.
`on:keydown`: Handles keydown events for keyboard accessibility. -->
<button
    class={`animate-pulse bg-purple-500 text-white font-bold py-1 px-4 rounded `}
    on:click={toggle}
    role="switch"
    aria-checked={isOn}
    aria-label="Toggle Switch"
    tabindex="0">
        <!-- create another container inside the button to create a visual represenation of the button -->
        <!-- 
            apply a white background
            set width and height to 4
            rounded full to make the knob circular
            apply a transform duration-300 ease-in-out
            conditionally apply the translate-x-6 based on the isOn state
         -->
    <div class={`bg-white h-4 w-4 rounded shadow-md transform duration-300 ease-in-out ${isOn ? 'translate-x-3': '-translate-x-3'}`}></div>
</button>
</div>


<!-- condition that visually tells the user whether the switch is on or off -->
<!-- add green text if it's on and red if it's off -->
