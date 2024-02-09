import Image from 'next/image';
import Calculator from './calculator';

const Main = () => {
  return (
    <main className="w-full">
      <div className="relative bg-[url('/fone.jpg')] w-full bg-no-repeat bg-cover overflow-hidden bg-center m-auto lg:h-[700px] sm:h-[500px] h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/80 flex flex-row">
          <div className="flex flex-col gap-8 w-3/5 md:px-[120px] sm:px-16 px-4 mt-8">
            <h1 className="text-6xl font-bold">
              Бухгалтерское
              <br />
              сопровождение
            </h1>
            <div className="text-5xl font-bold">
              от{' '}
              <div className="text-white bg-[#6CAC3D] rounded p-1 inline text-6xl">
                4500
              </div>{' '}
              руб / квартал
            </div>
            <div className="grid grid-cols-2 gap-4 text-lg font-bold mt-16 ">
              <div>
                <Image
                  src="/talk_8167197.png"
                  alt="иконка бесплатная консультация"
                  width={60}
                  height={60}
                />
                Бесплатная консультация
              </div>
              <div>
                <Image
                  src="/writing_8167235.png"
                  alt="иконка заключение договора"
                  width={60}
                  height={60}
                />
                Заключение договора
              </div>
              <div>
                <Image
                  src="/human.png"
                  alt="иконка кадровое сопровождение"
                  width={60}
                  height={60}
                />
                Кадровое сопровождение
              </div>
              <div>
                <Image
                  src="/garantie.png"
                  alt="иконка гарантия качества услуг"
                  width={60}
                  height={60}
                />
                Гарантия качества услуг
              </div>
            </div>
          </div>
          <Calculator />
        </div>
      </div>
    </main>
  );
};

export default Main;