// Synthetic vs native DOM events
// Synthetic event:
// A wrapper created by React around the browser's native event
// Gives a consistent API across browsers
// works similarly to native DOM events
// still allows access to the original browser event via event.nativeEvent

// Why does React use it?
// To make event handling behave consistently to simplify cross-browser differences