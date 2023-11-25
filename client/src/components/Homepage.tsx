import { Catalog } from '../pages/Catalog';
import Footer from './Footer';
import HeaderPics from './HeaderPics';

type Props = {
  search: string;
};

export default function Homepage({ search }: Props) {
  console.log('Hompage');
  return (
    <>
      <HeaderPics />
      <Catalog text="Featured" featured={true} search={search} />
      <Footer />
    </>
  );
}
