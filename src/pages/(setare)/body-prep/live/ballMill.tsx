import React from 'react'
import ballMillImg from '@/images/icons/body-prep.webp'
import motorImg from '@/images/icons/motor.webp'
import offImg from '@/images/icons/switch-off.webp'
import onImg from '@/images/icons/switch-on.webp'

const ballMillList = [
  {
    label: 'بالمیل بچ',
    data: [
      {
        label: 'بالمیل 1',
        status: 'on',
        currentConsumption: '120 A',
      },
      {
        label: 'بالمیل 2',
        status: 'off',
        currentConsumption: '0 A',
      },
      {
        label: 'بالمیل 3',
        status: 'on ',
        currentConsumption: '240 A',
      },
      {
        label: 'بالمیل 4',
        status: 'no-data',
        currentConsumption: '0 A',
      },
      {
        label: 'بالمیل 5',
        status: 'on',
        currentConsumption: '233 A',
      },
      {
        label: 'بالمیل 6',
        status: 'off',
        currentConsumption: '0 A',
      },
      {
        label: 'بالمیل 7',
        status: 'on',
        currentConsumption: '243 A',
      },
      {
        label: 'بالمیل 8',
        status: 'on',
        currentConsumption: '213 A',
      },
    ],
  },
  {
    label: 'بالمیل کانتینیوز',
    data: [
      {
        label: 'بالمیل 1',
        status: 'on',
        currentConsumption: '245 A',
      },
      {
        label: 'بالمیل 2',
        status: 'on',
        currentConsumption: '145 A',
      },
    ],
  },
  {
    label: 'بالمیل مدولار',
    data: [
      {
        label: 'بالمیل 1',
        status: 'on',
        currentConsumption: '245 A',
      },
    ],
  },
]

export default function BallMill() {
  return (
    <div // ball-mill live root
    >
      <header // ball-mill main header
        className='flex flex-wrap items-center justify-center gap-4 p-4 sm:justify-normal'
      >
        <img // ball-mill img
          src={ballMillImg}
          alt='بالمیل'
          className='h-20 w-auto object-contain'
        />
        <h1 className='text-2xl font-bold'>تهیه بدنه</h1>
      </header>
      <section className='flex flex-col gap-8 rounded-lg bg-slate-100/50 p-3 shadow-lg'>
        {ballMillList.map(ballMill => (
          <article key={ballMill.label} className='flex flex-col gap-2'>
            <h2 className='px-3 text-xl font-bold'>{ballMill.label}</h2>
            <div // all cards container
              className='flex flex-wrap items-center justify-start'
            >
              {ballMill.data.map(data => (
                <dl // card container
                  key={data.label}
                  className='flex-[0_0_100%] p-2 md:flex-[0_0_50%] xl:flex-[0_0_33.3%] 2xl:flex-[0_0_25%]'
                >
                  <div className='flex flex-col gap-4 rounded-lg bg-slate-100/50 p-3 shadow-lg'>
                    <div // card title
                      className='flex items-center gap-2'
                    >
                      <img
                        src={motorImg}
                        alt='موتور'
                        className='h-12 w-12 object-contain filter'
                      />
                      <p>{data.label}</p>
                    </div>
                    <div className='text-center'>
                      {data.status === 'no-data' ? (
                        <div className='flex h-12 items-center justify-center text-lg font-bold'>
                          قطع ارتباط
                        </div>
                      ) : (
                        <div className='flex items-center justify-center gap-2'>
                          <div className='text-lg font-bold'>
                            {data.currentConsumption}
                          </div>
                          <img
                            src={data.status === 'on' ? onImg : offImg}
                            alt={data.status === 'on' ? 'روشن' : 'خاموش'}
                            className='h-12 w-12'
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </dl>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
