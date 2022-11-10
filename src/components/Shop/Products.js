import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="Product 1"
          price={6}
          description="This is a 1st product - amazing!"
        />
      </ul>
    </section>
  );
};

export default Products;
