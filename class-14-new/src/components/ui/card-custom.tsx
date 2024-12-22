export default function CustomCard(props: any) {
  return (
    <div className="bg-gray-800 rounded h-[250px] w-[45vw] m-3">
      {props.name}
      <img src={`${props.url}`} />
    </div>
  );
}
