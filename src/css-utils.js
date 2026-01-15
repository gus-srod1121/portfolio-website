/**
 * 
 * @param {HTMLElement} abstractElement
 */
function processAbstractClass(abstractElement)
{
    abstractElement.classList.forEach(_class => {
        applyCss(_class, abstractElement);
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
    
    const cssProperty = _class.substring(0, startIndex-1);
    const cssValue = _class.substring(startIndex+1, endIndex).split(",").join(" ");
    
    _abstractElement.style[cssProperty] = cssValue;

    // console.log(`Apply gap of ${cssValue} to ${_abstractElement.tagName} element`);
}

function setup()
{
    const abstractClassElements = document.querySelectorAll("[class*='-[']");
    abstractClassElements.forEach(processAbstractClass);
}

setup();