import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0, // Изначально первая картинка
        };
    }

    goToNext = () => {
        this.setState((prevState) => ({
            currentIndex: (prevState.currentIndex + 1) % this.props.images.length,
        }));
    };

    goToPrev = () => {
        this.setState((prevState) => ({
            currentIndex: (prevState.currentIndex - 1 + this.props.images.length) % this.props.images.length,
        }));
    };

    render() {
        const { images } = this.props;
        const { currentIndex } = this.state;

        return (
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={cn('carousel-item', { active: index === currentIndex })}
                        >
                            <img alt="" className="d-block w-100" src={image} />
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    data-bs-target="#carousel"
                    data-bs-slide="prev"
                    type="button"
                    onClick={this.goToPrev}
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    data-bs-target="#carousel"
                    data-bs-slide="next"
                    type="button"
                    onClick={this.goToNext}
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        );
    }
}

export default Carousel;
// END
