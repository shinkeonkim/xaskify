/*!
 * xaskify
 * Copyright(c) 2022 Shinkeon Kim
 * MIT Licensed
 */

const DEFAULT_MASKING_REGEX = /[a-zA-Z0-9ㄱ-힣]/g;
const DEFAULT_MASKING_TEXT = 'X';

const xaskify = (element, maskingText = DEFAULT_MASKING_TEXT, maskifyRegex = DEFAULT_MASKING_REGEX) => {
  if(element.tagName === 'SCRIPT' || element.tagName == 'NOSCRIPT') return;

  if(element.hasChildNodes()) {
    element.childNodes.forEach((child) => {
      xaskify(child, maskingText, maskifyRegex);
    })
  }

  if(element.nodeName === '#text') {    
    element.data = element.data && element.data.replaceAll(maskifyRegex, maskingText);
  }
}

module.exports = xaskify;
