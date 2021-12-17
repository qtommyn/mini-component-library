import React from "react";
import styled from "styled-components";

import {
  COLORS,
  PROGRESS_BAR_WIDTH,
  WRAPPER_SIZES,
  LOADING_BAR_SIZES,
} from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  const progress = (value / 100) * PROGRESS_BAR_WIDTH;
  const isComplete = progress === PROGRESS_BAR_WIDTH;

  const wrapperStyles = WRAPPER_SIZES[size];
  const loadingBarStyles = LOADING_BAR_SIZES[size];

  return (
    <Wrapper style={wrapperStyles}>
      <LoadingBar
        style={loadingBarStyles}
        progress={progress}
        isComplete={isComplete}
      ></LoadingBar>
    </Wrapper>
  );
};

export default ProgressBar;

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  width: var(--width);
  height: var(--height);
  border-radius: var(--borderRadius);
  padding: var(--padding);
`;

const LoadingBar = styled.div`
  background-color: ${COLORS.primary};
  width: ${(props) => props.progress + "px"};
  height: var(--height);
  border-radius: ${(props) => (props.isComplete ? "4px" : "4px 0px 0px 4px")};
`;
