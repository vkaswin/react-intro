# React Intro

> React Intro is a library for creating step-by-step and powerful customer onboarding tours [DEMO](https://vkaswin.github.io/react-intro)

[![NPM](https://img.shields.io/npm/v/react-intro.svg)](https://www.npmjs.com/package/react-intro) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save reactjs-intro
```

### Steps

```js
const steps = [
  {
    selector: "#intro-1",
    position: "right-center",
    children: (
      <div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    ),
  },
  {
    selector: "#intro-2",
    position: "left-start"
    children: (
      <div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    ),
  },
  {
    selector: "#intro-3",
    position: "top-end"
    children: (
      <div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    ),
  },
];
```

| Name       | Description             |     Type      |
| ---------- | ----------------------- | :-----------: |
| `selector` | CSS selector            |    String     |
| `position` | Position of the tooltip |    String     |
| `children` | The tooltip content     | String or JSX |

## Usage

```jsx
import Intro from "react-intro";
import "react-intro/dist/index.css";

const Example = () => {
  const [enabled, setEnabled] = useState(false);

  const toggle = () => {
    setEnabled(!enabled);
  };

  return <Intro steps={steps} enabled={enabled} onComplete={toggle} />;
};
```

## PropTypes

```js
Intro.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      selector: PropTypes.string.isRequired,
      position: PropTypes.oneOf([
        "left-center",
        "left-start",
        "left-end",
        "right-center",
        "right-start",
        "right-end",
        "top-center",
        "top-start",
        "top-end",
        "bottom-center",
        "bottom-start",
        "bottom-end",
      ]).isRequired,
      children: PropTypes.node.isRequired,
    })
  ),
  enabled: PropTypes.bool,
  initialStep: PropTypes.number,
  onComplete: PropTypes.func,
  onChange: PropTypes.func,
  nextLabel: PropTypes.string,
  backLabel: PropTypes.string,
  doneLabel: PropTypes.string,
};

Intro.defaultProps = {
  steps: [],
  initialStep: 0,
  enabled: false,
  onChange: () => {},
  onComplete: () => {},
  nextLabel: "Next",
  backLabel: "Back",
  doneLabel: "Done",
};
```

### Props

| Name          | Type     |                                                   Description                                                   |
| ------------- | -------- | :-------------------------------------------------------------------------------------------------------------: |
| `enabled`     | Boolean  |                                    Defines if the steps are visible or not.                                     |
| `initialStep` | Number   |                                          Step to show at the beginning                                          |
| `steps`       | Array    |                                                 All the steps.                                                  |
| `onChange`    | Function | Callback called when the steps are changed and the callback function will receive the current step as parameter |
| `onComplete`  | Function |                                Callback called when all the steps are completed                                 |
| `nextLabel`   | String   |                                              Label for next button                                              |
| `doneLabel`   | String   |                                              Label for done button                                              |
| `backLabel`   | String   |                                              Label for back button                                              |

## License

MIT © [https://github.com/vkaswin/react-intro.git](https://github.com/https://github.com/vkaswin/react-intro.git)
