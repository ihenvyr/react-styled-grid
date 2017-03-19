# react-styled-grid
A responsive fluid grid system built with [styled-components](https://github.com/styled-components/styled-components) that uses `Row` and `Column` approach

## Getting Started

```sh
npm install react-styled-grid
```

```js
import React from 'react';
import { Row, Column, Panel } from 'react-styled-grid';

const App = () => (
  <Row spacer={20}>
    <Column medium={4/12}>
      <Row>
        <Column medium={6/12}><Panel>col</Panel></Column>
        <Column medium={6/12}>
          <Row>
            <Column medium={6/12}><Panel>col</Panel></Column>
            <Column medium={6/12}><Panel>col</Panel></Column>
          </Row>
        </Column>
      </Row>
    </Column>
    <Column medium={4/12}><Panel>col</Panel></Column>
    <Column medium={4/12}>
      <Row collapse>
        <Column medium={3/12}><Panel>col</Panel></Column>
        <Column medium={3/12}><Panel>col</Panel></Column>
        <Column medium={3/12}><Panel>col</Panel></Column>
        <Column medium={3/12}><Panel>col</Panel></Column>
      </Row>
    </Column>
  </Row>
)

export default App
```

## Row

- `spacer`: (number) margin-top and margin-bottom
- `expanded`: completely fluid (by default, a row is always 1200 pixels wide)
- `collapse`: remove gutter on all devices

## Column

- `small`: (number) width as a fraction for the small breakpoint and up
- `medium`: (number) width as a fraction for the medium breakpoint and up
- `large`: (number) width as a fraction for the large breakpoint and up

## Panel

- It's just helper to properly visualize the column content :)

## Theming

React Styled Grid has defaults, but to customize the values,
use styled-components `ThemeProvider` component.

```js
import React from 'react';
import { Row, Column, Panel } from 'react-styled-grid';
import { ThemeProvider } from 'styled-components';

const App = () => (
  <ThemeProvider
    theme={{ gutter: 20, medium: 640, large: 1024, maxWidth: 1200 }}>
    <Row spacer={20}>
      <Column medium={6/12} large={3/12}><Panel>Column</Panel></Column>
      <Column medium={6/12} large={3/12}><Panel>Column</Panel></Column>
      <Column medium={6/12} large={3/12}><Panel>Column</Panel></Column>
      <Column medium={6/12} large={3/12}><Panel>Column</Panel></Column>
    </Row>
  </ThemeProvider>
)
```

### Gutter

All Column components have `10` pixels left and right padding.
To customize the column gutter, pass a number to `theme.gutter` with the ThemeProvider component.

### Max Width

Outer Row's width which is by default has a value of `1200` pixels.
To customize the outer-most row max-width, pass a number to `theme.maxWidth` with the ThemeProvider component.

### Breakpoints

Column components use a mobile-first responsive approach,
where any value set works from that breakpoint and wider.
Breakpoints are hard-coded to the following min-widths for medium: `640` and large: `1024` in pixels.
Lower than medium will automatically fallback to small.

To customize the breakpoints, pass a number to `theme.medium` and `theme.large` with the ThemeProvider component.


MIT License
