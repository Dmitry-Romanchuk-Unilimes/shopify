import { getProductsInCollection } from '../lib/shopify'

export default function Home({ products }) {
  console.log(products);
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products }
  }
}