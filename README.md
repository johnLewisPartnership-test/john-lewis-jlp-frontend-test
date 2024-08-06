# John Lewis Partnership Frontend Test

Sharing on GitHub as this unpaid Frontend "3 hour" test from John Lewis is extreme for what is being asked. Hopefully gives someone else a head-start with the negative feedback (below) as they've decided are deal breakers.

---

## Brief

This test aims to assess your technical skills in a real-world context and involves building on top of an existing application. The test is located in this GitLab repository, so you may need a free licence to get started.

Things we’re looking for:

-   Unit tests are important. We’d like to see a TDD approach to writing the app. We've included a Jest setup.
-   The website should be fully responsive, working across device sizes. We've provided you with some images in the designs folder as a guide.
-   The use of third party code/SDKs is allowed, but you should be able to explain at interview why you have chosen the third party code.
-   We’re looking for a solution that's as close to the designs as possible.
-   We'll be assessing your coding style, how you've approached this task and whether you've met quality standards on areas such as accessibility, security and performance.
-   We don't expect you to spend too long on this, as a guide 3 hours is usually enough.
-   You will need to be using Node.js version 16.x for this test.
-   Put all your assumptions, notes, instructions and improvement suggestions into your GitHub README.md.

### Instructions

Please read the instructions in the README document carefully before starting. If you have any questions, or need some clarification around the requirements of the test, please do not hesitate to reply directly to this email. There is no specific deadline as we appreciate how busy life can be.

Once you have a user setup in GitLab, please reply to this email with your Gitlab username - we need this to add you to the correct user group on our end.

After that you're free to fork the repo and have some fun with it. Please however make sure your repo is private to keep it fair for the other candidates.

Once your submission is complete, and we’ve added you to the group on our end, please grant developer access to the `jlp-test-review/candidate` GitLab group so we can see your code. Let me know via email when you’re done and one of our senior engineers will review your submission, and I’ll let you know the outcome as soon as possible.

---

## Brief

Your task is to create a website that will allow customers to see the range of dishwashers John Lewis sells. This app will be a simple to use and will make use of existing John Lewis APIs.

We have started the project, but we'd like you to finish it off to a production-ready standard. Bits of it may be broken.

### Product Grid

When the website is launched, the customer will be presented with a grid of dishwashers that are currently available for customers to buy.

For this exercise we’d be looking at only displaying the first 20 results returned by the API.

### Product Page

When a dishwasher is clicked, a new screen is displayed showing the dishwasher’s details.

### Designs

In the `/designs` folder you will find 3 images that show the desired screen layout for the app

-   product-page-portrait.png
-   product-page-landscape.png
-   product-grid.png

### Mock Data

There is mock data available for testing in the `mockData` folder.

## Things we're looking for

-   Unit tests are important. We’d like to see a TDD approach to writing the app. We've included a Jest setup.
-   The website should be fully responsive, working across device sizes. We've provided you with some images in the _designs folder_ as a guide.
-   The use of third party code/SDKs is allowed, but you should be able to explain why you have chosen the third party code.
-   Put all your assumptions, notes, instructions and improvement suggestions into your README.md.
-   We’re looking for a solution that's as close to the designs as possible.
-   We'll be assessing your coding style, how you've approached this task and whether you've met quality standards on areas such as accessibility, security and performance.
-   We're looking for a solution to make use of the features of TypeScript. Please use the annotations it provides as appropriate.
-   We don't expect you to spend too long on this, as a guide 3 hours is usually enough.

---

## Getting Started

Please read the instructions in th README document carefully before starting. If you have any questions, or need some clarification around the requirements of the test, please do not hesitate to reply directly to the email you were sent. There is no specific deadline as we appreciate how busy life can be.

Once you have a user setup in GitLab, please reply to the email you were sent with your Gitlab username - we need this to add you to the correct user group on our end.

After that you're free to fork the repo and have some fun with it. Please however make sure your repo is private to keep it fair for the other candidates.

Once your submission is complete, and we’ve added you to the group on our end, please grant developer access to the jlp-test-review/candidate GitLab group so we can see your code. Let us know when you’re done and one of our senior engineers will review your submission, and I’ll let you know the outcome as soon as possible.

## Installation

Install the NPM dependencies using `npm i`. (You will need to have already installed Node.js using version `16.x`.)

Run the development server with `npm run dev`

Run TypeScript with `npm run tsc -- -w` or alternatively make use of the TypeScript functionality in your editor of choice.

Open [http://localhost:3000](http://localhost:3000) with your browser.

## [Coding Tests Don’t Remove Bias from Laura Tacho](https://lauratacho.medium.com/anonymous-code-screenings-dont-remove-bias-part-2-9ef57b52c5a5)

Extract:

### A first-stage anonymous coding test is inherently biased

People with caregiving responsibilities, people who are pursing additional education, or people who work an another job immediately have a disadvantage coming out of the gate as they have less free time than someone without those responsibilities. Many people without a lot of free time are also from underrepresented communities. Where this disparity is particularly visible is in longer coding challenges, especially ones that are not managed by a tool which tracks the amount of time used. People who have more flexible schedules have the ability to spend more time on the challenge. Someone with less free time might not have the ability to spend extra time polishing their submissions or adding nice to haves. In this situation, the person with more time will always come out on top, not because of talent or ability, but because of other factors. It’s not a fair comparison.

### Who can afford to complete this?

Looking at this above list, what will it cost your candidate in order to complete your exercise on their own time? A 4-hour coding challenge means 4 hours of child care, or 4 hours they could be using their skills in another way, whether it’s for their current role, learning something new. People also need to rest.

### Who is in a position to invest that much time in a company where they don’t have any idea about the team they’d be joining?

For underrepresented folks, joining an inclusive team where they won’t be tokenized is extremely important. But anonymous hiring stages are designed to be completely opaque. With no data about whether the team is the right fit, and without the confidence that they could see themselves on the team, folks from underrepresented communities are more likely to pass on your opportunity in favor of an employer who will invest the time to make a connection with them. Who is in a position not to care about team demographics, or who feels confident that they’re going to belong no matter what? Folks from the existing dominant culture.

### Who designed the exercise, and what do they value?

Your evaluators are going to add their own biases and preferences in the evaluation criteria; it’s human nature. Adding structure here can help bring those preferences to the forefront. Is there a standard rubric? Can someone pass the interview if their solution works, but they use an approach or library that the interviewer simply doesn’t prefer? Is the evaluation criteria shared with the candidate beforehand so they know what they are being evaluated against, or do you just expect them to guess which tradeoffs are the right ones? Do you really want or need to hire another engineer who thinks exactly like other members of your team?

### How would your current engineers do on this test?

Ask your current engineers to take the challenge, following all of the time commitments in the rules, and have those solutions evaluated anonymously by the evaluation team. I’ve had some previous teams go through this exercise only to realize that their own peers wouldn’t pass the interviews.

### Who has the patience for this?

Highly qualified inbound candidates and candidates coming from your outbound recruitment absolutely don’t have the patience for an interview stage that brings them no closer to answering the question “do I want to work here?” Especially at a time when the market is incredibly competitive, focus your efforts on getting candidates engaged with your team before plopping a technical screening on them.

---

## Issues JLP took issue with, some suggestions:

-   Unit test coverage is ~44%. (They seemingly want more testing, in 3 hours, review the tests can add more detail, the broad strokes are done.)

-   Cannot evidence TDD as single main commit. (They want the commits to tell the story in the format they want, cause; ideology. Rebase the commit put the tests first, pass, test etc)

-   No image carousel - mentioned as de-scoped (they also want to you to add an accessible image carousel...try and import within next ecosystem)

-   Does not sanitise HTML output - uses `dangerouslySetInnerHTML` (This is fair, clean this up because, time)

-   Read more feature too large with extra vertical space, looks out of place (There's no Design on this, this was an extra feature, so follow this unknown feedback?)

-   Removed API call for PDP and uses mock data (Restoring the call causes `npm build` to have issues needs to be troubleshooted. Seemingly important.)

-   PDP could be broken down into components for ease of maintainability / testing (Again 3 hours, Who is maintaining this? The API _could_ return images that match the Design provided)

-   Mentioned would have imported grid system if more time (Again this test should be 3 hours, import a grid..)

---
