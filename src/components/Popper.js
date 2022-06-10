import { useEffect, useLayoutEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

export const Popper = ({ render, referenceElement, position, offset }) => {
  const popperElement = useRef();

  const [state, setState] = useState({
    styles: { position: "absolute", left: "0px", top: "0px" },
    position,
  });

  useLayoutEffect(() => {
    getCoordinates();
  }, [referenceElement.current]);

  useEffect(() => {
    window.addEventListener("resize", getCoordinates);
    return () => window.removeEventListener("resize", getCoordinates);
  }, []);

  const ref = (element) => {
    popperElement.current = element;
  };

  const getCoordinates = () => {
    const reference = referenceElement.current.getBoundingClientRect();

    const popper = popperElement.current.getBoundingClientRect();

    const [placement] = position.split("-");

    const { innerWidth, innerHeight } = window;

    const canPlaceOnLeft = () => {
      return reference.x + offset > popper.width;
    };

    const canPlaceOnLeftCenter = () => {
      let height = (popper.height - reference.height) / 2;
      let bottom = innerHeight - (reference.y + reference.height);
      return reference.y > height && bottom > height;
    };

    const canPlaceOnLeftStart = () => {
      return (
        innerHeight - (reference.y + reference.height) >
        popper.height - reference.height
      );
    };

    const canPlaceOnLeftEnd = () => {
      return reference.y - reference.height > popper.height - reference.height;
    };

    const canPlaceOnRight = () => {
      return (
        innerWidth - (reference.x + reference.width + offset) > popper.width
      );
    };

    const canPlaceOnRightCenter = () => {
      let height = (popper.height - reference.height) / 2;
      let bottom = innerHeight - (reference.y + reference.height);
      return reference.y > height && bottom > height;
    };

    const canPlaceOnRightStart = () => {
      return (
        innerHeight - (reference.y + reference.height) >
        popper.height - reference.height
      );
    };

    const canPlaceOnRightEnd = () => {
      return reference.y > popper.height - reference.height;
    };

    const canPlaceOnTop = () => {
      return reference.y + offset > popper.height;
    };

    const canPlaceOnTopCenter = () => {
      let width = (popper.width - reference.width) / 2;
      let right = innerWidth - (reference.x + reference.width);
      return reference.x > width && right > width;
    };

    const canPlaceOnTopStart = () => {
      return (
        innerWidth - (reference.x + reference.width) >
        popper.width - reference.width
      );
    };

    const canPlaceOnTopEnd = () => {
      return reference.x > popper.width - reference.width;
    };

    const canPlaceOnBottom = () => {
      return (
        innerHeight - (reference.y + reference.height + offset) > popper.height
      );
    };

    const canPlaceOnBottomCenter = () => {
      let width = (popper.width - reference.width) / 2;
      let right = innerWidth - (reference.x + reference.width);
      return reference.x > width && right > width;
    };

    const canPlaceOnBottomStart = () => {
      return (
        innerWidth - (reference.x + reference.width) >
        popper.width - reference.width
      );
    };

    const canPlaceOnBottomEnd = () => {
      return reference.x > popper.width - reference.width;
    };

    const getPosition = () => {
      switch (placement) {
        case "left":
          return canPlaceOnLeft() ? ["left"] : [];
        case "right":
          return canPlaceOnRight() ? ["right"] : [];
        case "top":
          return canPlaceOnTop() ? ["top"] : [];
        case "bottom":
          return canPlaceOnBottom() ? ["bottom"] : [];
        default:
          return [];
      }
    };

    const getOppositePosition = () => {
      switch (placement) {
        case "left":
          return canPlaceOnRight() ? ["right"] : [];
        case "right":
          return canPlaceOnLeft() ? ["left"] : [];
        case "top":
          return canPlaceOnBottom() ? ["bottom"] : [];
        case "bottom":
          return canPlaceOnTop() ? ["top"] : [];
        default:
          return [];
      }
    };

    const getAdjacentSides = () => {
      if (placement === "left" || placement === "right") {
        return [
          ...(canPlaceOnTop() ? ["top"] : []),
          ...(canPlaceOnBottom() ? ["bottom"] : []),
        ];
      }
      if (placement === "top" || placement === "bottom") {
        return [
          ...(canPlaceOnLeft() ? ["left"] : []),
          ...(canPlaceOnRight() ? ["right"] : []),
        ];
      }
    };

    const findCoordianteByPosition = {
      "left-center": () => {
        if (!(canPlaceOnLeft() && canPlaceOnLeftCenter())) return false;
        return {
          x: reference.x - popper.width - offset,
          y: reference.y - (popper.height / 2 - reference.height / 2),
        };
      },
      "left-start": () => {
        if (!(canPlaceOnLeft() && canPlaceOnLeftStart())) return false;
        return {
          x: reference.x - popper.width - offset,
          y: reference.y,
        };
      },
      "left-end": () => {
        if (!(canPlaceOnLeft() && canPlaceOnLeftEnd())) return false;
        return {
          x: reference.x - popper.width - offset,
          y: reference.y - (popper.height - reference.height),
        };
      },
      "right-center": () => {
        if (!(canPlaceOnRight() && canPlaceOnRightCenter())) return false;
        return {
          x: reference.x + reference.width + offset,
          y: reference.y - (popper.height / 2 - reference.height / 2),
        };
      },
      "right-start": () => {
        if (!(canPlaceOnRight() && canPlaceOnRightStart())) return false;
        return {
          x: reference.x + reference.width + offset,
          y: reference.y,
        };
      },
      "right-end": () => {
        if (!(canPlaceOnRight() && canPlaceOnRightEnd())) return false;
        return {
          x: reference.x + reference.width + offset,
          y: reference.y - (popper.height - reference.height),
        };
      },
      "top-center": () => {
        if (!(canPlaceOnTop() && canPlaceOnTopCenter())) return false;
        return {
          x: reference.x + (reference.width / 2 - popper.width / 2),
          y: reference.y - (popper.height + offset),
        };
      },
      "top-start": () => {
        if (!(canPlaceOnTop() && canPlaceOnTopStart())) return false;
        return {
          x: reference.x,
          y: reference.y - (popper.height + offset),
        };
      },
      "top-end": () => {
        if (!(canPlaceOnTop() && canPlaceOnTopEnd())) return false;
        return {
          x: reference.x - (popper.width - reference.width),
          y: reference.y - (popper.height + offset),
        };
      },
      "bottom-center": () => {
        if (!(canPlaceOnBottom() && canPlaceOnBottomCenter())) return false;
        return {
          x: reference.x + (reference.width / 2 - popper.width / 2),
          y: reference.y + reference.height + offset,
        };
      },
      "bottom-start": () => {
        if (!(canPlaceOnBottom() && canPlaceOnBottomStart())) return false;
        return {
          x: reference.x,
          y: reference.y + reference.height + offset,
        };
      },
      "bottom-end": () => {
        if (!(canPlaceOnBottom() && canPlaceOnBottomEnd())) return false;
        return {
          x: reference.x - (popper.width - reference.width),
          y: reference.y + reference.height + offset,
        };
      },
    };

    const autoPlacement = () => {
      const posiblePositions = [
        ...getPosition(),
        ...getOppositePosition(),
        ...getAdjacentSides(),
      ];

      let coordinates = null;

      posiblePositions
        .reduce((initial, placement) => {
          return [
            ...initial,
            ...Object.entries(findCoordianteByPosition).filter(
              ([key]) => key !== position && placement === key.split("-")[0]
            ),
          ];
        }, [])
        .some(([key, func]) => {
          let coord = func();
          if (coord) {
            coordinates = { ...coord, placement: key };
            return true;
          }
          return false;
        });

      if (coordinates) {
        setCoordinate(coordinates);
      } else {
        defaultPlacement();
      }
    };

    const defaultPlacement = () => {
      setCoordinate({
        x: reference.x,
        y: reference.y + reference.height + offset,
        placement: "bottom-start",
      });
    };

    const coordinates = findCoordianteByPosition[position]();

    if (coordinates) {
      setCoordinate(coordinates);
    } else {
      autoPlacement();
    }
  };

  const setCoordinate = ({ x, y, placement }) => {
    const { scrollX, scrollY } = window;
    setState({
      ...state,
      styles: {
        ...state.styles,
        left: `${x + scrollX}px`,
        top: `${y + scrollY}px`,
      },
      position: placement ?? position,
    });
  };

  return render({ ...state, ref });
};

Popper.propTypes = {
  render: PropTypes.func.isRequired,
  referenceElement: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  position: PropTypes.string.isRequired,
  offset: PropTypes.number,
};

Popper.defaultProps = {
  offset: 5,
};
