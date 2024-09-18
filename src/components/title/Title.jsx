import { Helmet } from "react-helmet-async";

const Title = ({ title }) => {
  return (
    <Helmet>
      <title>ecommerce | {title}</title>
      <link rel="ecommerce" href="../../assets/logo-22.png" />
    </Helmet>
  );
};

export default Title;
