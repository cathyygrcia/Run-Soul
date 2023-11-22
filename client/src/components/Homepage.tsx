import HeaderPics from './HeaderPics';
import ShoeDisplay from './ShoeDisplay';

export default function Homepage() {
  console.log('Hompage');
  return (
    <>
      <HeaderPics />
      <ShoeDisplay text="Featured" />
    </>
  );
}
