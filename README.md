# react-styled-grid
A fluid grid system based on styled-components and foundation that uses `Row` and `Column` approach

## Getting Started

```sh
npm install react-styled-grid
```

```js
import React from 'react';
import { Row, Column, Panel } from 'react-styled-grid';

const App = () => (
  <div>
    <Row spacer={20}>
      <Column><h1>Responsive Grids</h1></Column>

      <Column small={6/12} medium={4/12} large={3/12}><Panel>column</Panel></Column>
      <Column small={6/12} medium={4/12} large={3/12}><Panel>column</Panel></Column>
      <Column small={6/12} medium={4/12} large={3/12}><Panel>column</Panel></Column>
      <Column small={6/12} medium={4/12} large={3/12}><Panel>column</Panel></Column>
      <Column small={6/12} medium={4/12} large={3/12}><Panel>column</Panel></Column>
      <Column small={6/12} medium={4/12} large={3/12}><Panel>column</Panel></Column>
      <Column small={6/12} medium={4/12} large={3/12}><Panel>column</Panel></Column>
      <Column small={6/12} medium={4/12} large={3/12}><Panel>column</Panel></Column>
      <Column small={6/12} medium={4/12} large={3/12}><Panel>column</Panel></Column>
      <Column small={6/12} medium={4/12} large={3/12}><Panel>column</Panel></Column>
      <Column small={6/12} medium={4/12} large={3/12}><Panel>column</Panel></Column>
      <Column small={6/12} medium={4/12} large={3/12}><Panel>column</Panel></Column>
    </Row>

    <Row spacer={20}>
      <Column><h1>Nested Grids</h1></Column>

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
        <Row>
          <Column medium={3/12}><Panel>col</Panel></Column>
          <Column medium={3/12}><Panel>col</Panel></Column>
          <Column medium={3/12}><Panel>col</Panel></Column>
          <Column medium={3/12}><Panel>col</Panel></Column>
        </Row>
      </Column>
    </Row>

    <Row spacer={20}>
      <Column><h1>12 Column Grid</h1></Column>

      <Column small={1/12} medium={1/12} large={1/12}><Panel>1</Panel></Column>
      <Column small={11/12} medium={11/12} large={11/12}><Panel>11</Panel></Column>

      <Column small={2/12} medium={2/12} large={2/12}><Panel>2</Panel></Column>
      <Column small={10/12} medium={10/12} large={10/12}><Panel>10</Panel></Column>

      <Column small={3/12} medium={3/12} large={3/12}><Panel>3</Panel></Column>
      <Column small={9/12} medium={9/12} large={9/12}><Panel>9</Panel></Column>

      <Column small={4/12} medium={4/12} large={4/12}><Panel>4</Panel></Column>
      <Column small={8/12} medium={8/12} large={8/12}><Panel>8</Panel></Column>

      <Column small={5/12} medium={5/12} large={5/12}><Panel>5</Panel></Column>
      <Column small={7/12} medium={7/12} large={7/12}><Panel>7</Panel></Column>

      <Column small={6/12} medium={6/12} large={6/12}><Panel>6</Panel></Column>
      <Column small={6/12} medium={6/12} large={6/12}><Panel>6</Panel></Column>

      <Column small={7/12} medium={7/12} large={7/12}><Panel>7</Panel></Column>
      <Column small={5/12} medium={5/12} large={5/12}><Panel>5</Panel></Column>

      <Column small={8/12} medium={8/12} large={8/12}><Panel>8</Panel></Column>
      <Column small={4/12} medium={4/12} large={4/12}><Panel>4</Panel></Column>

      <Column small={9/12} medium={9/12} large={9/12}><Panel>9</Panel></Column>
      <Column small={3/12} medium={3/12} large={3/12}><Panel>3</Panel></Column>

      <Column small={10/12} medium={10/12} large={10/12}><Panel>10</Panel></Column>
      <Column small={2/12} medium={2/12} large={2/12}><Panel>2</Panel></Column>

      <Column small={11/12} medium={11/12} large={11/12}><Panel>11</Panel></Column>
      <Column small={1/12} medium={1/12} large={1/12}><Panel>1</Panel></Column>

      <Column><Panel>12</Panel></Column>
    </Row>
  </div>
)

export default App
```

## Row Props

- `spacer`: (number) margin-top and margin-bottom

## Column Props

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
