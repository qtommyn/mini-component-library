import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const PROGRESS_BAR_WIDTH = 370;

const WRAPPER_SIZES = {
  small: {
    "--height": "8px",
    "--width": `${PROGRESS_BAR_WIDTH}px`,
    "--padding": "initial",
  },
  medium: {
    "--height": "12px",
    "--width": `${PROGRESS_BAR_WIDTH}px`,
    "--padding": "initial",
  },
  large: {
    "--height": "24px",
    "--width": `${PROGRESS_BAR_WIDTH + 8}px`,
    "--padding": "4px",
  },
};

const LOADING_BAR_SIZES = {
  small: {
    "--height": "8px",
  },
  medium: {
    "--height": "12px",
  },
  large: {
    "--height": "16px",
  },
};

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
  border-radius: 4px;
  padding: var(--padding);
  position: relative;
`;

const LoadingBar = styled.div`
  background-color: ${COLORS.primary};
  width: ${(props) => props.progress + "px"};
  height: var(--height);
  border-radius: ${(props) => (props.isComplete ? "4px" : "4px 0px 0px 4px")};
`;
