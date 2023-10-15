const page = () => {
  return (
    <>
      {[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17,
      ].map((i) => {
        return (
          <div key={i}>
            <h1>Hello</h1>
            <h2>items</h2>
          </div>
        );
      })}
    </>
  );
};

export default page;
