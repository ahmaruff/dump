import { d as _export_sfc, e as useNuiDefaultProperty, h as useNinjaButton, g as _sfc_main$3, _ as __nuxt_component_0$2 } from './server.mjs';
import { useSSRContext, defineComponent, unref, mergeProps, withCtx, createVNode, resolveDynamicComponent, renderSlot, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, ref, provide, Fragment, cloneVNode, h, toRef, shallowRef, computed, onMounted, watch, nextTick, getCurrentScope, onScopeDispose, shallowReadonly, onBeforeUnmount, Transition } from 'vue';
import { ssrRenderComponent, ssrRenderVNode, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
import { MenuItem, Menu, MenuButton, MenuItems, Portal, TransitionChild } from '@headlessui/vue';

const sides = ["top", "right", "bottom", "left"];
const alignments = ["start", "end"];
const placements = /* @__PURE__ */ sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = (v) => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
const oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
const arrow$2 = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = clamp(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter((placement) => getAlignment(placement) === alignment), ...allowedPlacements.filter((placement) => getAlignment(placement) !== alignment)] : allowedPlacements.filter((placement) => getSide(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter((placement) => {
    if (alignment) {
      return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
    }
    return true;
  });
}
const autoPlacement$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "autoPlacement",
    options,
    async fn(state) {
      var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
      const {
        rects,
        middlewareData,
        placement,
        platform: platform2,
        elements
      } = state;
      const {
        crossAxis = false,
        alignment,
        allowedPlacements = placements,
        autoAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      const placements$1 = alignment !== void 0 || allowedPlacements === placements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
      const currentPlacement = placements$1[currentIndex];
      if (currentPlacement == null) {
        return {};
      }
      const alignmentSides = getAlignmentSides(currentPlacement, rects, await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)));
      if (placement !== currentPlacement) {
        return {
          reset: {
            placement: placements$1[0]
          }
        };
      }
      const currentOverflows = [overflow[getSide(currentPlacement)], overflow[alignmentSides[0]], overflow[alignmentSides[1]]];
      const allOverflows = [...((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || [], {
        placement: currentPlacement,
        overflows: currentOverflows
      }];
      const nextPlacement = placements$1[currentIndex + 1];
      if (nextPlacement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: nextPlacement
          }
        };
      }
      const placementsSortedByMostSpace = allOverflows.map((d) => {
        const alignment2 = getAlignment(d.placement);
        return [d.placement, alignment2 && crossAxis ? (
          // Check along the mainAxis and main crossAxis side.
          d.overflows.slice(0, 2).reduce((acc, v) => acc + v, 0)
        ) : (
          // Check only the mainAxis.
          d.overflows[0]
        ), d.overflows];
      }).sort((a, b) => a[1] - b[1]);
      const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter((d) => d[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        getAlignment(d[0]) ? 2 : 3
      ).every((v) => v <= 0));
      const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
      if (resetPlacement !== placement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: resetPlacement
          }
        };
      }
      return {};
    }
  };
};
const flip$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
const hide$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "hide",
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = "referenceHidden",
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case "referenceHidden": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const offsets = getSideOffsets(overflow, rects.reference);
          return {
            data: {
              referenceHiddenOffsets: offsets,
              referenceHidden: isAnySideFullyClipped(offsets)
            }
          };
        }
        case "escaped": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            altBoundary: true
          });
          const offsets = getSideOffsets(overflow, rects.floating);
          return {
            data: {
              escapedOffsets: offsets,
              escaped: isAnySideFullyClipped(offsets)
            }
          };
        }
        default: {
          return {};
        }
      }
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
const offset$1 = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
const shift$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || void 0;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || (void 0).document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isTopLayer(element) {
  return [":popover-open", ":modal"].some((selector) => {
    try {
      return element.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function isContainingBlock(element) {
  const webkit = isWebKit();
  const css = getComputedStyle(element);
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isTopLayer(currentNode)) {
      return null;
    }
    if (isContainingBlock(currentNode)) {
      return currentNode;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getCssDimensions(element) {
  const css = getComputedStyle(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement$1(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement$1(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
const noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement$1(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = currentWin.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = currentWin.frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const x = rect.left + scroll.scrollLeft - offsets.x;
  const y = rect.top + scroll.scrollTop - offsets.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
const getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle(element).direction === "rtl";
}
const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement$1(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
const offset = offset$1;
const autoPlacement = autoPlacement$1;
const shift = shift$1;
const flip = flip$1;
const hide = hide$1;
const arrow$1 = arrow$2;
const computePosition = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};
function isComponentPublicInstance(target) {
  return target != null && typeof target === "object" && "$el" in target;
}
function unwrapElement(target) {
  if (isComponentPublicInstance(target)) {
    const element = target.$el;
    return isNode(element) && getNodeName(element) === "#comment" ? null : element;
  }
  return target;
}
function toValue(source) {
  return typeof source === "function" ? source() : unref(source);
}
function arrow(options) {
  return {
    name: "arrow",
    options,
    fn(args) {
      const element = unwrapElement(toValue(options.element));
      if (element == null) {
        return {};
      }
      return arrow$1({
        element,
        padding: options.padding
      }).fn(args);
    }
  };
}
function getDPR(element) {
  {
    return 1;
  }
}
function roundByDPR(element, value) {
  const dpr = getDPR();
  return Math.round(value * dpr) / dpr;
}
function useFloating(reference, floating, options) {
  if (options === void 0) {
    options = {};
  }
  const whileElementsMountedOption = options.whileElementsMounted;
  const openOption = computed(() => {
    var _toValue;
    return (_toValue = toValue(options.open)) != null ? _toValue : true;
  });
  const middlewareOption = computed(() => toValue(options.middleware));
  const placementOption = computed(() => {
    var _toValue2;
    return (_toValue2 = toValue(options.placement)) != null ? _toValue2 : "bottom";
  });
  const strategyOption = computed(() => {
    var _toValue3;
    return (_toValue3 = toValue(options.strategy)) != null ? _toValue3 : "absolute";
  });
  const transformOption = computed(() => {
    var _toValue4;
    return (_toValue4 = toValue(options.transform)) != null ? _toValue4 : true;
  });
  const referenceElement = computed(() => unwrapElement(reference.value));
  const floatingElement = computed(() => unwrapElement(floating.value));
  const x = ref(0);
  const y = ref(0);
  const strategy = ref(strategyOption.value);
  const placement = ref(placementOption.value);
  const middlewareData = shallowRef({});
  const isPositioned = ref(false);
  const floatingStyles = computed(() => {
    const initialStyles = {
      position: strategy.value,
      left: "0",
      top: "0"
    };
    if (!floatingElement.value) {
      return initialStyles;
    }
    const xVal = roundByDPR(floatingElement.value, x.value);
    const yVal = roundByDPR(floatingElement.value, y.value);
    if (transformOption.value) {
      return {
        ...initialStyles,
        transform: "translate(" + xVal + "px, " + yVal + "px)",
        ...getDPR(floatingElement.value) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy.value,
      left: xVal + "px",
      top: yVal + "px"
    };
  });
  let whileElementsMountedCleanup;
  function update() {
    if (referenceElement.value == null || floatingElement.value == null) {
      return;
    }
    computePosition(referenceElement.value, floatingElement.value, {
      middleware: middlewareOption.value,
      placement: placementOption.value,
      strategy: strategyOption.value
    }).then((position) => {
      x.value = position.x;
      y.value = position.y;
      strategy.value = position.strategy;
      placement.value = position.placement;
      middlewareData.value = position.middlewareData;
      isPositioned.value = true;
    });
  }
  function cleanup() {
    if (typeof whileElementsMountedCleanup === "function") {
      whileElementsMountedCleanup();
      whileElementsMountedCleanup = void 0;
    }
  }
  function attach() {
    cleanup();
    if (whileElementsMountedOption === void 0) {
      update();
      return;
    }
    if (referenceElement.value != null && floatingElement.value != null) {
      whileElementsMountedCleanup = whileElementsMountedOption(referenceElement.value, floatingElement.value, update);
      return;
    }
  }
  function reset() {
    if (!openOption.value) {
      isPositioned.value = false;
    }
  }
  watch([middlewareOption, placementOption, strategyOption], update, {
    flush: "sync"
  });
  watch([referenceElement, floatingElement], attach, {
    flush: "sync"
  });
  watch(openOption, reset, {
    flush: "sync"
  });
  if (getCurrentScope()) {
    onScopeDispose(cleanup);
  }
  return {
    x: shallowReadonly(x),
    y: shallowReadonly(y),
    strategy: shallowReadonly(strategy),
    placement: shallowReadonly(placement),
    middlewareData: shallowReadonly(middlewareData),
    isPositioned: shallowReadonly(isPositioned),
    floatingStyles,
    update
  };
}
var ge = Object.defineProperty;
var ve = (e, r, o) => r in e ? ge(e, r, { enumerable: true, configurable: true, writable: true, value: o }) : e[r] = o;
var _ = (e, r, o) => (ve(e, r + "", o), o);
function V(e) {
  return e == null || e.value == null ? null : e.value instanceof Node ? e.value : "$el" in e.value && e.value.$el ? V(ref(e.value.$el)) : "getBoundingClientRect" in e.value ? e.value : null;
}
function X(e) {
  return e.reduce((r, o) => o.type === Fragment ? r.concat(X(o.children)) : r.concat(o), []);
}
function z(e) {
  return e == null ? false : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
function J(e) {
  return e = unref(e), e && (e == null ? void 0 : e.nodeType) !== Node.COMMENT_NODE;
}
class je {
  constructor() {
    _(this, "current", this.detect());
  }
  set(r) {
    this.current !== r && (this.current = r);
  }
  reset() {
    this.set(this.detect());
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return "server";
  }
}
const Y = new je();
function Ve(e, r, o, a, t) {
  watch([
    () => t.offset,
    () => t.flip,
    () => t.shift,
    () => t.autoPlacement,
    () => t.arrow,
    () => t.hide,
    () => t.middleware
  ], () => {
    const i = [];
    (typeof t.offset == "number" || typeof t.offset == "object" || typeof t.offset == "function") && i.push(offset(t.offset)), (t.flip === true || typeof t.flip == "number" || typeof t.flip == "object") && i.push(flip({
      padding: typeof t.flip == "number" ? t.flip : void 0,
      ...typeof t.flip == "object" ? t.flip : {}
    })), (t.shift === true || typeof t.shift == "number" || typeof t.shift == "object") && i.push(shift({
      padding: typeof t.shift == "number" ? t.shift : void 0,
      ...typeof t.shift == "object" ? t.shift : {}
    })), (t.autoPlacement === true || typeof t.autoPlacement == "object") && i.push(autoPlacement(
      typeof t.autoPlacement == "object" ? t.autoPlacement : void 0
    )), i.push(...typeof t.middleware == "function" ? t.middleware({
      referenceEl: r,
      floatingEl: o
    }) : t.middleware || []), (t.arrow === true || typeof t.arrow == "number") && i.push(arrow({
      element: a,
      padding: t.arrow === true ? 0 : t.arrow
    })), (t.hide === true || typeof t.hide == "object" || Array.isArray(t.hide)) && (Array.isArray(t.hide) ? t.hide : [t.hide]).forEach((u) => {
      i.push(hide(
        typeof u == "object" ? u : void 0
      ));
    }), e.value = i;
  }, { immediate: true });
}
function Ie(e, r, o) {
  let a = () => {
  };
  onMounted(() => {
    if (e && Y.isClient && typeof ResizeObserver < "u" && r.value && r.value instanceof Element) {
      const t = new ResizeObserver(([i]) => {
        o.value = i.borderBoxSize.reduce((u, { inlineSize: s }) => u + s, 0);
      });
      t.observe(r.value), a = () => {
        t.disconnect(), o.value = null;
      };
    }
  }), onBeforeUnmount(() => {
    a();
  });
}
const Ue = (e) => {
  switch (e) {
    case "top":
      return "origin-bottom";
    case "bottom":
      return "origin-top";
    case "left":
      return "origin-right";
    case "right":
      return "origin-left";
    case "top-start":
    case "right-end":
      return "origin-bottom-left";
    case "top-end":
    case "left-end":
      return "origin-bottom-right";
    case "right-start":
    case "bottom-start":
      return "origin-top-left";
    case "left-start":
    case "bottom-end":
      return "origin-top-right";
    default:
      return "origin-center";
  }
};
function ze(e, r) {
  const o = computed(() => {
    if (typeof e.originClass == "function")
      return e.originClass(r.value);
    if (typeof e.originClass == "string")
      return e.originClass;
    if (e.tailwindcssOriginClass)
      return Ue(r.value);
  }), a = computed(
    () => e.enter || o.value ? `${e.enter || ""} ${o.value || ""}` : void 0
  ), t = computed(
    () => e.leave || o.value ? `${e.leave || ""} ${o.value || ""}` : void 0
  );
  return { originClassRef: o, enterActiveClassRef: a, leaveActiveClassRef: t };
}
const re = Symbol("ReferenceContext"), oe = Symbol("FloatingContext"), ae = Symbol("ArrowContext");
const n = {
  as: {
    type: [String, Function],
    default: "template"
  },
  floatingAs: {
    type: [String, Function],
    default: "div"
  },
  show: {
    type: Boolean,
    default: null
  },
  placement: {
    type: String,
    default: "bottom-start"
  },
  strategy: {
    type: String,
    default: "absolute"
  },
  offset: [Number, Function, Object],
  shift: {
    type: [Boolean, Number, Object],
    default: false
  },
  flip: {
    type: [Boolean, Number, Object],
    default: false
  },
  arrow: {
    type: [Boolean, Number],
    default: false
  },
  autoPlacement: {
    type: [Boolean, Object],
    default: false
  },
  hide: {
    type: [Boolean, Object, Array],
    default: false
  },
  referenceHiddenClass: String,
  escapedClass: String,
  autoUpdate: {
    type: [Boolean, Object],
    default: true
  },
  zIndex: {
    type: [Number, String],
    default: 9999
  },
  transitionName: String,
  transitionType: String,
  enter: String,
  enterFrom: String,
  enterTo: String,
  leave: String,
  leaveFrom: String,
  leaveTo: String,
  originClass: [String, Function],
  tailwindcssOriginClass: {
    type: Boolean,
    default: false
  },
  portal: {
    type: Boolean,
    default: false
  },
  transform: {
    type: Boolean,
    default: false
  },
  adaptiveWidth: {
    type: Boolean,
    default: false
  },
  composable: {
    type: Boolean,
    default: false
  },
  dialog: {
    type: Boolean,
    default: false
  },
  middleware: {
    type: [Array, Function],
    default: () => []
  }
};
function ue(e, r, o, a) {
  const { referenceRef: t } = a, i = r, u = mergeProps(o, {
    ref: t
  }), s = cloneVNode(
    e,
    i.as === "template" ? u : {}
  );
  return i.as === "template" ? s : typeof i.as == "string" ? h(i.as, u, [s]) : h(i.as, u, () => [s]);
}
function W(e, r, o, a) {
  var R;
  const { floatingRef: t, props: i, mounted: u, show: s, referenceHidden: d, escaped: f, placement: c, floatingStyles: h$1, referenceElWidth: y, updateFloating: x } = a, l = mergeProps(
    { ...i, as: i.floatingAs },
    r
  ), { enterActiveClassRef: g, leaveActiveClassRef: m } = ze(l, c), F = {
    enterActiveClass: g.value,
    enterFromClass: l.enterFrom,
    enterToClass: l.enterTo,
    leaveActiveClass: m.value,
    leaveFromClass: l.leaveFrom,
    leaveToClass: l.leaveTo
  }, C = {
    name: l.transitionName,
    type: l.transitionType,
    appear: true,
    ...l.transitionName ? {} : F,
    onBeforeEnter() {
      s.value = true;
    },
    onAfterLeave() {
      s.value = false;
    }
  }, P = {
    unmount: ((R = e.props) == null ? void 0 : R.unmount) === false ? false : void 0,
    enter: g.value,
    enterFrom: l.enterFrom,
    enterTo: l.enterTo,
    leave: m.value,
    leaveFrom: l.leaveFrom,
    leaveTo: l.leaveTo,
    onBeforeEnter: C.onBeforeEnter,
    onAfterLeave: C.onAfterLeave
  }, I = {
    class: [
      d.value ? l.referenceHiddenClass : void 0,
      f.value ? l.escapedClass : void 0
    ].filter((w) => !!w).join(" "),
    style: {
      ...h$1.value,
      zIndex: l.zIndex,
      width: l.adaptiveWidth && typeof y.value == "number" ? `${y.value}px` : void 0
    }
  };
  function H(w) {
    return l.portal ? u.value ? h(Portal, () => w) : createCommentVNode() : w;
  }
  function U(w) {
    const O = mergeProps(
      I,
      o,
      l.dialog ? {} : { ref: t }
    );
    return l.as === "template" ? w : typeof l.as == "string" ? h(l.as, O, w) : h(l.as, O, () => w);
  }
  function S() {
    function w() {
      var p;
      const O = l.as === "template" ? mergeProps(
        I,
        o,
        l.dialog ? {} : { ref: t }
      ) : null, j = cloneVNode(e, O);
      return ((p = e.props) == null ? void 0 : p.unmount) === false ? (x(), j) : typeof l.show != "boolean" || l.show ? j : createCommentVNode();
    }
    return u.value ? l.transitionChild ? h(TransitionChild, {
      key: `placement-${c.value}`,
      ...l.dialog ? { ref: t } : {},
      as: "template",
      ...P
    }, w) : h(Transition, {
      ...l.dialog ? { ref: t } : {},
      ...C
    }, w) : createCommentVNode();
  }
  return H(
    U(
      S()
    )
  );
}
function fe(e, r, o, a, t) {
  const i = ref(false), u = toRef(a, "placement"), s = toRef(a, "strategy"), d = shallowRef({}), f = ref(void 0), c = ref(void 0), h2 = ref(null), y = ref(void 0), x = ref(void 0), l = computed(() => V(r)), g = computed(() => V(o)), m = computed(
    () => J(l) && J(g)
  ), { placement: F, middlewareData: C, isPositioned: P, floatingStyles: I, update: H } = useFloating(l, g, {
    placement: u,
    strategy: s,
    middleware: d,
    // If enable dialog mode, then set `transform` to false.
    transform: a.dialog ? false : a.transform,
    // Fix transition not smooth bug when dialog mode enabled.
    whileElementsMounted: a.dialog ? () => () => {
    } : void 0
  }), U = ref(null);
  onMounted(() => {
    i.value = true;
  }), watch(e, (p, N) => {
    p && !N ? t("show") : !p && N && t("hide");
  }, { immediate: true });
  function S() {
    m.value && (H(), t("update"));
  }
  watch([u, s, d], S, { flush: "sync" }), Ve(
    d,
    l,
    g,
    h2,
    a
  ), watch([C, () => a.hide, P], () => {
    var p, N;
    (a.hide === true || typeof a.hide == "object" || Array.isArray(a.hide)) && (f.value = ((p = C.value.hide) == null ? void 0 : p.referenceHidden) || !P.value, c.value = (N = C.value.hide) == null ? void 0 : N.escaped);
  }), watch(C, () => {
    const p = C.value.arrow;
    y.value = p == null ? void 0 : p.x, x.value = p == null ? void 0 : p.y;
  }), Ie(a.adaptiveWidth, l, U), watch([e, m], async (p, N, de) => {
    if (await nextTick(), e.value && m.value && a.autoUpdate) {
      const me = autoUpdate(
        l.value,
        g.value,
        S,
        typeof a.autoUpdate == "object" ? a.autoUpdate : void 0
      );
      de(me);
    }
  }, { flush: "post", immediate: true });
  const R = ref(true);
  watch(l, () => {
    !(l.value instanceof Element) && m.value && R.value && (R.value = false, (void 0).requestAnimationFrame(() => {
      R.value = true, S();
    }));
  }, { flush: "sync" });
  const w = {
    referenceRef: r,
    placement: F
  }, O = {
    floatingRef: o,
    props: a,
    mounted: i,
    show: e,
    referenceHidden: f,
    escaped: c,
    placement: F,
    floatingStyles: I,
    referenceElWidth: U,
    updateFloating: S
  }, j = {
    ref: h2,
    placement: F,
    x: y,
    y: x
  };
  return provide(ae, j), { referenceApi: w, floatingApi: O, arrowApi: j, placement: F, referenceEl: l, floatingEl: g, middlewareData: C, update: S };
}
const Me = {
  name: "Float",
  inheritAttrs: false,
  props: n,
  emits: ["show", "hide", "update"],
  setup(e, { emit: r, slots: o, attrs: a }) {
    var _a;
    const t = ref((_a = e.show) != null ? _a : false), i = ref(null), u = ref(null), {
      referenceApi: s,
      floatingApi: d,
      placement: f
    } = fe(t, i, u, e, r);
    function c(y) {
      return e.as === "template" ? y : typeof e.as == "string" ? h(e.as, a, y) : h(e.as, a, () => y);
    }
    const h$1 = {
      placement: f.value
    };
    return e.composable || e.dialog ? (provide(re, s), provide(oe, d), () => {
      if (o.default)
        return c(o.default(h$1));
    }) : () => {
      if (!o.default)
        return;
      const [y, x] = X(o.default(h$1)).filter(z);
      if (!z(y))
        return;
      const l = ue(
        y,
        { as: "template" },
        {},
        s
      ), g = W(
        x,
        { as: e.floatingAs },
        {},
        d
      );
      return c([
        l,
        g
      ]);
    };
  }
};
({
  as: n.as
});
({
  as: n.floatingAs,
  transitionName: n.transitionName,
  transitionType: n.transitionType,
  enter: n.enter,
  enterFrom: n.enterFrom,
  enterTo: n.enterTo,
  leave: n.leave,
  leaveFrom: n.leaveFrom,
  leaveTo: n.leaveTo,
  originClass: n.originClass,
  tailwindcssOriginClass: n.tailwindcssOriginClass,
  transitionChild: {
    type: Boolean,
    default: false
  }
});
({
  as: {
    ...n.as,
    default: "div"
  },
  offset: {
    type: Number,
    default: 4
  }
});
({
  as: n.as,
  show: n.show,
  placement: n.placement,
  strategy: n.strategy,
  offset: n.offset,
  shift: n.shift,
  flip: n.flip,
  arrow: n.arrow,
  autoPlacement: n.autoPlacement,
  autoUpdate: n.autoUpdate,
  zIndex: n.zIndex,
  transitionName: n.transitionName,
  transitionType: n.transitionType,
  enter: n.enter,
  enterFrom: n.enterFrom,
  enterTo: n.enterTo,
  leave: n.leave,
  leaveFrom: n.leaveFrom,
  leaveTo: n.leaveTo,
  originClass: n.originClass,
  tailwindcssOriginClass: n.tailwindcssOriginClass,
  portal: n.portal,
  transform: n.transform,
  middleware: n.middleware
});
({
  as: n.as,
  placement: n.placement,
  strategy: n.strategy,
  offset: n.offset,
  shift: n.shift,
  flip: {
    ...n.flip,
    default: true
  },
  arrow: n.arrow,
  autoPlacement: n.autoPlacement,
  autoUpdate: n.autoUpdate,
  zIndex: n.zIndex,
  transitionName: n.transitionName,
  transitionType: n.transitionType,
  enter: n.enter,
  enterFrom: n.enterFrom,
  enterTo: n.enterTo,
  leave: n.leave,
  leaveFrom: n.leaveFrom,
  leaveTo: n.leaveTo,
  originClass: n.originClass,
  tailwindcssOriginClass: n.tailwindcssOriginClass,
  transform: n.transform,
  middleware: n.middleware
});
({
  as: n.as,
  placement: n.placement,
  strategy: n.strategy,
  offset: n.offset,
  shift: n.shift,
  flip: n.flip,
  arrow: n.arrow,
  autoPlacement: n.autoPlacement,
  autoUpdate: n.autoUpdate,
  zIndex: n.zIndex,
  transitionName: n.transitionName,
  transitionType: n.transitionType,
  enter: n.enter,
  enterFrom: n.enterFrom,
  enterTo: n.enterTo,
  leave: n.leave,
  leaveFrom: n.leaveFrom,
  leaveTo: n.leaveTo,
  originClass: n.originClass,
  tailwindcssOriginClass: n.tailwindcssOriginClass,
  transform: n.transform,
  middleware: n.middleware,
  globalHideCursor: {
    type: Boolean,
    default: true
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BaseDropdown",
  __ssrInlineRender: true,
  props: {
    label: { default: "" },
    headerLabel: { default: void 0 },
    fixed: { type: Boolean, default: false },
    buttonColor: { default: void 0 },
    color: { default: void 0 },
    placement: { default: void 0 },
    rounded: { default: void 0 },
    size: { default: void 0 },
    variant: { default: void 0 },
    classes: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const buttonColor = useNuiDefaultProperty(props, "BaseDropdown", "buttonColor");
    const color = useNuiDefaultProperty(props, "BaseDropdown", "color");
    const placement = useNuiDefaultProperty(props, "BaseDropdown", "placement");
    const rounded = useNuiDefaultProperty(props, "BaseDropdown", "rounded");
    const size = useNuiDefaultProperty(props, "BaseDropdown", "size");
    const variant = useNuiDefaultProperty(props, "BaseDropdown", "variant");
    const sizes = {
      md: "nui-menu-md",
      lg: "nui-menu-lg"
    };
    const radiuses = {
      none: "",
      sm: "nui-menu-rounded-sm",
      md: "nui-menu-rounded-md",
      lg: "nui-menu-rounded-lg",
      full: "nui-menu-rounded-lg"
    };
    const colors = {
      default: "nui-menu-default",
      "default-contrast": "nui-menu-default-contrast",
      muted: "nui-menu-muted",
      "muted-contrast": "nui-menu-muted-contrast",
      primary: "nui-menu-primary",
      info: "nui-menu-info",
      success: "nui-menu-success",
      warning: "nui-menu-warning",
      danger: "nui-menu-danger",
      none: ""
    };
    const textColors = {
      default: "text-inherit",
      "default-contrast": "text-inherit",
      muted: "text-muted-500",
      "muted-contrast": "text-muted-500",
      primary: "text-primary-500",
      info: "text-info-500",
      success: "text-success-500",
      warning: "text-warning-500",
      danger: "text-danger-500",
      light: "text-muted-100",
      dark: "text-muted-900 dark:text-muted-100",
      black: "text-black dark:text-white",
      none: ""
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_BaseButton = _sfc_main$3;
      const _component_Icon = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-dropdown", (_a = props.classes) == null ? void 0 : _a.wrapper]
      }, _attrs))} data-v-11f5a2ea>`);
      _push(ssrRenderComponent(unref(Menu), {
        as: "div",
        class: ["nui-menu", (_b = props.classes) == null ? void 0 : _b.menuWrapper]
      }, {
        default: withCtx(({ open, close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Me), {
              enter: "transition duration-100 ease-out",
              "enter-from": "transform scale-95 opacity-0",
              "enter-to": "transform scale-100 opacity-100",
              leave: "transition duration-75 ease-in",
              "leave-from": "transform scale-100 opacity-100",
              "leave-to": "transform scale-95 opacity-0",
              flip: "",
              offset: props.variant === "context" ? 6 : 4,
              strategy: props.fixed ? "fixed" : "absolute",
              placement: unref(placement),
              "adaptive-width": props.fixed,
              "z-index": 20
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(MenuButton), { as: "template" }, {
                    default: withCtx((_22, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "button", { open, close }, () => {
                          if (unref(variant) === "button" || props.variant === "button") {
                            _push4(ssrRenderComponent(_component_BaseButton, {
                              color: props.buttonColor ? props.buttonColor : unref(buttonColor),
                              rounded: props.rounded ? props.rounded : unref(rounded),
                              class: "!pe-3 !ps-4"
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  ssrRenderSlot(_ctx.$slots, "label", { open, close }, () => {
                                    _push5(`<span data-v-11f5a2ea${_scopeId4}>${ssrInterpolate(props.label)}</span>`);
                                  }, _push5, _parent5, _scopeId4);
                                  _push5(ssrRenderComponent(_component_Icon, {
                                    name: "lucide:chevron-down",
                                    class: ["nui-chevron", open && "rotate-180"]
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    renderSlot(_ctx.$slots, "label", { open, close }, () => [
                                      createVNode("span", null, toDisplayString(props.label), 1)
                                    ], true),
                                    createVNode(_component_Icon, {
                                      name: "lucide:chevron-down",
                                      class: ["nui-chevron", open && "rotate-180"]
                                    }, null, 8, ["class"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else if (props.variant === "context") {
                            _push4(`<button type="button" class="nui-context-button nui-focus" data-v-11f5a2ea${_scopeId3}><span class="nui-context-button-inner" data-v-11f5a2ea${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_Icon, {
                              name: "lucide:more-horizontal",
                              class: ["nui-context-icon", open && "rotate-90"]
                            }, null, _parent4, _scopeId3));
                            _push4(`</span></button>`);
                          } else if (props.variant === "text") {
                            _push4(`<button type="button" class="${ssrRenderClass([
                              "nui-text-button nui-focus",
                              unref(buttonColor) && textColors[unref(buttonColor)]
                            ])}" data-v-11f5a2ea${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "label", { open, close }, () => {
                              _push4(`<span class="nui-text-button-inner" data-v-11f5a2ea${_scopeId3}>${ssrInterpolate(props.label)}</span>`);
                            }, _push4, _parent4, _scopeId3);
                            _push4(ssrRenderComponent(_component_Icon, {
                              name: "lucide:chevron-down",
                              class: ["nui-chevron", open && "rotate-180"]
                            }, null, _parent4, _scopeId3));
                            _push4(`</button>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        }, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "button", { open, close }, () => [
                            unref(variant) === "button" || props.variant === "button" ? (openBlock(), createBlock(_component_BaseButton, {
                              key: 0,
                              color: props.buttonColor ? props.buttonColor : unref(buttonColor),
                              rounded: props.rounded ? props.rounded : unref(rounded),
                              class: "!pe-3 !ps-4"
                            }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "label", { open, close }, () => [
                                  createVNode("span", null, toDisplayString(props.label), 1)
                                ], true),
                                createVNode(_component_Icon, {
                                  name: "lucide:chevron-down",
                                  class: ["nui-chevron", open && "rotate-180"]
                                }, null, 8, ["class"])
                              ]),
                              _: 2
                            }, 1032, ["color", "rounded"])) : props.variant === "context" ? (openBlock(), createBlock("button", {
                              key: 1,
                              type: "button",
                              class: "nui-context-button nui-focus"
                            }, [
                              createVNode("span", { class: "nui-context-button-inner" }, [
                                createVNode(_component_Icon, {
                                  name: "lucide:more-horizontal",
                                  class: ["nui-context-icon", open && "rotate-90"]
                                }, null, 8, ["class"])
                              ])
                            ])) : props.variant === "text" ? (openBlock(), createBlock("button", {
                              key: 2,
                              type: "button",
                              class: [
                                "nui-text-button nui-focus",
                                unref(buttonColor) && textColors[unref(buttonColor)]
                              ]
                            }, [
                              renderSlot(_ctx.$slots, "label", { open, close }, () => [
                                createVNode("span", { class: "nui-text-button-inner" }, toDisplayString(props.label), 1)
                              ], true),
                              createVNode(_component_Icon, {
                                name: "lucide:chevron-down",
                                class: ["nui-chevron", open && "rotate-180"]
                              }, null, 8, ["class"])
                            ], 2)) : createCommentVNode("", true)
                          ], true)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(MenuItems), {
                    class: ["nui-dropdown-menu", [
                      unref(size) && sizes[unref(size)],
                      unref(rounded) && radiuses[unref(rounded)],
                      unref(color) && colors[unref(color)],
                      (_a2 = props.classes) == null ? void 0 : _a2.menu
                    ]]
                  }, {
                    default: withCtx((_22, _push4, _parent4, _scopeId3) => {
                      var _a3, _b3, _c, _d;
                      if (_push4) {
                        if (props.headerLabel) {
                          _push4(`<div class="${ssrRenderClass([(_a3 = props.classes) == null ? void 0 : _a3.header, "nui-menu-header"])}" data-v-11f5a2ea${_scopeId3}><div class="nui-menu-header-inner" data-v-11f5a2ea${_scopeId3}><h4 class="nui-menu-header-title" data-v-11f5a2ea${_scopeId3}>${ssrInterpolate(props.headerLabel)}</h4></div></div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`<div class="${ssrRenderClass([(_b3 = props.classes) == null ? void 0 : _b3.content, "nui-menu-content"])}" data-v-11f5a2ea${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "default", { open, close }, null, _push4, _parent4, _scopeId3);
                        _push4(`</div>`);
                      } else {
                        return [
                          props.headerLabel ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: ["nui-menu-header", (_c = props.classes) == null ? void 0 : _c.header]
                          }, [
                            createVNode("div", { class: "nui-menu-header-inner" }, [
                              createVNode("h4", { class: "nui-menu-header-title" }, toDisplayString(props.headerLabel), 1)
                            ])
                          ], 2)) : createCommentVNode("", true),
                          createVNode("div", {
                            class: ["nui-menu-content", (_d = props.classes) == null ? void 0 : _d.content]
                          }, [
                            renderSlot(_ctx.$slots, "default", { open, close }, void 0, true)
                          ], 2)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(MenuButton), { as: "template" }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "button", { open, close }, () => [
                          unref(variant) === "button" || props.variant === "button" ? (openBlock(), createBlock(_component_BaseButton, {
                            key: 0,
                            color: props.buttonColor ? props.buttonColor : unref(buttonColor),
                            rounded: props.rounded ? props.rounded : unref(rounded),
                            class: "!pe-3 !ps-4"
                          }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "label", { open, close }, () => [
                                createVNode("span", null, toDisplayString(props.label), 1)
                              ], true),
                              createVNode(_component_Icon, {
                                name: "lucide:chevron-down",
                                class: ["nui-chevron", open && "rotate-180"]
                              }, null, 8, ["class"])
                            ]),
                            _: 2
                          }, 1032, ["color", "rounded"])) : props.variant === "context" ? (openBlock(), createBlock("button", {
                            key: 1,
                            type: "button",
                            class: "nui-context-button nui-focus"
                          }, [
                            createVNode("span", { class: "nui-context-button-inner" }, [
                              createVNode(_component_Icon, {
                                name: "lucide:more-horizontal",
                                class: ["nui-context-icon", open && "rotate-90"]
                              }, null, 8, ["class"])
                            ])
                          ])) : props.variant === "text" ? (openBlock(), createBlock("button", {
                            key: 2,
                            type: "button",
                            class: [
                              "nui-text-button nui-focus",
                              unref(buttonColor) && textColors[unref(buttonColor)]
                            ]
                          }, [
                            renderSlot(_ctx.$slots, "label", { open, close }, () => [
                              createVNode("span", { class: "nui-text-button-inner" }, toDisplayString(props.label), 1)
                            ], true),
                            createVNode(_component_Icon, {
                              name: "lucide:chevron-down",
                              class: ["nui-chevron", open && "rotate-180"]
                            }, null, 8, ["class"])
                          ], 2)) : createCommentVNode("", true)
                        ], true)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(unref(MenuItems), {
                      class: ["nui-dropdown-menu", [
                        unref(size) && sizes[unref(size)],
                        unref(rounded) && radiuses[unref(rounded)],
                        unref(color) && colors[unref(color)],
                        (_b2 = props.classes) == null ? void 0 : _b2.menu
                      ]]
                    }, {
                      default: withCtx(() => {
                        var _a3, _b3;
                        return [
                          props.headerLabel ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: ["nui-menu-header", (_a3 = props.classes) == null ? void 0 : _a3.header]
                          }, [
                            createVNode("div", { class: "nui-menu-header-inner" }, [
                              createVNode("h4", { class: "nui-menu-header-title" }, toDisplayString(props.headerLabel), 1)
                            ])
                          ], 2)) : createCommentVNode("", true),
                          createVNode("div", {
                            class: ["nui-menu-content", (_b3 = props.classes) == null ? void 0 : _b3.content]
                          }, [
                            renderSlot(_ctx.$slots, "default", { open, close }, void 0, true)
                          ], 2)
                        ];
                      }),
                      _: 2
                    }, 1032, ["class"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Me), {
                enter: "transition duration-100 ease-out",
                "enter-from": "transform scale-95 opacity-0",
                "enter-to": "transform scale-100 opacity-100",
                leave: "transition duration-75 ease-in",
                "leave-from": "transform scale-100 opacity-100",
                "leave-to": "transform scale-95 opacity-0",
                flip: "",
                offset: props.variant === "context" ? 6 : 4,
                strategy: props.fixed ? "fixed" : "absolute",
                placement: unref(placement),
                "adaptive-width": props.fixed,
                "z-index": 20
              }, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createVNode(unref(MenuButton), { as: "template" }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "button", { open, close }, () => [
                          unref(variant) === "button" || props.variant === "button" ? (openBlock(), createBlock(_component_BaseButton, {
                            key: 0,
                            color: props.buttonColor ? props.buttonColor : unref(buttonColor),
                            rounded: props.rounded ? props.rounded : unref(rounded),
                            class: "!pe-3 !ps-4"
                          }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "label", { open, close }, () => [
                                createVNode("span", null, toDisplayString(props.label), 1)
                              ], true),
                              createVNode(_component_Icon, {
                                name: "lucide:chevron-down",
                                class: ["nui-chevron", open && "rotate-180"]
                              }, null, 8, ["class"])
                            ]),
                            _: 2
                          }, 1032, ["color", "rounded"])) : props.variant === "context" ? (openBlock(), createBlock("button", {
                            key: 1,
                            type: "button",
                            class: "nui-context-button nui-focus"
                          }, [
                            createVNode("span", { class: "nui-context-button-inner" }, [
                              createVNode(_component_Icon, {
                                name: "lucide:more-horizontal",
                                class: ["nui-context-icon", open && "rotate-90"]
                              }, null, 8, ["class"])
                            ])
                          ])) : props.variant === "text" ? (openBlock(), createBlock("button", {
                            key: 2,
                            type: "button",
                            class: [
                              "nui-text-button nui-focus",
                              unref(buttonColor) && textColors[unref(buttonColor)]
                            ]
                          }, [
                            renderSlot(_ctx.$slots, "label", { open, close }, () => [
                              createVNode("span", { class: "nui-text-button-inner" }, toDisplayString(props.label), 1)
                            ], true),
                            createVNode(_component_Icon, {
                              name: "lucide:chevron-down",
                              class: ["nui-chevron", open && "rotate-180"]
                            }, null, 8, ["class"])
                          ], 2)) : createCommentVNode("", true)
                        ], true)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(unref(MenuItems), {
                      class: ["nui-dropdown-menu", [
                        unref(size) && sizes[unref(size)],
                        unref(rounded) && radiuses[unref(rounded)],
                        unref(color) && colors[unref(color)],
                        (_a2 = props.classes) == null ? void 0 : _a2.menu
                      ]]
                    }, {
                      default: withCtx(() => {
                        var _a3, _b2;
                        return [
                          props.headerLabel ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: ["nui-menu-header", (_a3 = props.classes) == null ? void 0 : _a3.header]
                          }, [
                            createVNode("div", { class: "nui-menu-header-inner" }, [
                              createVNode("h4", { class: "nui-menu-header-title" }, toDisplayString(props.headerLabel), 1)
                            ])
                          ], 2)) : createCommentVNode("", true),
                          createVNode("div", {
                            class: ["nui-menu-content", (_b2 = props.classes) == null ? void 0 : _b2.content]
                          }, [
                            renderSlot(_ctx.$slots, "default", { open, close }, void 0, true)
                          ], 2)
                        ];
                      }),
                      _: 2
                    }, 1032, ["class"])
                  ];
                }),
                _: 2
              }, 1032, ["offset", "strategy", "placement", "adaptive-width"])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.2.1_nuxt@3.12.3/node_modules/@shuriken-ui/nuxt/components/base/BaseDropdown.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_11 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-11f5a2ea"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseDropdownItem",
  __ssrInlineRender: true,
  props: {
    to: { default: void 0 },
    href: { default: void 0 },
    rel: { default: void 0 },
    target: { default: void 0 },
    type: { default: void 0 },
    title: { default: void 0 },
    text: { default: void 0 },
    disabled: { type: Boolean },
    color: { default: void 0 },
    contrast: { default: void 0 },
    rounded: { default: void 0 },
    classes: { default: () => ({
      title: "font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white",
      text: "text-muted-400 font-sans text-xs"
    }) }
  },
  setup(__props) {
    const props = __props;
    const color = useNuiDefaultProperty(props, "BaseDropdownItem", "color");
    const contrast = useNuiDefaultProperty(props, "BaseDropdownItem", "contrast");
    const rounded = useNuiDefaultProperty(props, "BaseDropdownItem", "rounded");
    const radiuses = {
      none: "",
      sm: "nui-item-rounded-sm",
      md: "nui-item-rounded-md",
      lg: "nui-item-rounded-lg"
    };
    const contrasts = {
      default: "nui-item-default",
      contrast: "nui-item-contrast"
    };
    const colors = {
      primary: "nui-item-primary",
      info: "nui-item-info",
      success: "nui-item-success",
      warning: "nui-item-warning",
      danger: "nui-item-danger",
      dark: "nui-item-dark",
      black: "nui-item-black"
    };
    const { is, attributes } = useNinjaButton(props);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(MenuItem), mergeProps({ as: "div" }, _attrs), {
        default: withCtx(({ active, close }, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(is)), mergeProps(unref(attributes), {
              class: ["nui-dropdown-item", [
                active && "nui-active",
                unref(rounded) && radiuses[unref(rounded)],
                unref(contrast) && contrasts[unref(contrast)],
                unref(color) && colors[unref(color)],
                props.disabled && "nui-item-disabled",
                (_a = props.classes) == null ? void 0 : _a.wrapper
              ]],
              onClick: close
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2, _c, _d;
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "start", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`<div class="nui-item-content"${_scopeId2}><div class="${ssrRenderClass((_a2 = props.classes) == null ? void 0 : _a2.title)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "default", { active, close }, () => {
                    _push3(`${ssrInterpolate(props.title)}`);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</div>`);
                  if ("text" in _ctx.$slots || props.text) {
                    _push3(`<p class="${ssrRenderClass([(_b2 = props.classes) == null ? void 0 : _b2.text, "text-muted-400 font-sans text-xs"])}"${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "text", { active, close }, () => {
                      _push3(`${ssrInterpolate(props.text)}`);
                    }, _push3, _parent3, _scopeId2);
                    _push3(`</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                  ssrRenderSlot(_ctx.$slots, "end", { active, close }, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "start"),
                    createVNode("div", { class: "nui-item-content" }, [
                      createVNode("div", {
                        class: (_c = props.classes) == null ? void 0 : _c.title
                      }, [
                        renderSlot(_ctx.$slots, "default", { active, close }, () => [
                          createTextVNode(toDisplayString(props.title), 1)
                        ])
                      ], 2),
                      "text" in _ctx.$slots || props.text ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: ["text-muted-400 font-sans text-xs", (_d = props.classes) == null ? void 0 : _d.text]
                      }, [
                        renderSlot(_ctx.$slots, "text", { active, close }, () => [
                          createTextVNode(toDisplayString(props.text), 1)
                        ])
                      ], 2)) : createCommentVNode("", true)
                    ]),
                    renderSlot(_ctx.$slots, "end", { active, close })
                  ];
                }
              }),
              _: 2
            }), _parent2, _scopeId);
          } else {
            return [
              (openBlock(), createBlock(resolveDynamicComponent(unref(is)), mergeProps(unref(attributes), {
                class: ["nui-dropdown-item", [
                  active && "nui-active",
                  unref(rounded) && radiuses[unref(rounded)],
                  unref(contrast) && contrasts[unref(contrast)],
                  unref(color) && colors[unref(color)],
                  props.disabled && "nui-item-disabled",
                  (_b = props.classes) == null ? void 0 : _b.wrapper
                ]],
                onClickPassive: close
              }), {
                default: withCtx(() => {
                  var _a2, _b2;
                  return [
                    renderSlot(_ctx.$slots, "start"),
                    createVNode("div", { class: "nui-item-content" }, [
                      createVNode("div", {
                        class: (_a2 = props.classes) == null ? void 0 : _a2.title
                      }, [
                        renderSlot(_ctx.$slots, "default", { active, close }, () => [
                          createTextVNode(toDisplayString(props.title), 1)
                        ])
                      ], 2),
                      "text" in _ctx.$slots || props.text ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: ["text-muted-400 font-sans text-xs", (_b2 = props.classes) == null ? void 0 : _b2.text]
                      }, [
                        renderSlot(_ctx.$slots, "text", { active, close }, () => [
                          createTextVNode(toDisplayString(props.text), 1)
                        ])
                      ], 2)) : createCommentVNode("", true)
                    ]),
                    renderSlot(_ctx.$slots, "end", { active, close })
                  ];
                }),
                _: 2
              }, 1040, ["class", "onClickPassive"]))
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.2.1_nuxt@3.12.3/node_modules/@shuriken-ui/nuxt/components/base/BaseDropdownItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { __nuxt_component_11 as _, _sfc_main as a };
