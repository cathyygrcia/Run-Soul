type Props = {
  text: string;
};

export default function ShoeDisplay({ text }: Props) {
  return (
    <>
      <h1>{text}</h1>
      <div className="flex items-center">
        <div className="display"></div>
        <div className="display"></div>
        <div className="display"></div>
      </div>
    </>
  );
}
