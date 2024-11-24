export default async function Blog() {
  let data = await (await fetch("http://localhost:3001/api/blog")).json();

  return (
    <div className="text-red w-[100vw] h-[100vh]">
      <h1 className="text-3xl text-red-700">Blog</h1>
      {data.map((blog: any, index: number) => (
        <p>{blog.title}</p>
      ))}
    </div>
  );
}
