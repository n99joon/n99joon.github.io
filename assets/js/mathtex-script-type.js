// Mostly copied from https://github.com/KaTeX/KaTeX/tree/main/contrib/mathtex-script-type
// Options for global command definitions added by @pdmosses

// import katex from "katex";

// const macros = {};

// let scripts = document.body.getElementsByTagName("script");
// scripts = Array.prototype.slice.call(scripts);
// scripts.forEach(function(script) {
//     if (!script.type || !script.type.match(/math\/tex/i)) {
//         return -1;
//     }
//     const display =
//           (script.type.match(/mode\s*=\s*display(;|\s|\n|$)/) != null);

//     const katexElement = document.createElement(display ? "div" : "span");
//     katexElement.setAttribute("class",
//                               display ? "equation" : "inline-equation");
//     try {
//         katex.render(script.text, katexElement, {
//           displayMode: display,
//           globalGroup: true,
//           trust: true,
//           strict: false,
//           throwOnError: false,
//           macros
//         });
//     } catch (err) {
//         //console.error(err); linter doesn't like this
//         katexElement.textContent = script.text;
//     }
//     script.parentNode.replaceChild(katexElement, script);
// });

// Define custom macros if needed
const macros = {};

// Function to render math
document.addEventListener("DOMContentLoaded", function () {
    // Select all text nodes in the body
    const textNodes = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while ((node = walker.nextNode())) {
        textNodes.push(node);
    }

    // Iterate through text nodes and replace math
    textNodes.forEach(function (textNode) {
        const textContent = textNode.textContent;

        // Match inline math $...$ (avoiding escaped \$)
        const inlineMathRegex = /(^|[^\\])\$(.+?)\$/g;

        // Match display math $$...$$ (avoiding escaped \$\$)
        const displayMathRegex = /\$\$(.+?)\$\$/g;

        // Replace display math first
        let parent = textNode.parentNode;
        if (displayMathRegex.test(textContent)) {
            const newHTML = textContent.replace(displayMathRegex, function (_, math) {
                const div = document.createElement("div");
                div.className = "equation"; // Add a class for styling if needed
                katex.render(math, div, {
                    displayMode: true,
                    macros: macros,
                    throwOnError: false,
                });
                return div.outerHTML;
            });
            parent.innerHTML = newHTML;
        }

        // Replace inline math
        if (inlineMathRegex.test(textContent)) {
            const newHTML = textContent.replace(inlineMathRegex, function (_, before, math) {
                const span = document.createElement("span");
                span.className = "inline-equation"; // Add a class for styling if needed
                katex.render(math, span, {
                    displayMode: false,
                    macros: macros,
                    throwOnError: false,
                });
                return before + span.outerHTML;
            });
            parent.innerHTML = newHTML;
        }
    });
});