# react-intro

> React Intro is a library for creating step-by-step and powerful customer onboarding tours

[![NPM](https://img.shields.io/npm/v/react-intro.svg)](https://www.npmjs.com/package/react-intro) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-intro
```

## Usage

```jsx
import { Intro } from "react-intro";
import "react-intro/dist/index.css";

const Example = () => {
  const steps = const steps = [
    {
      selector: "#intro-1",
      position: "left-center",
      children:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      selector: "#intro-2",
      position: "bottom-center",
      children:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      selector: "#intro-3",
      position: "top-center",
      children:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      selector: "#intro-4",
      position: "bottom-end",
      children:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    }];

  const [enabled, setEnabled] = useState(false);

  const toggle = () => {
    setEnabled(!enabled);
  };

  render() {
    return <Intro  steps={steps} enabled={enabled} onComplete={toggle} />;
  }
}
```

## License

MIT © [https://github.com/vkaswin/react-intro.git](https://github.com/https://github.com/vkaswin/react-intro.git)
