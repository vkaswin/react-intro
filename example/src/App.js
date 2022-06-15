import React, { useState } from "react";
import Intro from "react-intro";

import "react-intro/dist/index.css";
import "./index.scss";

const App = () => {
  const steps = [
    {
      selector: "[data-intro-1]",
      position: "left-center",
      children: (
        <div>
          <p className="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
      ),
    },
    {
      selector: "[data-intro-2]",
      position: "bottom-center",
      children: (
        <div className="m-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
      ),
    },
    {
      selector: "[data-intro-3]",
      position: "top-center",
      children: (
        <div className="m-0">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </div>
      ),
    },
    {
      selector: "[data-intro-4]",
      position: "bottom-end",
      children: (
        <div className="m-0">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual.
        </div>
      ),
    },
    {
      selector: "[data-intro-5]",
      position: "left-end",
      children: (
        <div className="m-0">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident.
        </div>
      ),
    },
    {
      selector: "[data-intro-6]",
      position: "top-end",
      children: (
        <div className="m-0">
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment, so blinded by desire.
        </div>
      ),
    },
    {
      selector: "[data-intro-7]",
      position: "right-center",
      children: (
        <div className="m-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
      ),
    },
    {
      selector: "[data-intro-8]",
      position: "top-start",
      children: (
        <div className="m-0">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident.
        </div>
      ),
    },
    {
      selector: "[data-intro-9]",
      position: "right-start",
      children: (
        <div className="m-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
      ),
    },
    {
      selector: "[data-intro-10]",
      position: "bottom-start",
      children: (
        <div className="m-0">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </div>
      ),
    },
    {
      selector: "[data-intro-11]",
      position: "right-end",
      children: (
        <div className="m-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
      ),
    },
    {
      selector: "[data-intro-12]",
      position: "left-start",
      children: (
        <div className="m-0">
          Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
          quasi architecto beatae vitae dicta sunt explicabo.
        </div>
      ),
    },
  ];

  const [enabled, setEnabled] = useState(false);

  const toggle = () => {
    setEnabled(!enabled);
  };

  return (
    <div className="container-fluid my-3">
      <button
        className="btn btn-primary intro-start"
        onClick={toggle}
        data-intro-12
      >
        Start
      </button>
      <h1 className="text-center mt-2" data-intro-1>
        Houses For Sale
      </h1>
      <div className="intro-card-grid">
        <div className="intro-card">
          <div className="intro-card-header intro-card-image">
            <img
              src="https://source.unsplash.com/178j8tJrNlc"
              alt="house"
              title="house"
            />
          </div>
          <div className="intro-card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita nulla nobis cumque quisquam. Enim perspiciatis vero
            laudantium nemo cum!
          </div>
          <div className="intro-card-footer">
            <button className="btn btn-secondary">Details</button>
            <button className="btn btn-outline-secondary" data-intro-11>
              Contact Seller
            </button>
          </div>
        </div>
        <div className="intro-card">
          <div className="intro-card-header intro-card-image">
            <img
              src="https://source.unsplash.com/eWqOgJ-lfiI"
              alt="house"
              title="house"
            />
          </div>
          <div className="intro-card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita nulla nobis cumque quisquam.{" "}
            <span data-intro-8>
              Enim perspiciatis vero laudantium nemo cum!
            </span>
          </div>
          <div className="intro-card-footer">
            <button className="btn btn-secondary">Details</button>
            <button className="btn btn-outline-secondary">
              Contact Seller
            </button>
          </div>
        </div>
        <div className="intro-card">
          <div className="intro-card-header intro-card-image" data-intro-3>
            <img
              src="https://source.unsplash.com/178j8tJrNlc"
              alt="house"
              title="house"
            />
          </div>
          <div className="intro-card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita nulla nobis cumque quisquam. Enim perspiciatis vero
            laudantium nemo cum!
          </div>
          <div className="intro-card-footer">
            <button className="btn btn-secondary">Details</button>
            <button className="btn btn-outline-secondary">
              Contact Seller
            </button>
          </div>
        </div>
        <div className="intro-card">
          <div className="intro-card-header intro-card-image">
            <img
              src="https://source.unsplash.com/eWqOgJ-lfiI"
              alt="house"
              title="house"
            />
          </div>
          <div className="intro-card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita nulla nobis cumque quisquam. Enim perspiciatis vero
            laudantium nemo cum!
          </div>
          <div className="intro-card-footer">
            <button className="btn btn-secondary">Details</button>
            <button className="btn btn-outline-secondary">
              Contact Seller
            </button>
          </div>
        </div>
        <div className="intro-card">
          <div className="intro-card-header intro-card-image">
            <img
              src="https://source.unsplash.com/178j8tJrNlc"
              alt="house"
              title="house"
            />
          </div>
          <div className="intro-card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita nulla nobis cumque quisquam. Enim perspiciatis vero
            laudantium nemo cum!
          </div>
          <div className="intro-card-footer">
            <button className="btn btn-secondary">Details</button>
            <button className="btn btn-outline-secondary">
              Contact Seller
            </button>
          </div>
        </div>
        <div className="intro-card">
          <div className="intro-card-header intro-card-image">
            <img
              src="https://source.unsplash.com/eWqOgJ-lfiI"
              alt="house"
              title="house"
            />
          </div>
          <div className="intro-card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita nulla nobis cumque quisquam. Enim perspiciatis vero
            laudantium nemo cum!
          </div>
          <div className="intro-card-footer">
            <button className="btn btn-secondary">Details</button>
            <button className="btn btn-outline-secondary">
              Contact Seller
            </button>
          </div>
        </div>
        <div className="intro-card">
          <div className="intro-card-header" data-intro-6>
            <img
              src="https://source.unsplash.com/178j8tJrNlc"
              alt="house"
              title="house"
            />
          </div>
          <div className="intro-card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita nulla nobis cumque quisquam. Enim perspiciatis vero
            laudantium nemo cum!
          </div>
          <div className="intro-card-footer">
            <button className="btn btn-secondary">Details</button>
            <button className="btn btn-outline-secondary">
              Contact Seller
            </button>
          </div>
        </div>
        <div className="intro-card" data-intro-2>
          <div className="intro-card-header intro-card-image">
            <img
              src="https://source.unsplash.com/eWqOgJ-lfiI"
              alt="house"
              title="house"
            />
          </div>
          <div className="intro-card-body">
            <span data-intro-7>Lorem ipsum</span> dolor sit amet consectetur
            adipisicing elit. Nesciunt expedita nulla nobis cumque quisquam.
            Enim perspiciatis vero laudantium nemo cum!
          </div>
          <div className="intro-card-footer">
            <button className="btn btn-secondary">Details</button>
            <button className="btn btn-outline-secondary" data-intro-4>
              Contact Seller
            </button>
          </div>
        </div>
        <div className="intro-card">
          <div className="intro-card-header intro-card-image">
            <img
              src="https://source.unsplash.com/178j8tJrNlc"
              alt="house"
              title="house"
            />
          </div>
          <div className="intro-card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita nulla nobis cumque quisquam. Enim perspiciatis vero
            laudantium nemo cum!
          </div>
          <div className="intro-card-footer">
            <button className="btn btn-secondary">Details</button>
            <button className="btn btn-outline-secondary">
              Contact Seller
            </button>
          </div>
        </div>
        <div className="intro-card">
          <div className="intro-card-header intro-card-image">
            <img
              src="https://source.unsplash.com/eWqOgJ-lfiI"
              alt="house"
              title="house"
            />
          </div>
          <div className="intro-card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita nulla nobis cumque quisquam. Enim perspiciatis vero
            laudantium nemo cum!
          </div>
          <div className="intro-card-footer">
            <button className="btn btn-secondary">Details</button>
            <button className="btn btn-outline-secondary">
              Contact Seller
            </button>
          </div>
        </div>
        <div className="intro-card">
          <div className="intro-card-header intro-card-image">
            <img
              src="https://source.unsplash.com/178j8tJrNlc"
              alt="house"
              title="house"
            />
          </div>
          <div className="intro-card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita nulla nobis cumque quisquam. Enim perspiciatis vero
            <span data-intro-10>laudantium nemo cum!</span>
          </div>
          <div className="intro-card-footer">
            <button className="btn btn-secondary">Details</button>
            <button className="btn btn-outline-secondary">
              Contact Seller
            </button>
          </div>
        </div>
        <div className="intro-card">
          <div className="intro-card-header intro-card-image">
            <img
              src="https://source.unsplash.com/eWqOgJ-lfiI"
              alt="house"
              title="house"
            />
          </div>
          <div className="intro-card-body" data-intro-9>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita nulla nobis cumque quisquam. Enim perspiciatis vero
            laudantium nemo cum!
          </div>
          <div className="intro-card-footer">
            <button className="btn btn-secondary" data-intro-5>
              Details
            </button>
            <button className="btn btn-outline-secondary">
              Contact Seller
            </button>
          </div>
        </div>
      </div>
      <Intro steps={steps} enabled={enabled} onComplete={toggle} />
    </div>
  );
};

export default App;
