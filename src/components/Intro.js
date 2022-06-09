import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Overlay } from "./Overlay";
import { Popper } from "./Popper";
import { Portal } from "./Portal";
import { classNames } from "../utils";

import "../styles.scss";

export const Intro = ({ steps, initialStep, enabled, onComplete }) => {
  const referenceRef = useRef();

  const hightlightRef = useRef();

  const [activeIndex, setActiveIndex] = useState(initialStep);

  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", showHighLightContainer);
    return () => window.addEventListener("resize", showHighLightContainer);
  }, []);

  useEffect(() => {
    if (!show) return;
    showHighLightContainer();
  }, [show, referenceRef.current]);

  useEffect(() => {
    if (!enabled) return;
    referenceRef.current = document.querySelector(steps[activeIndex].selector);
    referenceRef.current.classList.add("intro-highlight");
    setShow(true);
  }, [enabled]);

  const showHighLightContainer = () => {
    if (!enabled) return;
    referenceRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    const { x, y, width, height } =
      referenceRef.current.getBoundingClientRect();
    const { scrollX, scrollY } = window;
    hightlightRef.current.style.cssText = `width: ${width}px; height: ${height}px; left: ${
      x + scrollX
    }px; top: ${y + scrollY}px;`;
  };

  const handleBack = () => {
    referenceRef.current.classList.remove("intro-highlight");
    referenceRef.current = document.querySelector(
      steps[activeIndex - 1].selector
    );
    referenceRef.current.classList.add("intro-highlight");
    setActiveIndex(activeIndex - 1);
  };

  const handleNext = () => {
    referenceRef.current.classList.remove("intro-highlight");
    referenceRef.current = document.querySelector(
      steps[activeIndex + 1].selector
    );
    referenceRef.current.classList.add("intro-highlight");
    setActiveIndex(activeIndex + 1);
  };

  const handleDone = () => {
    referenceRef.current.classList.remove("intro-highlight");
    onComplete();
    setActiveIndex(initialStep);
    setShow(false);
  };

  const handleSteps = (index) => () => {
    referenceRef.current.classList.remove("intro-highlight");
    referenceRef.current = document.querySelector(steps[index].selector);
    referenceRef.current.classList.add("intro-highlight");
    setActiveIndex(index);
  };

  if (!show) return null;

  return (
    <Portal>
      <div>
        <Popper
          referenceElement={referenceRef}
          position={steps[activeIndex].position}
          offset={15}
          render={({ styles, position, ref }) => {
            return (
              <div
                ref={ref}
                className={classNames("intro", {
                  show,
                })}
                data-position={position}
                style={styles}
              >
                <div className="intro-content">
                  <div className="intro-main">
                    {steps[activeIndex].children}
                    <ul className="intro-steps">
                      {[...Array(steps.length).keys()].map((id) => {
                        return (
                          <li
                            key={id}
                            className={classNames({
                              active: id === activeIndex,
                            })}
                            onClick={handleSteps(id)}
                          ></li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="intro-btn">
                    <button onClick={handleBack} disabled={activeIndex === 0}>
                      Back
                    </button>
                    {activeIndex === steps.length - 1 ? (
                      <button onClick={handleDone}>Done</button>
                    ) : (
                      <button
                        onClick={handleNext}
                        disabled={activeIndex === steps.length - 1}
                      >
                        Next
                      </button>
                    )}
                  </div>
                  <div className="intro-arrow" data-position={position}></div>
                </div>
              </div>
            );
          }}
        />
        <Overlay isOpen={enabled} zIndex={2000} toggle={handleDone} />
        <div ref={hightlightRef} className="intro-highlight-container"></div>
      </div>
    </Portal>
  );
};

Intro.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      selector: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      children: PropTypes.node.isRequired,
    })
  ),
  enabled: PropTypes.bool,
  initialStep: PropTypes.number,
};

Intro.defaultProps = {
  steps: [],
  initialStep: 0,
  enabled: false,
};
