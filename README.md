# Week 2 Exercises

This week, the mandatory exercises are:

1. **Lecture Schedule**: In this exercise, you are expected to create a lecture schedule (time-table) similar to the picture shown. You will majorly practice your understanding of HTML tables.

1. **Maps and Videos**: Here, you will practice finding and adding videos and maps to HTML.

1. **Mini Kibo Website**: This project is an extract from the [kibo website](https://www.kibo.school). Your task is to embed different multimedia contents in the given website.

To solve each exercise, navigate to the exercise folder and follow the instructions in the README.md file.

## Testing

You can use the automated tests to check that your work is valid.

1. Navigate your terminal to the parent exercise folder for the week (not the individual exercise).

2. Install the project dependencies by running `pnpm install`

3. To run all tests for the week, run `pnpm run test`

4. To run the test for a specific exercise, you need to specify the path to the exercise folder, run `pnpm run test exercise-folder`. For example, run `pnpm run test lecture-schedule`

If your solution has all the required elements it should say something like:

```txt
 PASS  lecture-schedule/lecture-schedule.test.js
  The lecture schedule exercise has the required HTML elements
    ✓ lecture-schedule index.html is a valid html doc (182 ms)
    ✓ uses the image (42 ms)
    ✓ checking for the <table> tag (13 ms)
    ✓ checking for the <thead> and <tbody> tags (11 ms)
    ✓ checking that the th tags were used for the header text (10 ms)
    ✓ checking that the td tags were used for the table text (27 ms)
    ✓ checking that there were 9 rows within the <tbody> tag (8 ms)

Test Suites: 1 passed, 1 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        2.138 s, estimated 3 s
```

If it does not pass one of the tests, you should get some feedback about what is wrong or missing in your solution.

### Valid HTML

The last test for each exercise is that your HTML follows all of the recommended rules for an HTML document.

[Here is a list](https://html-validate.org/rules/index.html) of all the rules that will be automatically checked. You don't have to memorize this list or check each rule yourself. Instead, if you get feedback that your HTML breaks one of the rules, you can find an explanation of the rule from that list.

Once you have passed all tests for the week, then you are ready to submit to Gradescope.

## Submission

In order to get credit for your project, you must:

- push your code to Github Classroom
- submit your work in Gradescope
- submit your project in Woolf

Note that this assignment is automatically graded and you will see your grade shortly after submitting to Gradescope. You have unlimited number of attempts, therefore you are enouraged to modify your work and resubmit as much as possible, before the due date.
