export default function Home() {
  return (
    <>
      <div className="flex h-screen">
        <aside className="fixed left-0 top-0 h-full bg-gray-700 text-white p-4">
          {/* Sidebar content goes here */}
          <h1>sidebar</h1>
        </aside>
        <div className="flex flex-col flex-1 overflow-hidden">
          <header className="fixed top-0 w-full bg-gray-800 text-white p-4">
            {/* Header content goes here */}
            <h1>header</h1>
          </header>
          <div className="flex">
            <main className="flex-1 overflow-y-auto p-4">
              {/* Main content goes here */}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map(
                (i) => {
                  return (
                    <div key={i} className="w-full bg-red-500">
                      <h1>Hello</h1>
                      <h2>items</h2>
                    </div>
                  );
                }
              )}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
