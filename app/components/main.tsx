import Image from 'next/image';
import Calculator from './calculator';
import Link from 'next/link';

const Main = () => {
  return (
    <main className="w-full">
      <div className="relative z-0 bg-[url('/fone.jpg')] w-full bg-no-repeat bg-cover bg-center m-auto lg:h-[700px] sm:h-[500px] h-[400px]">
        <div className="absolute z-20 bottom-0 right-0 text-white">
          Image by{' '}
          <Link href="https://www.freepik.com/free-photo/top-view-desk-minimal-glasses-calculator_11068531.html">
            Freepik
          </Link>
        </div>
        <div className="absolute z-10 inset-0 bg-gradient-to-l from-transparent to-white/80 flex lg:flex-row flex-col">
          <div className="flex flex-col gap-10 lg:w-3/5 w-10/12 md:px-[120px] sm:px-16 px-4 mt-8">
            <h1 className="lg:text-6xl sm:text-5xl text-3xl font-bold">
              Бухгалтерское
              <br />
              сопровождение
            </h1>
            <div className="lg:text-5xl sm:text-4xl text-2xl font-bold shrink-0">
              от{' '}
              <div className="text-white bg-[#6CAC3D] rounded p-1 inline lg:text-6xl sm:text-5xl text-3xl">
                4500
              </div>{' '}
              руб / квартал
            </div>
            <div className="md:grid md:grid-cols-2 sm:flex sm:flex-1 grid grid-cols-2 gap-4 text-base font-bold">
              <div>
                <Image
                  src="/talk_8167197.png"
                  alt="Icon by IconBaandar"
                  width={60}
                  height={60}
                  rel="https://www.freepik.com/icon/talk_8167197#fromView=search&term=consultation&track=ais&page=1&position=0"
                />
                <p>Бесплатная консультация</p>
                
              </div>
              <div>
                <Image
                  src="/writing_8167235.png"
                  alt="Icon by IconBaandar"
                  width={60}
                  height={60}
                  rel="https://www.freepik.com/icon/writing_8167235#fromView=resource_detail&position=0"
                />
                <p>Заключение договора</p>
                
              </div>
              <div>
                <Image
                  src="/human.png"
                  alt="Icon by IconBaandar"
                  width={60}
                  height={60}
                  rel="https://www.freepik.com/icon/laptop_8167033#fromView=resource_detail&position=28"
                />
                <p>Кадровое сопровождение</p>
              </div>
              <div>
                <Image
                  src="/garantie.png"
                  alt="Icon by IconBaandar"
                  width={60}
                  height={60}
                  rel="https://www.freepik.com/icon/cv_5868094#fromView=search&term=garantie&track=ais&page=1&position=56"
                />
                <p>Гарантия качества услуг</p>
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
