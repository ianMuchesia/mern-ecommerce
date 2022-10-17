import data from "./data";

function App() {
  return (
    <div className="App">
      <header
        className="bg-[#403493] p-4
      "
      >
        <a href="/" className="text-[#F9F7F3] font-bold no-underline">
          WCC
        </a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="flex flex-wrap">
          {data.products.map((product) => (
            <div key={product.slug} className="border border-black">
              <img
                src={product.image}
                alt={product.name}
                className="md:h-[480px] md:w-64  md:m- h-48 w-24"
              />
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
