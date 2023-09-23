import { IProduct } from "./product";

interface IThumbnailProps {
  product: IProduct;
  // imageUrl: string;
}

export function Thumbnail(props: IThumbnailProps) {
  const { product } = props;
  const { image } = product;

  return (
    <img
      className="p-8 rounded-t-lg h-48"
      src={product.image}
      // src={imageUrl}
      alt="product image"
    />
  );
}
