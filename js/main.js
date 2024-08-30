window.onload = loaded;

/**
 * Simple Function that will be run when the browser is finished loading.
 */
function loaded() {
    // Assign to a variable so we can set a breakpoint in the debugger!
    // const hello = sayHello();
    document.getElementById('helloButton').addEventListener('click', () => {
    const hello = sayHello();
    console.log(hello);
    alert(hello);
    });
}

/**
 * This function returns the string 'hello'
 * @return {string} the string hello
 */
export function sayHello() {
    return 'hello';
}
