/* 
 * This file contains tests that check whether your solution in index.html is correct.
 * Run the tests with `pnpm run test`
 *
 * You can through this file to learn more about what is being tested, but do not modify it.
 *
 */

const fs = require('fs');
const path = require('path');
const { queries } = require('@testing-library/dom');
require("html-validate/jest");
const w = require('jest-autograding-reporter').weight

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

jest.dontMock('fs');

describe('The maps and videos exercise has the required HTML elements', () => {
  beforeAll(() => {
    document.documentElement.innerHTML = html.toString();
  });


  test(w(2, 'map-videos index.html is a valid html doc'), function () {
    expect(html).toHTMLValidate();
  });
  
  test(w(1, 'Checking the number of iframes'), function () {
    const iframes = document.querySelectorAll("iframe"); //--> get the iframe element
    expect(iframes.length).toBeGreaterThanOrEqual(2)
  });

  test(w(2, 'Should load iframe for video content'), function () {
    const iframes = document.querySelectorAll("iframe"); //--> get the iframe element

    //checking the class of the parent div
    expect(iframes[0].parentElement.classList).toContain("video")
    expect(iframes[0].getAttribute('src')).toContain("youtube.com/embed")

  });


  test(w(2, 'Should load iframe for map content'), function () {
    const iframes = document.querySelectorAll("iframe"); //--> get the iframe element
    //checking the class of the parent div
    expect(iframes[1].parentElement.classList).toContain("map")
    expect(iframes[1].getAttribute('src')).toContain("www.google.com/maps/embed")
  });


  
})
