import { Product } from '../lib';

type Props = {
  product: Product;
};

export default function Footer({ product }: Props) {
  const { details } = product;
  return (
    <>
      <div className="footer">
        <div className="flex justify-end">
          <div className="details-info">
            <p className="text-2xl">
              The Rundown:
              <br />
              <br />
            </p>
            <p> {details}</p>
          </div>
        </div>
      </div>
    </>
  );
}
