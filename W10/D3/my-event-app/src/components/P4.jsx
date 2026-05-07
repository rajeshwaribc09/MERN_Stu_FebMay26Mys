// Synthetic vs native DOM events
// Synthetic event:
// A wrapper created by React around the browser's native event
// Gives a consistent API across browsers
// works similarly to native DOM events
// still allows access to the original browser event via event.nativeEvent

// Why does React use it?
// To make event handling behave consistently to simplify cross-browser differences
// To integrate smoothly with React's event system

// How synthetic event works:
// Component renders:
    // A button appears on the screen
    // handleClick is defined but it is not executed

// User clicks the button:
    // Browser creates a native click event
    // React wraps that native event in a synthetic event
    // React passes the synthetic event to handleClick 

    // Event refers to the syntheticEvent
    // Event.target gives us the HTML elements
