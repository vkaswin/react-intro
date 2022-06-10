import React from "react";
import PropTypes from "prop-types";
import { classNames } from "../utils";

export const Overlay = ({ isOpen, toggle }) => {
  return (
    <div
      className={classNames("intro-overlay", {
        show: isOpen,
      })}
      onClick={() => {
        isOpen && toggle();
      }}
    ></div>
  );
};

Overlay.propTypes = {
  isOpen: PropTypes.bool,
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  toggle: () => {},
};

Overlay.defaultProps = {
  zIndex: 1025,
  isOpen: false,
  toggle: () => {},
};
