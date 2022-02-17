import NextLink from '~shared/next-link'

const Hero = () => {
  return (
    <section className='mt-6 flex items-center justify-center py-12 px-6 lg:mt-24 lg:p-0'>
      <main className='mx-auto max-w-5xl text-center'>
        <h1 className='text-4xl font-extrabold tracking-tight md:text-6xl'>
          YOUR ONE PLACE TO BUY AND SELL DIGITAL PRODUCTS ONLINE
        </h1>
        <p className='mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-neutral-400 md:text-2xl'>
          Digihub makes it easy to buy and sell digital products online with a
          platform that is simple, secure, and easy to use for both buyers and
          sellers alike - all in one place.
        </p>
        <div className='mt-8 flex flex-col justify-center gap-4 md:flex-row'>
          <NextLink
            className='btn btn--cta bg-indigo-600'
            href='/auth/signup?as=user'
          >
            Register as User
          </NextLink>
          <NextLink
            className='btn btn--cta bg-gray-800'
            href='/auth/signup?as=merchant'
          >
            Register as Merchant
          </NextLink>
        </div>
      </main>
    </section>
  )
}

export default Hero
