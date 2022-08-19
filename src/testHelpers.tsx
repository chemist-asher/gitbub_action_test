import React, { ReactNode } from "react";
import { render, RenderResult } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { createAuiTheme } from "@ample-labs/ample-ui";

/* eslint-disable import/prefer-default-export */
export const renderWithTheme = (component: ReactNode): RenderResult => {
  return render(
    <ThemeProvider theme={createAuiTheme({})}>{component}</ThemeProvider>
  );
};
