import React from 'react'

export const HelloWorld = () => {
  return (
    <div>
      <span>Hello World</span>
    </div>
  )
}

export const ExampleComponent = ({ text }) => {
  return <div>Example Component: React Intro{text}</div>
}

export { Intro } from './Intro'
export { Overlay } from './Overlay'
export { Popper } from './Popper'
export { Portal } from './Portal'
