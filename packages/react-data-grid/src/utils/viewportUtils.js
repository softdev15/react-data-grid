function getGridState(props) {
  const canvasHeight = props.minHeight - props.rowOffsetHeight;
  return {
    height: canvasHeight,
    scrollTop: 0,
    scrollLeft: 0
  };
}

function getNextScrollState(scrollTop, scrollLeft, height) {
  const isScrolling = true;

  const nextScrollState = {
    height,
    scrollTop,
    scrollLeft,
    isScrolling
  };

  return nextScrollState;
}

export {
  getGridState,
  getNextScrollState
};
