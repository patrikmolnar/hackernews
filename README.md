# Hacker News Clone

This is a Hacker News Clone project, made with NextJS, React, and Vanilla CSS.

## Installation

Navigate to the project directory and isntall dependencies with `yarn` or `npm`

```bash
yarn install
```
or
```bash
npm install
```

## Usage

To start the dev server run the following command:

```bash
yarn dev
```
or
```bash
npm run dev
```

## Project structure
Besides the base boilerplate created by `create-next-app`, the most notable change would be the `components` folder.
The components are placed in folders using the same name as the component itself. The folder contains the `tsx` file with code, and a `css` file. The `css` file is using the `*.module.css` convention. This allows you to use the same CSS class name in different files without worrying about collisions. The `css` files are compiled out of the box with the `PostCSS` preprocessor.

## Checklist
- [x] All required data is present (Story title, Story URL, Story timestamp, Story score, Author id, Author karma score, A dummy image)
- [x] UI is responsive
- [x] CSS is compiled with the PostCSS preprocessor
- [x] CSS is made without any UI library or framework
- [x] Use TypeScript
- [x] Use modern JS framework (NextJS for the win)
- [x] Unique design - some eyecandy hopefully

## License
[MIT](https://choosealicense.com/licenses/mit/)