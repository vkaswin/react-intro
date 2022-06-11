import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Overlay } from "./Overlay";
import { Popper } from "./Popper";
import { Portal } from "./Portal";
import { classNames } from "../utils";

export const Intro = ({
  steps,
  initialStep,
  enabled,
  onComplete,
  onChange,
  nextLabel,
  backLabel,
  doneLabel,
}) => {
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
    let index = activeIndex - 1;
    referenceRef.current.classList.remove("intro-highlight");
    referenceRef.current = document.querySelector(steps[index].selector);
    referenceRef.current.classList.add("intro-highlight");
    onChange(index);
    setActiveIndex(index);
  };

  const handleNext = () => {
    let index = activeIndex + 1;
    referenceRef.current.classList.remove("intro-highlight");
    referenceRef.current = document.querySelector(steps[index].selector);
    referenceRef.current.classList.add("intro-highlight");
    onChange(index);
    setActiveIndex(index);
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
    onChange(index);
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
                style={styles.popper}
              >
                <div className={"intro-content"}>
                  <div className="intro-main">
                    {steps[activeIndex].children}
                    <ul className={"intro-steps"}>
                      {Array(steps.length)
                        .fill("")
                        .map((_, index) => {
                          return (
                            <li
                              key={index}
                              className={classNames({
                                active: index === activeIndex,
                              })}
                              onClick={handleSteps(index)}
                            ></li>
                          );
                        })}
                    </ul>
                  </div>
                  <div className="intro-btn">
                    <button onClick={handleBack} disabled={activeIndex === 0}>
                      {backLabel}
                    </button>
                    {activeIndex === steps.length - 1 ? (
                      <button onClick={handleDone}>{doneLabel}</button>
                    ) : (
                      <button
                        onClick={handleNext}
                        disabled={activeIndex === steps.length - 1}
                      >
                        {nextLabel}
                      </button>
                    )}
                  </div>
                  <div className="intro-arrow" style={styles.arrow}></div>
                </div>
              </div>
            );
          }}
          arrow
        />
        <Overlay isOpen={enabled} zIndex={2000} toggle={handleDone} />
        <div ref={hightlightRef} className={"intro-highlight-container"}></div>
      </div>
    </Portal>
  );
};

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
