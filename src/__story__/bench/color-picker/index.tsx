import * as React from 'react';
import {SketchPicker} from 'react-color';
const Color = require('color');

export class BenchColorPicker extends React.Component<any, any> {
  state = {
    rgb: {r: 0, g: 125, b: 255, a: 1},
  };

  onChange = ({rgb}) => {
    this.setState({rgb});
  };

  darken(rgb, amount = 0.3) {
    const color = Color(rgb).darken(amount);
    const [r, g, b] = color.rgb().color;
    return {r, g, b};
  }

  lighten(rgb, amount = 0.3) {
    const color = Color(rgb).lighten(amount);
    const [r, g, b] = color.rgb().color;
    return {r, g, b};
  }

  render() {
    const {a, ...rgb} = this.state.rgb;
    const base = rgb;
    const Cell = this.props.Cell;

    const cells: any[] = [];
    for (let i = 0; i < 20; i++) {
      const color = this.darken(base, i * .02);
      const hover = this.darken(color);
      const active = this.lighten(color);
      cells.push(<Cell key={i} color={color} hover={hover} active={active} />);
    }


    return (
      <div>
        <SketchPicker color={this.state.rgb} onChange={this.onChange} />
        <div style={{width: '100%', overflow: 'hidden'}}>
          {cells}
        </div>
      </div>
    );
  }
}