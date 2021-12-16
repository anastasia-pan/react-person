import "./styles.css";
import news1 from "./images/news1.jpg";
import news2 from "./images/news2.jpg";
import news3 from "./images/news3.jpg";

const BBC = () => {
  return (
    <div>
      <div class="newsbox">
        <Box
          image={news1}
          heading="I am heading 1"
          blurb="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."
        />
        <Box
          image={news2}
          heading="I am heading 2"
          blurb="Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. "
        />
        <Box
          image={news3}
          heading="I am heading 3"
          blurb="Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        />
        <Box
          image={news1}
          heading="I am heading 4"
          blurb="Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        />
      </div>
    </div>
  );
};

const Box = ({ image, heading, blurb }) => {
  return (
    <div class="individualBox">
      <img src={image} />
      <Heading heading={heading} />
      <Blurb blurb={blurb} />
    </div>
  );
};

const Heading = (props) => {
  return (
    <div>
      <h2>{props.heading}</h2>
    </div>
  );
};

const Blurb = (props) => {
  return (
    <div>
      <h3>{props.blurb}</h3>
    </div>
  );
};

export default BBC;
