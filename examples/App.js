import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Row, Column, Panel } from '../src/Grid';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={{ gutter: 10, medium: 640, large: 1024, maxWidth: 1200 }}>
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

            <Column small={12/12} medium={12/12} large={12/12}><Panel>12</Panel></Column>
          </Row>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
