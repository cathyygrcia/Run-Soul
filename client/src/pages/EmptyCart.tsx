import { Catalog } from './Catalog';

type Props = {
  search: string;
};

export function EmptyCart({ search }: Props) {
  return (
    <>
      <div>
        <div className="empty-container">
          <h1 className="white text-3xl">Your Cart is Empty</h1>
        </div>
      </div>
      <Catalog
        text="Shop Featured Collection"
        featured={true}
        search={search}
      />
    </>
  );
}
