import React from "react";
import styled from "styled-components";

import {
  COLORS,
  PROGRESS_BAR_MAX_WIDTH,
  WRAPPER_SIZES,
  LOADING_BAR_SIZES,
} from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  const progress = (value / 100) * PROGRESS_BAR_MAX_WIDTH;
  const isComplete = progress === PROGRESS_BAR_MAX_WIDTH;

  const wrapperStyles = WRAPPER_SIZES[size];
  const loadingBarStyles = LOADING_BAR_SIZES[size];

  return (
    <Wrapper style={wrapperStyles}>
      <LoadingBar
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={PROGRESS_BAR_MAX_WIDTH}
        style={loadingBarStyles}
        progress={progress}
        isComplete={isComplete}
      ></LoadingBar>
    </Wrapper>
  );
};

export default ProgressBar;

const Wrapper = styled.div`
  width: var(--width);
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
`;

const LoadingBar = styled.div`
  background-color: ${COLORS.primary};
  width: ${(props) => props.progress + "px"};
  height: var(--height);
  border-radius: ${(props) => (props.isComplete ? "4px" : "4px 0px 0px 4px")};
`;
