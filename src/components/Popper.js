import { useEffect, useLayoutEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

export const Popper = ({
  render,
  referenceElement,
  position,
  offset,
  arrow,
}) => {
  const popperElement = useRef();

  const [state, setState] = useState({
    styles: {
      popper: {
        position: "absolute",
        inset: "0px auto auto 0px",
      },
      arrow: {
        position: "absolute",
      },
    },
    position,
  });

  useLayoutEffect(() => {
    handlePopper();
  }, [referenceElement.current]);

  useEffect(() => {
    window.addEventListener("resize", handlePopper);
    return () => window.removeEventListener("resize", handlePopper);
  }, []);

  const ref = (element) => {
    popperElement.current = element;
  };

  const getBoundingClientRect = (element) => {
    let rect = element.getBoundingClientRect();
    const { scrollX, scrollY } = window;
    return {
      bottom: rect.bottom,
      height: rect.height,
      left: rect.left,
      right: rect.right,
      top: rect.top,
      width: rect.width,
      x: rect.x + scrollX,
      y: rect.y + scrollY,
    };
  };

  const handlePopper = () => {
    const reference = getBoundingClientRect(referenceElement.current);

    const popper = getBoundingClientRect(popperElement.current);

    const { innerWidth, innerHeight } = window;

    const args = {
      reference,
      popper,
      innerWidth,
      innerHeight,
    };

    const popperRect = popperPositions[position]?.(args);

    if (popperRect) {
      setPopperPosition(popperRect);
    } else {
      autoPlacement(args);
    }
  };

  const popperPositions = {
    "left-center": (args) => placeOnLeftCenter(args),
    "left-start": (args) => placeOnLeftStart(args),
    "left-end": (args) => placeOnLeftEnd(args),
    "right-start": (args) => placeOnRightStart(args),
    "right-center": (args) => placeOnRightCenter(args),
    "right-end": (args) => placeOnRightEnd(args),
    "top-start": (args) => placeOnTopStart(args),
    "top-center": (args) => placeOnTopCenter(args),
    "top-end": (args) => placeOnTopEnd(args),
    "bottom-start": (args) => placeOnBottomStart(args),
    "bottom-center": (args) => placeOnBottomCenter(args),
    "bottom-end": (args) => placeOnBottomEnd(args),
  };

  const canPlaceOnLeft = ({ reference, popper }) => {
    return reference.x - offset > popper.width;
  };

  const canPlaceOnRight = ({ reference, popper, innerWidth }) => {
    return innerWidth - (reference.x + reference.width + offset) > popper.width;
  };

  const canPlaceOnTop = ({ reference, popper }) => {
    return reference.y > popper.height;
  };

  const canPlaceOnBottom = ({ reference, popper, innerHeight }) => {
    return (
      innerHeight - (reference.y + reference.height + offset) > popper.height
    );
  };

  const placeOnLeftStart = (args) => {
    if (!canPlaceOnLeft(args)) return false;
    const { reference, popper, innerHeight } = args;
    let bottom = innerHeight - reference.y;
    let left = reference.x - popper.width - offset;
    let top =
      popper.height > bottom
        ? Math.max(reference.y - (popper.height - bottom + 10), 10)
        : reference.y;
    return {
      popper: {
        x: left,
        y: top,
      },
      ...(arrow && {
        arrow: {
          x: popper.width,
          y: reference.y - top + reference.height / 2,
        },
      }),
    };
  };

  const placeOnLeftCenter = (args) => {
    if (!canPlaceOnLeft(args)) return false;
    const { reference, popper } = args;
    let left = reference.x - popper.width - offset;
    let top = Math.max(
      reference.y - (popper.height / 2 - reference.height / 2),
      10
    );
    return {
      popper: {
        x: left,
        y: top,
      },
      ...(arrow && {
        arrow: {
          x: popper.width,
          y: reference.y - top + reference.height / 2,
        },
      }),
    };
  };
  const placeOnLeftEnd = (args) => {
    if (!canPlaceOnLeft(args)) return false;
    const { reference, popper } = args;
    let left = reference.x - popper.width - offset;
    let top = Math.max(reference.y - (popper.height - reference.height), 10);
    return {
      popper: {
        x: left,
        y: top,
      },
      ...(arrow && {
        arrow: { x: popper.width, y: reference.y - top + reference.height / 2 },
      }),
    };
  };

  const placeOnRightStart = (args) => {
    if (!canPlaceOnRight(args)) return false;
    const { reference, popper, innerHeight } = args;
    let bottom = innerHeight - (reference.y + reference.height);
    let left = reference.x + reference.width + offset;
    let top = Math.max(
      popper.height > bottom ? bottom - popper.height : reference.y,
      10
    );
    return {
      popper: {
        x: left,
        y: top,
      },
      ...(arrow && {
        arrow: {
          x: 0,
          y: reference.y - top + reference.height / 2,
        },
      }),
    };
  };

  const placeOnRightCenter = (args) => {
    if (!canPlaceOnRight(args)) return false;
    const { reference, popper } = args;
    let left = reference.x + reference.width + offset;
    let top = Math.max(
      reference.y - (popper.height / 2 - reference.height / 2),
      10
    );
    return {
      popper: {
        x: left,
        y: top,
      },
      ...(arrow && {
        arrow: {
          x: 0,
          y: reference.y - top + reference.height / 2,
        },
      }),
    };
  };

  const placeOnRightEnd = (args) => {
    if (!canPlaceOnRight(args)) return false;
    const { reference, popper } = args;
    let left = reference.x + reference.width + offset;
    let top = Math.max(reference.y - (popper.height - reference.height), 10);
    return {
      popper: {
        x: left,
        y: top,
      },
      ...(arrow && {
        arrow: {
          x: 0,
          y: reference.y - top + reference.height / 2,
        },
      }),
    };
  };

  const placeOnTopStart = (args) => {
    if (!canPlaceOnTop(args)) return false;
    const { reference, popper, innerWidth } = args;
    let right = innerWidth - reference.x;
    let left =
      right < popper.width
        ? Math.max(reference.x - (popper.width - right + 10), 10)
        : reference.x;
    let top = reference.y - (popper.height + offset);
    return {
      popper: {
        x: left,
        y: top,
      },
      ...(arrow && {
        arrow: {
          x: reference.x - left + reference.width / 2,
          y: popper.height,
        },
      }),
    };
  };

  const placeOnTopCenter = (args) => {
    if (!canPlaceOnTop(args)) return false;
    const { reference, popper, innerWidth } = args;
    let right = innerWidth - reference.x;
    let left =
      right < popper.width
        ? Math.max(reference.x - (popper.width - right + offset), 10)
        : Math.max(reference.x + (reference.width / 2 - popper.width / 2), 10);
    let top = reference.y - (popper.height + offset);
    return {
      popper: {
        x: left,
        y: top,
      },
      ...(arrow && {
        arrow: {
          x: reference.x - left + reference.width / 2,
          y: popper.height,
        },
      }),
    };
  };

  const placeOnTopEnd = (args) => {
    if (!canPlaceOnTop(args)) return false;
    const { reference, popper } = args;
    let left = Math.max(reference.x - (popper.width - reference.width), 10);
    let top = reference.y - (popper.height + offset);
    return {
      popper: {
        x: left,
        y: top,
      },
      ...(arrow && {
        arrow: {
          x: reference.x - left + reference.width / 2,
          y: popper.height,
        },
      }),
    };
  };

  const placeOnBottomStart = (args) => {
    const { reference, popper, innerWidth, isDefault = false } = args;

    if (!canPlaceOnBottom(args)) return false;

    let right = innerWidth - reference.x;
    let left =
      right < popper.width
        ? Math.max(reference.x - (popper.width - right + offset), 10)
        : reference.x;
    let top = reference.y + reference.height + offset;
    return {
      popper: {
        x: left,
        y: top,
      },
      ...(arrow && {
        arrow: { x: reference.x - left + reference.width / 2, y: 0 },
      }),
    };
  };

  const placeOnBottomCenter = (args) => {
    const { reference, popper, innerWidth, isDefault } = args;

    const getCoordinates = () => {
      let right = innerWidth - reference.x;
      let left =
        right < popper.width
          ? Math.max(reference.x - (popper.width - right + offset), 10)
          : Math.max(
              reference.x + (reference.width / 2 - popper.width / 2),
              10
            );
      let top = reference.y + reference.height + offset;
      return {
        popper: {
          x: left,
          y: top,
        },
        ...(arrow && {
          arrow: { x: reference.x - left + reference.width / 2, y: 0 },
        }),
      };
    };

    if (isDefault) return getCoordinates();

    if (!canPlaceOnBottom(args)) return false;

    return getCoordinates();
  };

  const placeOnBottomEnd = (args) => {
    if (!canPlaceOnBottom(args)) return false;
    const { reference, popper } = args;
    let left = Math.max(reference.x - (popper.width - reference.width), 10);
    let top = reference.y + reference.height + offset;
    return {
      popper: {
        x: left,
        y: top,
      },
      ...(arrow && {
        arrow: { x: reference.x - left + reference.width / 2, y: 0 },
      }),
    };
  };

  const getPosition = (args) => {
    const [placement] = position.split("-");
    switch (placement) {
      case "left":
        return canPlaceOnLeft(args) && "left-center";
      case "right":
        return canPlaceOnRight(args) && "right";
      case "top":
        return canPlaceOnTop(args) && "top";
      case "bottom":
        return canPlaceOnBottom(args) && "bottom";
      default:
        return false;
    }
  };

  const getOppositePosition = (args) => {
    const [placement] = position.split("-");
    switch (placement) {
      case "left":
        return canPlaceOnRight(args) && "right";
      case "right":
        return canPlaceOnLeft(args) && "left";
      case "top":
        return canPlaceOnBottom(args) && "bottom";
      case "bottom":
        return canPlaceOnTop(args) && "top";
      default:
        return false;
    }
  };

  const getAdjacentSides = (args) => {
    const [placement] = position.split("-");
    if (placement === "left" || placement === "right") {
      return [canPlaceOnTop(args) && "top", canPlaceOnBottom(args) && "bottom"];
    }
    if (placement === "top" || placement === "bottom") {
      return [canPlaceOnLeft(args) && "left", canPlaceOnRight(args) && "right"];
    }
  };

  const autoPlacement = (args) => {
    const posiblePositions = [
      getPosition(args),
      getOppositePosition(args),
      ...getAdjacentSides(args),
    ].filter(Boolean);

    let placement =
      posiblePositions.length === 0
        ? "bottom-center"
        : `${posiblePositions[0]}-center`;
    const popperRect = popperPositions[placement]?.({
      ...args,
      ...(posiblePositions.length === 0 && { isDefault: true }),
    });
    setPopperPosition({ ...popperRect, placement });
  };

  const setPopperPosition = ({
    popper: { x: X, y: Y } = {},
    arrow: { x, y } = {},
    placement,
  }) => {
    setState({
      ...state,
      styles: {
        popper: {
          ...state.styles.popper,
          transform: `translate(${X}px,${Y}px)`,
        },
        ...(arrow && {
          arrow: {
            ...state.styles.arrow,
            left: `${x}px`,
            top: `${y}px`,
          },
        }),
      },
      position: placement ?? position,
    });
  };

  return render({ ...state, ref });
};

Popper.propTypes = {
  render: PropTypes.func.isRequired,
  referenceElement: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  offset: PropTypes.number,
  arrow: PropTypes.bool,
};

Popper.defaultProps = {
  offset: 5,
  arrow: false,
};
