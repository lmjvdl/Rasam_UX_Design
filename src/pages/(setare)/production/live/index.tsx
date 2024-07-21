import React from 'react'
import productionImg from '@/images/icons/production.webp'
import pressImg from '@/images/icons/press.webp'
import glazingImg from '@/images/icons/glazing.webp'
import printerImg from '@/images/icons/printer.webp'
import furnaceImg from '@/images/icons/furnace.webp'
import chamferImg from '@/images/icons/chamfer.webp'
import packagingImg from '@/images/icons/packaging.webp'
import warehouseImg from '@/images/icons/warehouse.webp'
import { cn } from '@/utils/ui/globals'
import AnimateText from '@/components/ui/AnimateText'

export default function Live() {
  const [i, setI] = React.useState(0)

  const productionList = generate(i)
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setI(i + 1)
    }, 30_000)

    return () => clearInterval(intervalId)
  }, [i])
  return (
    <div // production live root
    >
      <header // production main header
        className='flex flex-wrap items-center justify-center gap-4 p-4 sm:justify-normal'
      >
        <img // production image
          src={productionImg}
          alt='تولید'
          className='h-20 w-auto object-contain'
        />
        <h1 className='text-2xl font-bold'>تولید</h1>
      </header>
      <section className='flex flex-col gap-8 rounded-lg bg-slate-100/50 p-3 shadow-lg'>
        {productionList.map(productionData => (
          <article
            key={productionData.label} // all cards container
            className='bg-slate-100/50 p-3 shadow-lg xl:flex xl:flex-wrap xl:items-stretch xl:justify-start'
          >
            <dl // card container
              className='flex-[0_0_100%] p-2 md:flex-[0_0_50%] xl:flex-[0_0_25%] 2xl:flex-[0_0_20%]'
            >
              <div className='flex h-full flex-col gap-4 bg-slate-100/50 p-3 shadow-lg'>
                <div // card title
                  className='flex items-center gap-2 border-b border-slate-300 pb-3'
                >
                  <p className='text-lg font-bold'>{productionData.label}</p>
                </div>

                <div className='flex items-center justify-between gap-2  border-b border-slate-300 pb-3'>
                  <dt className='text-sm text-slate-500 after:content-[":"]'>
                    اندازه کاشی
                  </dt>
                  <dd className='font-bold text-slate-600' dir='ltr'>
                    {productionData.size}
                  </dd>
                </div>

                <div className='flex items-center justify-between gap-2  border-b border-slate-300 pb-3'>
                  <dt className='text-sm text-slate-500 after:content-[":"]'>
                    ضایعات خط
                  </dt>
                  <dd className='font-bold text-slate-600' dir='ltr'>
                    {productionData.waste}
                  </dd>
                </div>

                <div className='flex items-center justify-between gap-2'>
                  <dt className='text-sm text-slate-500 after:content-[":"]'>
                    حجم تولید
                  </dt>
                  <dd className='font-bold text-slate-600' dir='ltr'>
                    {productionData.produce}
                  </dd>
                </div>
              </div>
            </dl>
            <div className='flex flex-[0_0_100%] flex-wrap items-center justify-start gap-y-24 px-4 py-16 md:flex-[0_0_45%] xl:flex-[0_0_70%] 2xl:flex-[0_0_75%]'>
              {productionData.stations.map(data => (
                <div key={data.label} className='flex items-center'>
                  <div className='relative grid h-32 w-32 place-items-center'>
                    <div
                      className={cn(
                        'absolute inset-0 h-full w-full rounded-full bg-white shadow',
                        data.status === 'warning' && 'bg-amber-200',
                        data.status === 'danger' && 'bg-red-400',
                      )}
                    ></div>
                    <img
                      src={data.icon}
                      className='absolute right-0 top-0 h-full w-full object-contain p-7'
                      alt=''
                    />
                    <div className='relative w-[150%] -translate-y-12 text-center text-sm caret-gray-700'>
                      {data.label}
                    </div>
                    <div className='relative translate-y-14 text-lg font-bold caret-gray-700'>
                      <AnimateText>{data.quantity}</AnimateText>
                    </div>
                  </div>
                  {data.separated ? (
                    <div className='h-2 w-32'></div>
                  ) : (
                    <div className='grid h-2 w-32 place-items-center bg-white shadow'>
                      <span className='relative translate-y-8 text-xl font-bold text-rose-600'>
                        {data.waste}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

function generate(i: number) {
  const stations = [
    {
      label: 'خروجی پرس - ورودی درایر',
      status: 'ok',
      quantity: 3200 + i,
      waste: 1,
      icon: pressImg,
      separated: false,
    },
    {
      label: 'خروجی درایر - ورودی لعاب',
      status: 'ok',
      quantity: 3199 + i,
      waste: 0,
      icon: glazingImg,
      separated: false,
    },
    {
      label: 'خروجی لعاب - ورودی چاپ',
      status: 'warning',
      quantity: 3199 + i,
      waste: 0,
      icon: printerImg,
      separated: false,
    },
    {
      label: 'خروجی چاپ',
      status: 'ok',
      quantity: 3199 + i,
      waste: 0,
      icon: printerImg,
      separated: false,
    },
    {
      label: 'ورودی کوره',
      status: 'danger',
      quantity: 3201,
      waste: 0,
      icon: furnaceImg,
      separated: false,
    },
    {
      label: 'خروجی کوره',
      status: 'ok',
      quantity: 3201,
      waste: 0,
      icon: furnaceImg,
      separated: false,
    },
    {
      label: 'خروجی انباره - ورودی چمفر',
      status: 'warning',
      quantity: i,
      waste: 1,
      icon: chamferImg,
      separated: false,
    },
    {
      label: 'خروجی چمفر - ورودی بسته بندی',
      status: 'ok',
      quantity: '947',
      waste: 1 + i,
      icon: packagingImg,
      separated: true,
    },
    {
      label: 'موجودی سوبلکس',
      status: 'ok',
      quantity: 6402 - i,
      waste: 0,
      icon: productionImg,
      separated: true,
    },
    {
      label: 'موجودی انباره',
      status: 'ok',
      quantity: 7574 - i,
      waste: 0,
      icon: warehouseImg,
      separated: true,
    },
  ]
  const productionList = [
    {
      label: 'خط 1',
      waste: '406',
      produce: '1285',
      size: '60x60',
      stations,
    },
    {
      label: 'خط 2',
      waste: '406',
      produce: '1285',
      size: '60x60',
      stations,
    },
    {
      label: 'خط 3',
      waste: '406',
      produce: '1285',
      size: '60x60',
      stations,
    },
  ]

  return productionList
}
