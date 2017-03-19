import styled from 'styled-components';

const defaults = {
  gutter: 10,
  medium: 640,
  large: 1024,
  maxWidth: 1200,
};

const width = key => props => props[key] && `width: ${props[key] * 100}%;`;
const media = (key, modifier = 0) => ({ theme }) => theme[key] ? `${theme[key] - modifier}px` : `${defaults[key] - modifier}px`;
const gutter = () => ({ theme }) => theme.gutter ? `${theme.gutter}px` : `${defaults.gutter}px`;
const maxWidth = () => ({ theme, expanded }) => expanded ? 'none' : (theme.maxWidth ? `${theme.maxWidth}px` : `${defaults.maxWidth}px`);
const spacer = () => props => props.spacer ? `${props.spacer}px` : '0 ';

const RowBase = styled.div`
  max-width: ${maxWidth()};
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  margin-top: ${spacer()};
  margin-bottom: ${spacer()};

  &::before, &::after {
    box-sizing: inherit;
    display: table;
    content: ' ';
  }

  &::after {
    clear: both;
  }
`;
RowBase.displayName = 'Row';

const ColumnBase = styled.div`
  width: 100%;
  float: left;
  padding-right: ${gutter()};
  padding-left: ${gutter()};
  box-sizing: border-box;

  &::before, &::after {
    box-sizing: inherit;
  }
`;
ColumnBase.displayName = 'Column';

export const Row = styled(RowBase)`
  & & {
    margin-right: -${gutter()};
    margin-left: -${gutter()};
  }

  & & {
    ${props => props.collapse && `
      margin-right: 0;
      margin-left: 0;
    `}
  }
  
  & > ${ColumnBase} {
    ${props => props.collapse && `
      padding-right: 0;
      padding-left: 0;
    `}
  }
`;

export const Column = styled(ColumnBase)`
  /* medium and up */
  @media print, screen and (min-width: ${media('medium')}) {
    & {
      //padding-right: ${gutter()};
      //padding-left: ${gutter()};
    }
  }
  
  &:last-child:not(:first-child), &:last-child:not(:first-child) {
    float: right;
  }
  
  &${Row}${Row}, ${Row}${Row}& {
    float: none;
  }
  
  ${Row} &${Row}${Row}, ${Row} ${Row}${Row}& {
    margin-right: 0;
    margin-left: 0;
    padding-right: 0;
    padding-left: 0;
  }

  /* small only */
  @media print, screen and (max-width: ${media('medium', 1)}) {
    ${width('small')}
  }

  /* medium and up */
  @media print, screen and (min-width: ${media('medium')}) {
    ${width('medium')}
  }

  /* large and up */
  @media print, screen and (min-width: ${media('large')}) {
    ${width('large')}
  }
`;

export const Panel = styled.div`
  border: 1px solid grey;
  color: grey;
  border-radius: 2px;
  margin: 5px 0;
  line-height: 32px;
  text-align: center;
`;
Panel.displayName = 'Panel';

export default { Row, Column, Panel };
