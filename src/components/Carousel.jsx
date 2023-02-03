import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
        <img
          className="max-w-[100%]  max-h-[400px] rounded-lg shadow-2xl border-pink border-2"
          src={images[active]}
          alt="animal"
        />
        <div className=" flex justify-center mx-auto items-center p-4 overflow-x-auto">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              className={
                index === active
                  ? "border-pink border-2 cursor-pointer w-24 h-24 rounded-lg shadow-lg"
                  : "opacity-60 cursor-pointer w-20 h-20 rounded-lg m-4"
              }
              alt="animal thumbnail"
              onClick={this.handleIndexClick}
              data-index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
