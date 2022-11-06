import { Footer } from "../footer/footer";
import { Navbar } from "../navbar/navbar";

export const Template = ({ title }) => (
  <div className="tcontainer mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
    <Navbar />

    <div className="h-32 md:h-40"></div>

    <p className="font-sans text-4xl font-bold text-gray-900 max-w-5xl lg:text-7xl lg:pr-24 md:text-6xl">
      { title }
    </p>
    <div className="h-10"></div>
    <p className="max-w-2xl font-serif text-xl text-gray-600 md:text-2xl">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam autem, a
      recusandae vero praesentium qui impedit doloremque molestias
      necessitatibus.
    </p>

    <div className="h-32 md:h-40"></div>

    <div className="grid gap-8 md:grid-cols-2">
      <div className="flex flex-col justify-center">
        <p className="self-start inline font-sans text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-600">
          Lorem ipsum dolor
        </p>
        <h2 className="text-4xl font-bold">Lorem ipsum dolor</h2>
        <div className="h-6"></div>
        <p className="font-serif text-xl text-gray-600 md:pr-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
          autem, a recusandae vero praesentium qui impedit doloremque molestias
          necessitatibus.
        </p>
        <div className="h-8"></div>
        <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-800">
          <div>
            <p className="font-semibold text-gray-600">Lorem ipsum dolor</p>
            <div className="h-4"></div>
            <p className="font-serif text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              labor.
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-600">Lorem ipsum dolor</p>
            <div className="h-4"></div>
            <p className="font-serif text-gray-600">
              Ipsum dolor sit, amet consectetur adipisicing elit. Delectus amet
              consectetur.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="-mr-24 rounded-lg md:rounded-l-full bg-gradient-to-br from-gray-900 to-black h-96"></div>
      </div>
    </div>

    <div className="h-32 md:h-40"></div>

    <p className="font-serif text-4xl">
      <span className="text-gray-600">Lorem ipsum dolor</span>

      <span className="text-gray-600">
        consectetur adipisicing elit. Consectetur atque molestiae omnis
        excepturi enim!
      </span>
    </p>

    <div className="h-32 md:h-40"></div>

    <div className="grid gap-4 md:grid-cols-3">
      <div className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-br from-gray-900 to-black">
        <p className="flex items-center justify-center text-4xl font-semibold text-green-400 bg-green-800 rounded-full shadow-lg w-14 h-14">
          1
        </p>
        <div className="h-6"></div>
        <p className="text-white font-serif text-3xl">Lorem ipsum dolor</p>
      </div>
      <div className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-b from-gray-900 to-black">
        <p className="flex items-center justify-center text-4xl font-semibold text-indigo-400 bg-indigo-800 rounded-full shadow-lg w-14 h-14">
          2
        </p>
        <div className="h-6"></div>
        <p className="text-white font-serif text-3xl">Lorem ipsum dolor</p>
      </div>
      <div className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-bl from-gray-900 to-black">
        <p className="text-white flex items-center justify-center text-4xl font-semibold text-teal-400 bg-teal-800 rounded-full shadow-lg w-14 h-14">
          3
        </p>
        <div className="h-6"></div>
        <p className="text-white font-serif text-3xl">Lorem ipsum dolor</p>
      </div>
    </div>

    <div className="h-40"></div>

    <div className="grid gap-8 md:grid-cols-3">
      <div className="flex flex-col justify-center md:col-span-2">
        <p className="self-start inline font-sans text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-teal-600">
          Lorem ipsum dolor
        </p>
        <h2 className="text-4xl font-bold">Lorem ipsum dolor</h2>
        <div className="h-6"></div>
        <p className="font-serif text-xl text-gray-600 md:pr-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
          autem, a recusandae vero praesentium qui impedit doloremque molestias.
        </p>
        <div className="h-8"></div>
        <div className="grid gap-6 pt-8 border-t border-gray-800 lg:grid-cols-3">
          <div>
            <p className="font-semibold text-gray-600">Lorem ipsum dolor</p>
            <div className="h-4"></div>
            <p className="font-serif text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              labor.
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-600">Lorem ipsum dolor</p>
            <div className="h-4"></div>
            <p className="font-serif text-gray-600">
              Ipsum dolor sit, amet consectetur adipisicing elit. Delectus amet
              consectetur.
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-600">Lorem ipsum dolor</p>
            <div className="h-4"></div>
            <p className="font-serif text-gray-600">
              Ipsum dolor sit, amet consectetur adipisicing elit. Delectus amet
              consectetur.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="-mr-24 rounded-lg md:rounded-l-full bg-gradient-to-br from-gray-900 to-black h-96"></div>
      </div>
    </div>

    <div className="h-10 md:h-40"></div>

    <Footer />
  </div>
);
