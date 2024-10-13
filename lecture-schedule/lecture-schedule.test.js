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

describe('The lecture schedule exercise has the required HTML elements', () => {
  beforeAll(() => {
    document.documentElement.innerHTML = html.toString();
  });


  test(w(1, 'lecture-schedule index.html is a valid html doc'), function () {
    expect(html).toHTMLValidate();
  })

  test(w(1, 'uses the image'), function () {
    let imageElement = queries.getByRole(document, 'img');
    let imageElementSrc =  imageElement.getAttribute('src');
    expect(imageElementSrc).toBe('ttms.png');
  });

  test(w(1, 'checking for the <table> tag'), function () {
    queries.getByRole(document, 'table');

  });


  test(w(1, 'checking for the <thead> and <tbody> tags'), function () {
    let theadElement = queries.getAllByRole(document, 'rowgroup');
    expect(theadElement.length).toBe(2) 
  });

  test(w(1, 'checking that the th tags were used for the header text'), function () {
    let mornElement = queries.getByText(document, /Morning/)
    expect(mornElement.tagName.toLowerCase()).toBe('th')

    let evenElement = queries.getByText(document, /Evening/)
    expect(evenElement.tagName.toLowerCase()).toBe('th')

    let noonElement = queries.getByText(document, /Afternoon/)
    expect(noonElement.tagName.toLowerCase()).toBe('th')


  });

  test(w(2, 'checking that the td tags were used for the table text'), function () {
    let t1Element = queries.getAllByText(document, /09:00-10:00/)
    expect(t1Element.length).toBe(9) 
    for (i of t1Element){
        expect(t1Element[0].tagName.toLowerCase()).toBe('td')
    }
    
    let t2Element = queries.getAllByText(document, /12:30-13:45/)
    expect(t2Element.length).toBe(5) 
    for (i of t2Element){
        expect(t2Element[0].tagName.toLowerCase()).toBe('td')
    }

    let t3Element = queries.getAllByText(document, /15:00-16:45/)
    expect(t3Element.length).toBe(9) 
    for (i of t3Element){
        expect(t3Element[0].tagName.toLowerCase()).toBe('td')
    }

    let t4Element = queries.getAllByText(document, /12:00-13:00/)
    expect(t4Element.length).toBe(4) 
    for (i of t4Element){
        expect(t4Element[0].tagName.toLowerCase()).toBe('td')
    }

    let t5Element = queries.getAllByText(document, /Foundations/)
    expect(t5Element.length).toBe(1) 
    for (i of t5Element){
        expect(t5Element[0].tagName.toLowerCase()).toBe('td')
    }

    let t6Element = queries.getAllByText(document, /Advanced HTML/)
    expect(t6Element.length).toBe(2) 
    for (i of t6Element){
        expect(t6Element[0].tagName.toLowerCase()).toBe('td')
    }

    let t7Element = queries.getAllByText(document, /Web Design/)
    expect(t7Element.length).toBe(1) 
    for (i of t7Element){
        expect(t7Element[0].tagName.toLowerCase()).toBe('td')
    }

    let t8Element = queries.getAllByText(document, /CSS Layout/)
    expect(t8Element.length).toBe(1) 
    for (i of t8Element){
        expect(t8Element[0].tagName.toLowerCase()).toBe('td')
    }

    let t9Element = queries.getAllByText(document, /Publishing and Sharing/)
    expect(t9Element.length).toBe(1) 
    for (i of t9Element){
        expect(t9Element[0].tagName.toLowerCase()).toBe('td')
    }

    let t10Element = queries.getAllByText(document, /JavaScript Fundamentals/)
    expect(t10Element.length).toBe(1) 
    for (i of t10Element){
        expect(t10Element[0].tagName.toLowerCase()).toBe('td')
    }

    let t11Element = queries.getAllByText(document, /More Functions and Arrays/)
    expect(t11Element.length).toBe(1) 
    for (i of t11Element){
        expect(t11Element[0].tagName.toLowerCase()).toBe('td')
    }

    let t12Element = queries.getAllByText(document, /DOM and Events/)
    expect(t12Element.length).toBe(1) 
    for (i of t12Element){
        expect(t12Element[0].tagName.toLowerCase()).toBe('td')
    }

  });

  test(w(1, 'checking that there were 9 rows within the <tbody> tag'), function () {
    let theadElement = queries.getAllByRole(document, 'rowgroup');
    // second 'rowgroup' element should be the body, if should have 9 rows
    // see HTMLTableSectionElement (theadElement[1]) and HTMLCollection (theadElement[1].rows)
    expect(theadElement[1].rows.length).toBe(9)
  });
})
