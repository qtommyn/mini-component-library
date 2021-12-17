/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const PROGRESS_BAR_WIDTH = 370;

const SIZES = {
  small: {
    "--height": "8px",
    "--padding": "initial",
  },
  medium: {
    "--height": "12px",
    "--padding": "initial",
  },
  large: {
    "--height": "24px",
    "--padding": "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  const progress = (value / 100) * PROGRESS_BAR_WIDTH;
  const isComplete = progress === PROGRESS_BAR_WIDTH;

  const styles = SIZES[size];

  return (
    <Wrapper style={styles}>
      <LoadingBar progress={progress} isComplete={isComplete}></LoadingBar>
    </Wrapper>
  );
};

export default ProgressBar;

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  width: 370px;
  height: var(--height);
  border-radius: 4px;
  padding: 4px;
  position: relative;
`;

const LoadingBar = styled.div`
  background-color: ${COLORS.primary};
  width: ${(props) => props.progress + "px"};
  height: 16px;
  /* padding: 4px; */
  border-radius: ${(props) => (props.isComplete ? "4px" : "4px 0px 0px 4px")};
  /* position: relative;
  top: 4px;
  left: 4px; */
`;
