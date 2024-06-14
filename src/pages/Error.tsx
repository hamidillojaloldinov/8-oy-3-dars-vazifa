import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error:any = useRouteError();
  if (error.status == 404) {
    return (
      <>
        <header>
        </header>
        <main className="grid min-h-[51.8vh] place-items-center px-8">
          <div className="text-center">
            <p className="text-9xl font-semibold text-primary">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
              page not found
            </h1>
            <p className="mt-6 text-lg leading-7">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10">
              <Link to="/">
                <button className="btn text-white hover:bg-[#4C4C4C] w-40 h-12 bg-black border-none rounded-lg">
                  go back home
                </button>
              </Link>
            </div>
          </div>
        </main>
      </>
    );
    return (
      <>
        <main className="grid min-h-[51.8vh] place-items-center px-8">
          <h4 className="text-center text-bold text-4x1">
            there was an error...
          </h4>
          <div className="mt-10">
            <Link to="/">
              <button className="btn text-white hover:bg-[#4C4C4C] w-40 h-12 bg-black border-none rounded-lg">
                go back home
              </button>
            </Link>
          </div>
        </main>
      </>
    );
  }
}

export default Error;
