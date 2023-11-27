import { Catalog } from '../pages/Catalog';
import HeaderPics from './HeaderPics';

type Props = {
  search: string;
};

export default function Homepage({ search }: Props) {
  console.log('Hompage');
  return (
    <>
      <HeaderPics />
      <Catalog text="Featured Collection" featured={true} search={search} />
    </>
  );
}
