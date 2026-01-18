/**
 * 
 * @param {HTMLElement} abstractElement
 */
function processAbstractClass(abstractElement)
{
    abstractElement.classList.forEach(_cssClass => {
        if (!_cssClass.includes("-[")) return;

        applyCss(_cssClass, abstractElement);
        return;
    });
}

/**
 * 
 * @param {string} _class
 * @param {HTMLElement} _abstractElement
 */
function applyCss(_class, _abstractElement)
{
    const startIndex = _class.indexOf("[");
    const endIndex = _class.indexOf("]");
    const isPriority = _class.charAt(0) == '!';
    
    const cssProperty = _class.substring(isPriority ? 1 : 0, startIndex-1);
    const cssValue = _class.substring(startIndex+1, endIndex).split("-").join(" ");
    
    _abstractElement.style.setProperty(cssProperty, cssValue, isPriority ? "important" : "");
    console.log(`Apply ${cssProperty} of ${cssValue} to ${_abstractElement.tagName} element\nImportant: ${isPriority}`);
}

function setup()
{
    // abstractClassElements.forEach(processAbstractClass);
    addEventListener("DOMContentLoaded", () => {
        const abstractClassElements = document.querySelectorAll("[class*='-[']");
        abstractClassElements.forEach(processAbstractClass)
    });
}

setup();