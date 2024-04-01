export default function Store() {
  return (
    <section>
      {/* profile */}
      <div>
        <div>
          <img src="/images/store/banner.jpg" alt="" className="w-full h-48" />
        </div>
        <div className="container">
          <div className="flex justify-between">
            <div className="flex items-start gap-4">
              <div>
                <img
                  src="/public/images/store/logo.jpg"
                  alt=""
                  className="w-40 h-40 rounded-full shadow border -mt-14"
                />
              </div>

              <div className="pt-5">
                <h1 className="text-2xl text-neutral font-medium">
                  Shopping Hobe
                </h1>
                <div className="mt-1 flex items-center gap-4 text-neutral-content text-[13px]">
                  <div className="flex items-center gap-1 border-r pr-4">
                    <p>Likes (0)</p>
                  </div>
                  <div className="flex items-center gap-1 border-r pr-4">
                    <p>Follows (0)</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <p>Ratings (0)</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button className="primary_btn">+ Follow</button>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="mt-5">
        <div className="container">
          <div className="flex justify-between sm:items-center border-b pb-1 border-primary">
            <h1 className="md:text-lg font-medium md:font-semibold text-neutral">
              All Products
            </h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-1"></div>
        </div>
      </div>
    </section>
  );
}
