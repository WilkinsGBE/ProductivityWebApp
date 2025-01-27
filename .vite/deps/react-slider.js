import {
  require_prop_types
} from "./chunk-JQEZBOMU.js";
import {
  require_react
} from "./chunk-4SFRHSJ3.js";
import {
  __toESM
} from "./chunk-EQCVQC35.js";

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}

// node_modules/react-slider/dist/es/dev/components/ReactSlider/ReactSlider.mjs
var import_react = __toESM(require_react(), 1);
var import_prop_types = __toESM(require_prop_types(), 1);
var _jsxFileName = "/Users/krise/github/react-slider/src/components/ReactSlider/ReactSlider.jsx";
function pauseEvent(e) {
  if (e && e.stopPropagation) {
    e.stopPropagation();
  }
  if (e && e.preventDefault) {
    e.preventDefault();
  }
  return false;
}
function stopPropagation(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }
}
function sanitizeInValue(x) {
  if (x == null) {
    return [];
  }
  return Array.isArray(x) ? x.slice() : [x];
}
function prepareOutValue(x) {
  return x !== null && x.length === 1 ? x[0] : x.slice();
}
function trimSucceeding(length, nextValue, minDistance, max) {
  for (let i = 0; i < length; i += 1) {
    const padding = max - i * minDistance;
    if (nextValue[length - 1 - i] > padding) {
      nextValue[length - 1 - i] = padding;
    }
  }
}
function trimPreceding(length, nextValue, minDistance, min) {
  for (let i = 0; i < length; i += 1) {
    const padding = min + i * minDistance;
    if (nextValue[i] < padding) {
      nextValue[i] = padding;
    }
  }
}
function addHandlers(eventMap) {
  Object.keys(eventMap).forEach((key) => {
    if (typeof document !== "undefined") {
      document.addEventListener(key, eventMap[key], false);
    }
  });
}
function removeHandlers(eventMap) {
  Object.keys(eventMap).forEach((key) => {
    if (typeof document !== "undefined") {
      document.removeEventListener(key, eventMap[key], false);
    }
  });
}
function trimAlignValue(val, props) {
  return alignValue(trimValue(val, props), props);
}
function alignValue(val, props) {
  const valModStep = (val - props.min) % props.step;
  let alignedValue = val - valModStep;
  if (Math.abs(valModStep) * 2 >= props.step) {
    alignedValue += valModStep > 0 ? props.step : -props.step;
  }
  return parseFloat(alignedValue.toFixed(5));
}
function trimValue(val, props) {
  let trimmed = val;
  if (trimmed <= props.min) {
    trimmed = props.min;
  }
  if (trimmed >= props.max) {
    trimmed = props.max;
  }
  return trimmed;
}
var ReactSlider = function(_React$Component) {
  _inheritsLoose(ReactSlider2, _React$Component);
  function ReactSlider2(_props) {
    var _this;
    _this = _React$Component.call(this, _props) || this;
    _this.onKeyUp = () => {
      _this.onEnd();
    };
    _this.onMouseUp = () => {
      _this.onEnd(_this.getMouseEventMap());
    };
    _this.onTouchEnd = (e) => {
      e.preventDefault();
      _this.onEnd(_this.getTouchEventMap());
    };
    _this.onBlur = () => {
      _this.setState({
        index: -1
      }, _this.onEnd(_this.getKeyDownEventMap()));
    };
    _this.onMouseMove = (e) => {
      _this.setState({
        pending: true
      });
      const position = _this.getMousePosition(e);
      const diffPosition = _this.getDiffPosition(position[0]);
      const newValue = _this.getValueFromPosition(diffPosition);
      _this.move(newValue);
    };
    _this.onTouchMove = (e) => {
      if (e.touches.length > 1) {
        return;
      }
      _this.setState({
        pending: true
      });
      const position = _this.getTouchPosition(e);
      if (typeof _this.isScrolling === "undefined") {
        const diffMainDir = position[0] - _this.startPosition[0];
        const diffScrollDir = position[1] - _this.startPosition[1];
        _this.isScrolling = Math.abs(diffScrollDir) > Math.abs(diffMainDir);
      }
      if (_this.isScrolling) {
        _this.setState({
          index: -1
        });
        return;
      }
      const diffPosition = _this.getDiffPosition(position[0]);
      const newValue = _this.getValueFromPosition(diffPosition);
      _this.move(newValue);
    };
    _this.onKeyDown = (e) => {
      if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) {
        return;
      }
      _this.setState({
        pending: true
      });
      switch (e.key) {
        case "ArrowLeft":
        case "ArrowDown":
        case "Left":
        case "Down":
          e.preventDefault();
          _this.moveDownByStep();
          break;
        case "ArrowRight":
        case "ArrowUp":
        case "Right":
        case "Up":
          e.preventDefault();
          _this.moveUpByStep();
          break;
        case "Home":
          e.preventDefault();
          _this.move(_this.props.min);
          break;
        case "End":
          e.preventDefault();
          _this.move(_this.props.max);
          break;
        case "PageDown":
          e.preventDefault();
          _this.moveDownByStep(_this.props.pageFn(_this.props.step));
          break;
        case "PageUp":
          e.preventDefault();
          _this.moveUpByStep(_this.props.pageFn(_this.props.step));
          break;
      }
    };
    _this.onSliderMouseDown = (e) => {
      if (_this.props.disabled || e.button === 2) {
        return;
      }
      _this.setState({
        pending: true
      });
      if (!_this.props.snapDragDisabled) {
        const position = _this.getMousePosition(e);
        _this.forceValueFromPosition(position[0], (i) => {
          _this.start(i, position[0]);
          addHandlers(_this.getMouseEventMap());
        });
      }
      pauseEvent(e);
    };
    _this.onSliderClick = (e) => {
      if (_this.props.disabled) {
        return;
      }
      if (_this.props.onSliderClick && !_this.hasMoved) {
        const position = _this.getMousePosition(e);
        const valueAtPos = trimAlignValue(_this.calcValue(_this.calcOffsetFromPosition(position[0])), _this.props);
        _this.props.onSliderClick(valueAtPos);
      }
    };
    _this.createOnKeyDown = (i) => (e) => {
      if (_this.props.disabled) {
        return;
      }
      _this.start(i);
      addHandlers(_this.getKeyDownEventMap());
      pauseEvent(e);
    };
    _this.createOnMouseDown = (i) => (e) => {
      if (_this.props.disabled || e.button === 2) {
        return;
      }
      _this.setState({
        pending: true
      });
      const position = _this.getMousePosition(e);
      _this.start(i, position[0]);
      addHandlers(_this.getMouseEventMap());
      pauseEvent(e);
    };
    _this.createOnTouchStart = (i) => (e) => {
      if (_this.props.disabled || e.touches.length > 1) {
        return;
      }
      _this.setState({
        pending: true
      });
      const position = _this.getTouchPosition(e);
      _this.startPosition = position;
      _this.isScrolling = void 0;
      _this.start(i, position[0]);
      addHandlers(_this.getTouchEventMap());
      stopPropagation(e);
    };
    _this.handleResize = () => {
      const resizeTimeout = window.setTimeout(() => {
        _this.pendingResizeTimeouts.shift();
        _this.resize();
      }, 0);
      _this.pendingResizeTimeouts.push(resizeTimeout);
    };
    _this.renderThumb = (style, i) => {
      const className = _this.props.thumbClassName + " " + _this.props.thumbClassName + "-" + i + " " + (_this.state.index === i ? _this.props.thumbActiveClassName : "");
      const props = {
        "ref": (r) => {
          _this["thumb" + i] = r;
        },
        "key": _this.props.thumbClassName + "-" + i,
        className,
        style,
        "onMouseDown": _this.createOnMouseDown(i),
        "onTouchStart": _this.createOnTouchStart(i),
        "onFocus": _this.createOnKeyDown(i),
        "tabIndex": 0,
        "role": "slider",
        "aria-orientation": _this.props.orientation,
        "aria-valuenow": _this.state.value[i],
        "aria-valuemin": _this.props.min,
        "aria-valuemax": _this.props.max,
        "aria-label": Array.isArray(_this.props.ariaLabel) ? _this.props.ariaLabel[i] : _this.props.ariaLabel,
        "aria-labelledby": Array.isArray(_this.props.ariaLabelledby) ? _this.props.ariaLabelledby[i] : _this.props.ariaLabelledby,
        "aria-disabled": _this.props.disabled
      };
      const state = {
        index: i,
        value: prepareOutValue(_this.state.value),
        valueNow: _this.state.value[i]
      };
      if (_this.props.ariaValuetext) {
        props["aria-valuetext"] = typeof _this.props.ariaValuetext === "string" ? _this.props.ariaValuetext : _this.props.ariaValuetext(state);
      }
      return _this.props.renderThumb(props, state);
    };
    _this.renderTrack = (i, offsetFrom, offsetTo) => {
      const props = {
        key: _this.props.trackClassName + "-" + i,
        className: _this.props.trackClassName + " " + _this.props.trackClassName + "-" + i,
        style: _this.buildTrackStyle(offsetFrom, _this.state.upperBound - offsetTo)
      };
      const state = {
        index: i,
        value: prepareOutValue(_this.state.value)
      };
      return _this.props.renderTrack(props, state);
    };
    let value = sanitizeInValue(_props.value);
    if (!value.length) {
      value = sanitizeInValue(_props.defaultValue);
    }
    _this.pendingResizeTimeouts = [];
    const zIndices = [];
    for (let i = 0; i < value.length; i += 1) {
      value[i] = trimAlignValue(value[i], _props);
      zIndices.push(i);
    }
    _this.resizeObserver = null;
    _this.resizeElementRef = import_react.default.createRef();
    _this.state = {
      index: -1,
      upperBound: 0,
      sliderLength: 0,
      value,
      zIndices
    };
    return _this;
  }
  var _proto = ReactSlider2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    if (typeof window !== "undefined") {
      this.resizeObserver = new ResizeObserver(this.handleResize);
      this.resizeObserver.observe(this.resizeElementRef.current);
      this.resize();
    }
  };
  ReactSlider2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    const value = sanitizeInValue(props.value);
    if (!value.length) {
      return null;
    }
    if (state.pending) {
      return null;
    }
    return {
      value: value.map((item) => trimAlignValue(item, props))
    };
  };
  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this.state.upperBound === 0) {
      this.resize();
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.clearPendingResizeTimeouts();
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  };
  _proto.onEnd = function onEnd(eventMap) {
    if (eventMap) {
      removeHandlers(eventMap);
    }
    if (this.hasMoved) {
      this.fireChangeEvent("onAfterChange");
    }
    this.setState({
      pending: false
    });
    this.hasMoved = false;
  };
  _proto.getValue = function getValue() {
    return prepareOutValue(this.state.value);
  };
  _proto.getClosestIndex = function getClosestIndex(pixelOffset) {
    let minDist = Number.MAX_VALUE;
    let closestIndex = -1;
    const {
      value
    } = this.state;
    const l = value.length;
    for (let i = 0; i < l; i += 1) {
      const offset = this.calcOffset(value[i]);
      const dist = Math.abs(pixelOffset - offset);
      if (dist < minDist) {
        minDist = dist;
        closestIndex = i;
      }
    }
    return closestIndex;
  };
  _proto.getMousePosition = function getMousePosition(e) {
    return [e["page" + this.axisKey()], e["page" + this.orthogonalAxisKey()]];
  };
  _proto.getTouchPosition = function getTouchPosition(e) {
    const touch = e.touches[0];
    return [touch["page" + this.axisKey()], touch["page" + this.orthogonalAxisKey()]];
  };
  _proto.getKeyDownEventMap = function getKeyDownEventMap() {
    return {
      keydown: this.onKeyDown,
      keyup: this.onKeyUp,
      focusout: this.onBlur
    };
  };
  _proto.getMouseEventMap = function getMouseEventMap() {
    return {
      mousemove: this.onMouseMove,
      mouseup: this.onMouseUp
    };
  };
  _proto.getTouchEventMap = function getTouchEventMap() {
    return {
      touchmove: this.onTouchMove,
      touchend: this.onTouchEnd
    };
  };
  _proto.getValueFromPosition = function getValueFromPosition(position) {
    const diffValue = position / (this.state.sliderLength - this.state.thumbSize) * (this.props.max - this.props.min);
    return trimAlignValue(this.state.startValue + diffValue, this.props);
  };
  _proto.getDiffPosition = function getDiffPosition(position) {
    let diffPosition = position - this.state.startPosition;
    if (this.props.invert) {
      diffPosition *= -1;
    }
    return diffPosition;
  };
  _proto.resize = function resize() {
    const {
      slider,
      thumb0: thumb
    } = this;
    if (!slider || !thumb) {
      return;
    }
    const sizeKey = this.sizeKey();
    const sliderRect = slider.getBoundingClientRect();
    const sliderSize = slider[sizeKey];
    const sliderMax = sliderRect[this.posMaxKey()];
    const sliderMin = sliderRect[this.posMinKey()];
    const thumbRect = thumb.getBoundingClientRect();
    const thumbSize = thumbRect[sizeKey.replace("client", "").toLowerCase()];
    const upperBound = sliderSize - thumbSize;
    const sliderLength = Math.abs(sliderMax - sliderMin);
    if (this.state.upperBound !== upperBound || this.state.sliderLength !== sliderLength || this.state.thumbSize !== thumbSize) {
      this.setState({
        upperBound,
        sliderLength,
        thumbSize
      });
    }
  };
  _proto.calcOffset = function calcOffset(value) {
    const range = this.props.max - this.props.min;
    if (range === 0) {
      return 0;
    }
    const ratio = (value - this.props.min) / range;
    return ratio * this.state.upperBound;
  };
  _proto.calcValue = function calcValue(offset) {
    const ratio = offset / this.state.upperBound;
    return ratio * (this.props.max - this.props.min) + this.props.min;
  };
  _proto.calcOffsetFromPosition = function calcOffsetFromPosition(position) {
    const {
      slider
    } = this;
    const sliderRect = slider.getBoundingClientRect();
    const sliderMax = sliderRect[this.posMaxKey()];
    const sliderMin = sliderRect[this.posMinKey()];
    const windowOffset = window["page" + this.axisKey() + "Offset"];
    const sliderStart = windowOffset + (this.props.invert ? sliderMax : sliderMin);
    let pixelOffset = position - sliderStart;
    if (this.props.invert) {
      pixelOffset = this.state.sliderLength - pixelOffset;
    }
    pixelOffset -= this.state.thumbSize / 2;
    return pixelOffset;
  };
  _proto.forceValueFromPosition = function forceValueFromPosition(position, callback) {
    const pixelOffset = this.calcOffsetFromPosition(position);
    const closestIndex = this.getClosestIndex(pixelOffset);
    const nextValue = trimAlignValue(this.calcValue(pixelOffset), this.props);
    const value = this.state.value.slice();
    value[closestIndex] = nextValue;
    for (let i = 0; i < value.length - 1; i += 1) {
      if (value[i + 1] - value[i] < this.props.minDistance) {
        return;
      }
    }
    this.fireChangeEvent("onBeforeChange");
    this.hasMoved = true;
    this.setState({
      value
    }, () => {
      callback(closestIndex);
      this.fireChangeEvent("onChange");
    });
  };
  _proto.clearPendingResizeTimeouts = function clearPendingResizeTimeouts() {
    do {
      const nextTimeout = this.pendingResizeTimeouts.shift();
      clearTimeout(nextTimeout);
    } while (this.pendingResizeTimeouts.length);
  };
  _proto.start = function start(i, position) {
    const thumbRef = this["thumb" + i];
    if (thumbRef) {
      thumbRef.focus();
    }
    const {
      zIndices
    } = this.state;
    zIndices.splice(zIndices.indexOf(i), 1);
    zIndices.push(i);
    this.setState((prevState) => ({
      startValue: prevState.value[i],
      startPosition: position !== void 0 ? position : prevState.startPosition,
      index: i,
      zIndices
    }));
  };
  _proto.moveUpByStep = function moveUpByStep(step) {
    if (step === void 0) {
      step = this.props.step;
    }
    const oldValue = this.state.value[this.state.index];
    const newValue = this.props.invert && this.props.orientation === "horizontal" ? oldValue - step : oldValue + step;
    const trimAlign = trimAlignValue(newValue, this.props);
    this.move(Math.min(trimAlign, this.props.max));
  };
  _proto.moveDownByStep = function moveDownByStep(step) {
    if (step === void 0) {
      step = this.props.step;
    }
    const oldValue = this.state.value[this.state.index];
    const newValue = this.props.invert && this.props.orientation === "horizontal" ? oldValue + step : oldValue - step;
    const trimAlign = trimAlignValue(newValue, this.props);
    this.move(Math.max(trimAlign, this.props.min));
  };
  _proto.move = function move(newValue) {
    const value = this.state.value.slice();
    const {
      index
    } = this.state;
    const {
      length
    } = value;
    const oldValue = value[index];
    if (newValue === oldValue) {
      return;
    }
    if (!this.hasMoved) {
      this.fireChangeEvent("onBeforeChange");
    }
    this.hasMoved = true;
    const {
      pearling,
      max,
      min,
      minDistance
    } = this.props;
    if (!pearling) {
      if (index > 0) {
        const valueBefore = value[index - 1];
        if (newValue < valueBefore + minDistance) {
          newValue = valueBefore + minDistance;
        }
      }
      if (index < length - 1) {
        const valueAfter = value[index + 1];
        if (newValue > valueAfter - minDistance) {
          newValue = valueAfter - minDistance;
        }
      }
    }
    value[index] = newValue;
    if (pearling && length > 1) {
      if (newValue > oldValue) {
        this.pushSucceeding(value, minDistance, index);
        trimSucceeding(length, value, minDistance, max);
      } else if (newValue < oldValue) {
        this.pushPreceding(value, minDistance, index);
        trimPreceding(length, value, minDistance, min);
      }
    }
    this.setState({
      value
    }, this.fireChangeEvent.bind(this, "onChange"));
  };
  _proto.pushSucceeding = function pushSucceeding(value, minDistance, index) {
    let i;
    let padding;
    for (i = index, padding = value[i] + minDistance; value[i + 1] !== null && padding > value[i + 1]; i += 1, padding = value[i] + minDistance) {
      value[i + 1] = alignValue(padding, this.props);
    }
  };
  _proto.pushPreceding = function pushPreceding(value, minDistance, index) {
    for (let i = index, padding = value[i] - minDistance; value[i - 1] !== null && padding < value[i - 1]; i -= 1, padding = value[i] - minDistance) {
      value[i - 1] = alignValue(padding, this.props);
    }
  };
  _proto.axisKey = function axisKey() {
    if (this.props.orientation === "vertical") {
      return "Y";
    }
    return "X";
  };
  _proto.orthogonalAxisKey = function orthogonalAxisKey() {
    if (this.props.orientation === "vertical") {
      return "X";
    }
    return "Y";
  };
  _proto.posMinKey = function posMinKey() {
    if (this.props.orientation === "vertical") {
      return this.props.invert ? "bottom" : "top";
    }
    return this.props.invert ? "right" : "left";
  };
  _proto.posMaxKey = function posMaxKey() {
    if (this.props.orientation === "vertical") {
      return this.props.invert ? "top" : "bottom";
    }
    return this.props.invert ? "left" : "right";
  };
  _proto.sizeKey = function sizeKey() {
    if (this.props.orientation === "vertical") {
      return "clientHeight";
    }
    return "clientWidth";
  };
  _proto.fireChangeEvent = function fireChangeEvent(event) {
    if (this.props[event]) {
      this.props[event](prepareOutValue(this.state.value), this.state.index);
    }
  };
  _proto.buildThumbStyle = function buildThumbStyle(offset, i) {
    const style = {
      position: "absolute",
      touchAction: "none",
      willChange: this.state.index >= 0 ? this.posMinKey() : void 0,
      zIndex: this.state.zIndices.indexOf(i) + 1
    };
    style[this.posMinKey()] = offset + "px";
    return style;
  };
  _proto.buildTrackStyle = function buildTrackStyle(min, max) {
    const obj = {
      position: "absolute",
      willChange: this.state.index >= 0 ? this.posMinKey() + "," + this.posMaxKey() : void 0
    };
    obj[this.posMinKey()] = min;
    obj[this.posMaxKey()] = max;
    return obj;
  };
  _proto.buildMarkStyle = function buildMarkStyle(offset) {
    var _ref;
    return _ref = {
      position: "absolute"
    }, _ref[this.posMinKey()] = offset, _ref;
  };
  _proto.renderThumbs = function renderThumbs(offset) {
    const {
      length
    } = offset;
    const styles = [];
    for (let i = 0; i < length; i += 1) {
      styles[i] = this.buildThumbStyle(offset[i], i);
    }
    const res = [];
    for (let i = 0; i < length; i += 1) {
      res[i] = this.renderThumb(styles[i], i);
    }
    return res;
  };
  _proto.renderTracks = function renderTracks(offset) {
    const tracks = [];
    const lastIndex = offset.length - 1;
    tracks.push(this.renderTrack(0, 0, offset[0]));
    for (let i = 0; i < lastIndex; i += 1) {
      tracks.push(this.renderTrack(i + 1, offset[i], offset[i + 1]));
    }
    tracks.push(this.renderTrack(lastIndex + 1, offset[lastIndex], this.state.upperBound));
    return tracks;
  };
  _proto.renderMarks = function renderMarks() {
    let {
      marks
    } = this.props;
    const range = this.props.max - this.props.min + 1;
    if (typeof marks === "boolean") {
      marks = Array.from({
        length: range
      }).map((_, key) => key);
    } else if (typeof marks === "number") {
      marks = Array.from({
        length: range
      }).map((_, key) => key).filter((key) => key % marks === 0);
    }
    return marks.map(parseFloat).sort((a, b) => a - b).map((mark) => {
      const offset = this.calcOffset(mark);
      const props = {
        key: mark,
        className: this.props.markClassName,
        style: this.buildMarkStyle(offset)
      };
      return this.props.renderMark(props);
    });
  };
  _proto.render = function render() {
    const offset = [];
    const {
      value
    } = this.state;
    const l = value.length;
    for (let i = 0; i < l; i += 1) {
      offset[i] = this.calcOffset(value[i], i);
    }
    const tracks = this.props.withTracks ? this.renderTracks(offset) : null;
    const thumbs = this.renderThumbs(offset);
    const marks = this.props.marks ? this.renderMarks() : null;
    return import_react.default.createElement("div", {
      ref: (r) => {
        this.slider = r;
        this.resizeElementRef.current = r;
      },
      style: {
        position: "relative"
      },
      className: this.props.className + (this.props.disabled ? " disabled" : ""),
      onMouseDown: this.onSliderMouseDown,
      onClick: this.onSliderClick
    }, tracks, thumbs, marks);
  };
  return ReactSlider2;
}(import_react.default.Component);
ReactSlider.displayName = "ReactSlider";
ReactSlider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  pageFn: (step) => step * 10,
  minDistance: 0,
  defaultValue: 0,
  orientation: "horizontal",
  className: "slider",
  thumbClassName: "thumb",
  thumbActiveClassName: "active",
  trackClassName: "track",
  markClassName: "mark",
  withTracks: true,
  pearling: false,
  disabled: false,
  snapDragDisabled: false,
  invert: false,
  marks: [],
  renderThumb: (props) => import_react.default.createElement("div", _extends({}, props, {
    __self: ReactSlider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 31
    }
  })),
  renderTrack: (props) => import_react.default.createElement("div", _extends({}, props, {
    __self: ReactSlider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 31
    }
  })),
  renderMark: (props) => import_react.default.createElement("span", _extends({}, props, {
    __self: ReactSlider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 30
    }
  }))
};
ReactSlider.propTypes = true ? {
  /**
   * The minimum value of the slider.
   */
  min: import_prop_types.default.number,
  /**
   * The maximum value of the slider.
   */
  max: import_prop_types.default.number,
  /**
   * Value to be added or subtracted on each step the slider makes.
   * Must be greater than zero.
   * `max - min` should be evenly divisible by the step value.
   */
  step: import_prop_types.default.number,
  /**
   * The result of the function is the value to be added or subtracted
   * when the `Page Up` or `Page Down` keys are pressed.
   *
   * The current `step` value will be passed as the only argument.
   * By default, paging will modify `step` by a factor of 10.
   */
  pageFn: import_prop_types.default.func,
  /**
   * The minimal distance between any pair of thumbs.
   * Must be positive, but zero means they can sit on top of each other.
   */
  minDistance: import_prop_types.default.number,
  /**
   * Determines the initial positions of the thumbs and the number of thumbs.
   *
   * If a number is passed a slider with one thumb will be rendered.
   * If an array is passed each value will determine the position of one thumb.
   * The values in the array must be sorted.
   */
  defaultValue: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.arrayOf(import_prop_types.default.number)]),
  /**
   * Like `defaultValue` but for
   * [controlled components](http://facebook.github.io/react/docs/forms.html#controlled-components).
   */
  // eslint-disable-next-line zillow/react/require-default-props
  value: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.arrayOf(import_prop_types.default.number)]),
  /**
   * Determines whether the slider moves horizontally (from left to right)
   * or vertically (from top to bottom).
   */
  orientation: import_prop_types.default.oneOf(["horizontal", "vertical"]),
  /**
   * The css class set on the slider node.
   */
  className: import_prop_types.default.string,
  /**
   * The css class set on each thumb node.
   *
   * In addition each thumb will receive a numbered css class of the form
   * `${thumbClassName}-${i}`, e.g. `thumb-0`, `thumb-1`, ...
   */
  thumbClassName: import_prop_types.default.string,
  /**
   * The css class set on the thumb that is currently being moved.
   */
  thumbActiveClassName: import_prop_types.default.string,
  /**
   * If `true` tracks between the thumbs will be rendered.
   */
  withTracks: import_prop_types.default.bool,
  /**
   * The css class set on the tracks between the thumbs.
   * In addition track fragment will receive a numbered css class of the form
   * `${trackClassName}-${i}`, e.g. `track-0`, `track-1`, ...
   */
  trackClassName: import_prop_types.default.string,
  /**
   * If `true` the active thumb will push other thumbs
   * within the constraints of `min`, `max`, `step` and `minDistance`.
   */
  pearling: import_prop_types.default.bool,
  /**
   * If `true` the thumbs can't be moved.
   */
  disabled: import_prop_types.default.bool,
  /**
   * Disables thumb move when clicking the slider track
   */
  snapDragDisabled: import_prop_types.default.bool,
  /**
   * Inverts the slider.
   */
  invert: import_prop_types.default.bool,
  /**
   * Shows passed marks on the track, if true it shows all the marks,
   * if an array of numbers it shows just the passed marks, if a number is passed
   * it shows just the marks in that steps: like passing 3 shows the marks 3, 6, 9
   */
  marks: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.number), import_prop_types.default.bool, import_prop_types.default.number]),
  /**
   * The css class set on the marks.
   */
  markClassName: import_prop_types.default.string,
  /**
   * Callback called before starting to move a thumb. The callback will only be called if the
   * action will result in a change. The function will be called with two arguments, the first
   * being the initial value(s) the second being thumb index.
   */
  // eslint-disable-next-line max-len
  // eslint-disable-next-line zillow/react/require-default-props, zillow/react/no-unused-prop-types
  onBeforeChange: import_prop_types.default.func,
  /**
   * Callback called on every value change.
   * The function will be called with two arguments, the first being the new value(s)
   * the second being thumb index.
   */
  // eslint-disable-next-line max-len
  // eslint-disable-next-line zillow/react/require-default-props, zillow/react/no-unused-prop-types
  onChange: import_prop_types.default.func,
  /**
   * Callback called only after moving a thumb has ended. The callback will only be called if
   * the action resulted in a change. The function will be called with two arguments, the
   * first being the result value(s) the second being thumb index.
   */
  // eslint-disable-next-line max-len
  // eslint-disable-next-line zillow/react/require-default-props, zillow/react/no-unused-prop-types
  onAfterChange: import_prop_types.default.func,
  /**
   * Callback called when the the slider is clicked (thumb or tracks).
   * Receives the value at the clicked position as argument.
   */
  // eslint-disable-next-line zillow/react/require-default-props
  onSliderClick: import_prop_types.default.func,
  /**
   * aria-label for screen-readers to apply to the thumbs.
   * Use an array for more than one thumb.
   * The length of the array must match the number of thumbs in the value array.
   */
  // eslint-disable-next-line zillow/react/require-default-props
  ariaLabel: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.arrayOf(import_prop_types.default.string)]),
  /**
   * aria-labelledby for screen-readers to apply to the thumbs.
   * Used when slider rendered with separate label.
   * Use an array for more than one thumb.
   * The length of the array must match the number of thumbs in the value array.
   */
  // eslint-disable-next-line zillow/react/require-default-props
  ariaLabelledby: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.arrayOf(import_prop_types.default.string)]),
  /**
   * aria-valuetext for screen-readers.
   * Can be a static string, or a function that returns a string.
   * The function will be passed a single argument,
   * an object with the following properties:
   *
   *     state => `Value: ${state.value}`
   *
   * - `state.index` {`number`} the index of the thumb
   * - `state.value` {`number` | `array`} the current value state
   * - `state.valueNow` {`number`} the value of the thumb (i.e. aria-valuenow)
   */
  // eslint-disable-next-line zillow/react/require-default-props
  ariaValuetext: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func]),
  /**
   * Provide a custom render function for the track node.
   * The render function will be passed two arguments,
   * an object with props that should be added to your handle node,
   * and an object with track and slider state:
   *
   *     (props, state) => <div {...props} />
   *
   * - `props` {`object`} props to be spread into your track node
   * - `state.index` {`number`} the index of the track
   * - `state.value` {`number` | `array`} the current value state
   */
  renderTrack: import_prop_types.default.func,
  /**
   * Provide a custom render function for dynamic thumb content.
   * The render function will be passed two arguments,
   * an object with props that should be added to your thumb node,
   * and an object with thumb and slider state:
   *
   *     (props, state) => <div {...props} />
   *
   * - `props` {`object`} props to be spread into your thumb node
   * - `state.index` {`number`} the index of the thumb
   * - `state.value` {`number` | `array`} the current value state
   * - `state.valueNow` {`number`} the value of the thumb (i.e. aria-valuenow)
   */
  // eslint-disable-next-line zillow/react/require-default-props
  renderThumb: import_prop_types.default.func,
  /**
   * Provide a custom render function for the mark node.
   * The render function will be passed one argument,
   * an object with props that should be added to your handle node
   *
   *     (props) => <span {...props} />
   *
   * - `props` {`object`} props to be spread into your track node
   */
  renderMark: import_prop_types.default.func
} : {};
var ReactSlider$1 = ReactSlider;
export {
  ReactSlider$1 as default
};
//# sourceMappingURL=react-slider.js.map
