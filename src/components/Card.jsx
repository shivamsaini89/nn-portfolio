import PropTypes from "prop-types";

export default function Card(props) {
  return (
    <div className="relative w-full max-w-8xl h-full rounded-2xl overflow-hidden">
      <img className="h-full w-full" src={props.image} alt="image" />
      <p className="absolute bottom-4 left-4 text-white text-lg">
        {props.name}
      </p>
      <div className="absolute top-2 md:top-4 -right-7 md:right-4 flex gap-2 whitespace-nowrap scale-60 md:scale-100">
        <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
          {props.tag}
        </span>
        <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
          {props.type}
        </span>
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  type: PropTypes.string,
};
