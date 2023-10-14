
# Project Title

Multi-Step-Form

## Demo

https://tuansontruong.github.io/multi-step-form/

## Table of Contents
- [About the app](https://github.com/tuansontruong/multi-step-form/tree/master#about-the-app)
- [Screenshots](https://github.com/tuansontruong/multi-step-form/tree/master#screenshots)
- [Tech Stack](https://github.com/tuansontruong/multi-step-form#tech-stack)
- [Setup](https://github.com/tuansontruong/multi-step-form#setup)
- [Approach](https://github.com/tuansontruong/multi-step-form#approach)
- [Credits](https://github.com/tuansontruong/multi-step-form#credits)
## About the app
- The form should have 4 steps, with a progress indicator to show users their progress.
- Each step should have its own set of input fields.
- Users should be able to navigate between steps using buttons.
- The form should have validation to ensure that all required fields are filled out before the user can proceed to the next step.
- The form should have a summary page at the end, where users can review their inputs before submitting.
- After submitting the form, users should see a congratulatory message or confirmation screen.
- Show the hover state of all the elements.
- The component should be responsive and display correctly on different screen sizes.
- Make this landing page look as close to the design as possible.



## Screenshots

[![Screenshot-at-Oct-13-23-05-39.png](https://i.postimg.cc/zDLZkHX8/Screenshot-at-Oct-13-23-05-39.png)](https://postimg.cc/XX0zjJCz)
[![Screenshot-at-Oct-13-23-08-09.png](https://i.postimg.cc/PqmNJV9V/Screenshot-at-Oct-13-23-08-09.png)](https://postimg.cc/hJtK3sSV)
[![Screenshot-at-Oct-13-23-09-05.png](https://i.postimg.cc/7hcqmSjT/Screenshot-at-Oct-13-23-09-05.png)](https://postimg.cc/QKQLMK8X)
[![Screenshot-at-Oct-13-23-10-01.png](https://i.postimg.cc/2jJmpFX1/Screenshot-at-Oct-13-23-10-01.png)](https://postimg.cc/234ghvYY)
[![Screenshot-at-Oct-13-23-10-56.png](https://i.postimg.cc/s2DDffPx/Screenshot-at-Oct-13-23-10-56.png)](https://postimg.cc/JsvWPL2C)


## Tech Stack

- **FE**: React (Typescript), TailwindCSS, React-hook-form, Yup
- **Bundler**: Vite (Rollup)




## Setup
- clone the app
- yarn or npm install
- yarn dev
## Approach
- Using Yup to create validation schemas for each step.
- Using `InferType` (provided by Yup) to create models from schemas which will later submit to APIs.
- The combined model will have `toApiData()` method to convert from snake cases to camel cases object
- App flow:


[![multi-step-drawio.png](https://i.postimg.cc/VvBYQRks/multi-step-drawio.png)](https://postimg.cc/SYR0cc9H)
## Credits
This application was developed as part of the [FrontendPro challenge](https://www.frontendpro.dev/frontend-coding-challenges/multi-step-form-lyFZYpe2Uxc8Ng4ueYud), and I would like to give a shoutout to them for creating such an engaging challenge.