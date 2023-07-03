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

describe('The mini kibo website exercise has the required HTML elements', () => {
  beforeAll(() => {
    document.documentElement.innerHTML = html.toString();
  });


  test(w(1, 'mini kibo website index.html is a valid html doc'), function () {
    expect(html).toHTMLValidate();
  });

  test(w(1, 'uses the appropriate image kibo logo'), function () {
    let imageElement = queries.getByRole(document, 'img');
    let imageElementSrc =  imageElement.getAttribute('src');
    expect(imageElementSrc).toBe('images/kibo-logo.svg');
  });
  
  test(w(1, 'Checking the number of iframes , min 3'), function () {
    const iframes = document.querySelectorAll("iframe"); //--> get the iframe element
    expect(iframes.length).toBeGreaterThanOrEqual(3)
  });

  test(w(2, 'Should load three iframes'), function () {
    const iframes = document.querySelectorAll("iframe"); //--> get the iframe element

    expect(iframes[0].getAttribute('src')).toContain("https://www.youtube.com/embed/RGjYCLen6os")
    expect(iframes[1].getAttribute('src')).toContain("https://www.youtube.com/embed/wv6HAnysMYc")
    expect(iframes[2].getAttribute('src')).toContain("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.104288090914!2d-73.9884187!3d40.7377307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a189d93c29%3A0x300099f29cad7a9!2s228%20Park%20Ave%20S%2C%20New%20York%2C%20NY%2010003%2C%20USA!5e0!3m2!1sen!2sza!4v1687811179333!5m2!1sen!2sza")



  });

  


  
})
