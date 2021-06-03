import React from 'react';
import HornedBeast from './HornedBeast';
class Main extends React.Component {
  render() {
    return (
 <>
          {this.props.Data.map((item, index) => {
            return (
              <HornedBeast
                title={item.title}
                imageUrl={item.image_url}
                descreption={item.description}
                hornsCount={item.horns}
                key={index}
                displayAniml={this.props.displayAniml}
              />
            )
          })
          }
</>
    )
  }
}
export default Main;