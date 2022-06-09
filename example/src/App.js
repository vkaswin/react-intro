import React, { useState } from 'react'
import { ExampleComponent } from 'react-intro'
import 'react-intro/dist/index.css'

import './index.scss'

const App = () => {
  const steps = [
    {
      selector: '[data-intro-1]',
      position: 'left-center',
      children:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      selector: '[data-intro-2]',
      position: 'bottom-center',
      children:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      selector: '[data-intro-3]',
      position: 'top-center',
      children:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      selector: '[data-intro-4]',
      position: 'bottom-end',
      children:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      selector: '[data-intro-5]',
      position: 'left-end',
      children:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      selector: '[data-intro-6]',
      position: 'top-end',
      children:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      selector: '[data-intro-7]',
      position: 'right-center',
      children:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      selector: '[data-intro-8]',
      position: 'top-start',
      children:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      selector: '[data-intro-9]',
      position: 'right-start',
      children:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      selector: '[data-intro-10]',
      position: 'bottom-start',
      children:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      selector: '[data-intro-11]',
      position: 'right-end',
      children:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      selector: '[data-intro-12]',
      position: 'left-start',
      children:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
  ]

  const [enabled, setEnabled] = useState(false)

  const toggle = () => {
    setEnabled(!enabled)
  }

  return (
    <div className='container-fluid my-3'>
      <ExampleComponent text='Create React Library Example 😄' />
      <button
        className='btn btn-primary intro-start'
        onClick={toggle}
        data-intro-12
      >
        Start
      </button>
      <h1 className='text-center' data-intro-1>
        Houses For Sale
      </h1>
      <div className='intro-card-grid'>
        <div className='intro-card'>
          <div className='intro-card-header intro-card-image'>
            <img src='https://source.unsplash.com/178j8tJrNlc' />
          </div>
          <div className='intro-card-body'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita nulla nobis cumque quisquam. Enim perspiciatis vero
            laudantium nemo cum!
          </div>
          <div className='intro-card-footer'>
            <button className='btn btn-secondary'>Details</button>
            <button className='btn btn-outline-secondary' data-intro-11>
              Contact Seller
            </button>
          </div>
        </div>
        <div className='intro-card'>
          <div className='intro-card-header intro-card-image'>
            <img src='https://source.unsplash.com/eWqOgJ-lfiI' />
          </div>
          <div className='intro-card-body'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita nulla nobis cumque quisquam.{' '}
            <span data-intro-8>
              Enim perspiciatis vero laudantium nemo cum!
            </span>
          </div>
          <div className='intro-card-footer'>
            <button className='btn btn-secondary'>Details</button>
            <button className='btn btn-outline-secondary'>
              Contact Seller
            </button>
          </div>
        </div>
        <div className='intro-card'>
          <div className='intro-card-header intro-card-image' data-intro-3>
            <img src='https://source.unsplash.com/178j8tJrNlc' />
          </div>
          <div className='intro-card-body'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita nulla nobis cumque quisquam. Enim perspiciatis vero
            laudantium nemo cum!
          </div>
          <div className='intro-card-footer'>
            <button className='btn btn-secondary'>Details</button>
            <button className='btn btn-outline-secondary'>
              Contact Seller
            </button>
          </div>
        </div>
        <div className='intro-card'>
          <div className='intro-card-header intro-card-image'>
            <img src='https://source.unsplash.com/eWqOgJ-lfiI' />
          </div>
          <div className='intro-card-body'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita nulla nobis cumque quisquam. Enim perspiciatis vero
            laudantium nemo cum!
          </div>
          <div className='intro-card-footer'>
            <button className='btn btn-secondary'>Details</button>
            <button className='btn btn-outline-secondary'>
              Contact Seller
            </button>
          </div>
        </div>
        <div className='intro-card'>
          <div className='intro-card-header intro-card-image'>
            <img src='https://source.unsplash.com/178j8tJrNlc' />
          </div>
          <div className='intro-card-body'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita nulla nobis cumque quisquam. Enim perspiciatis vero
            laudantium nemo cum!
          </div>
          <div className='intro-card-footer'>
            <button className='btn btn-secondary'>Details</button>
            <button className='btn btn-outline-secondary'>
              Contact Seller
            </button>
          </div>
        </div>
        <div className='intro-card'>
          <div className='intro-card-header intro-card-image'>
            <img src='https://source.unsplash.com/eWqOgJ-lfiI' />
          </div>
          <div className='intro-card-body'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita nulla nobis cumque quisquam. Enim perspiciatis vero
            laudantium nemo cum!
          </div>
          <div className='intro-card-footer'>
            <button className='btn btn-secondary'>Details</button>
            <button className='btn btn-outline-secondary'>
              Contact Seller
            </button>
          </div>
        </div>
        <div className='intro-card'>
          <div className='intro-card-header' data-intro-6>
            <img src='https://source.unsplash.com/178j8tJrNlc' />
          </div>
          <div className='intro-card-body'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita nulla nobis cumque quisquam. Enim perspiciatis vero
            laudantium nemo cum!
          </div>
          <div className='intro-card-footer'>
            <button className='btn btn-secondary'>Details</button>
            <button className='btn btn-outline-secondary'>
              Contact Seller
            </button>
          </div>
        </div>
        <div className='intro-card' data-intro-2>
          <div className='intro-card-header intro-card-image'>
            <img src='https://source.unsplash.com/eWqOgJ-lfiI' />
          </div>
          <div className='intro-card-body'>
            <span data-intro-7>Lorem ipsum</span> dolor sit amet consectetur
            adipisicing elit. Nesciunt expedita nulla nobis cumque quisquam.
            Enim perspiciatis vero laudantium nemo cum!
          </div>
          <div className='intro-card-footer'>
            <button className='btn btn-secondary'>Details</button>
            <button className='btn btn-outline-secondary' data-intro-4>
              Contact Seller
            </button>
          </div>
        </div>
        <div className='intro-card'>
          <div className='intro-card-header intro-card-image'>
            <img src='https://source.unsplash.com/178j8tJrNlc' />
          </div>
          <div className='intro-card-body'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita nulla nobis cumque quisquam. Enim perspiciatis vero
            laudantium nemo cum!
          </div>
          <div className='intro-card-footer'>
            <button className='btn btn-secondary'>Details</button>
            <button className='btn btn-outline-secondary'>
              Contact Seller
            </button>
          </div>
        </div>
        <div className='intro-card'>
          <div className='intro-card-header intro-card-image'>
            <img src='https://source.unsplash.com/eWqOgJ-lfiI' />
          </div>
          <div className='intro-card-body'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita nulla nobis cumque quisquam. Enim perspiciatis vero
            laudantium nemo cum!
          </div>
          <div className='intro-card-footer'>
            <button className='btn btn-secondary'>Details</button>
            <button className='btn btn-outline-secondary'>
              Contact Seller
            </button>
          </div>
        </div>
        <div className='intro-card'>
          <div className='intro-card-header intro-card-image'>
            <img src='https://source.unsplash.com/178j8tJrNlc' />
          </div>
          <div className='intro-card-body'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita nulla nobis cumque quisquam. Enim perspiciatis vero
            <span data-intro-10>laudantium nemo cum!</span>
          </div>
          <div className='intro-card-footer'>
            <button className='btn btn-secondary'>Details</button>
            <button className='btn btn-outline-secondary'>
              Contact Seller
            </button>
          </div>
        </div>
        <div className='intro-card'>
          <div className='intro-card-header intro-card-image'>
            <img src='https://source.unsplash.com/eWqOgJ-lfiI' />
          </div>
          <div className='intro-card-body' data-intro-9>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita nulla nobis cumque quisquam. Enim perspiciatis vero
            laudantium nemo cum!
          </div>
          <div className='intro-card-footer'>
            <button className='btn btn-secondary' data-intro-5>
              Details
            </button>
            <button className='btn btn-outline-secondary'>
              Contact Seller
            </button>
          </div>
        </div>
      </div>
      {/* <Intro steps={steps} enabled={enabled} onComplete={toggle} /> */}
    </div>
  )
}

export default App
