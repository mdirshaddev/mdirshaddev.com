import clsx from 'clsx';
import { Details } from './details';
import { Projects } from './projects';

export function Showcase() {
  return (
    <section className='overflow-hidden bg-black'>
      <article className={clsx('w-full max-w-[1200px] mx-auto py-16')}>
        <div className={clsx('px-4')}>
          <div
            className={clsx('grid grid-cols-1 lg:grid-cols-2 w-full mx-auto')}>
            <div className={clsx('px-0 lg:pl-4 z-10')}>
              <h1
                className={clsx(
                  'text-teal-400',
                  'w-full mx-auto',
                  'mb-2',
                  'font-bold'
                )}>
                Featuring Works
              </h1>
              <p
                className={clsx(
                  'text-white font-bold text-2xl lg:text-3xl',
                  'mb-2',
                  'w-full md:max-w-sm lg:max-w-md'
                )}>
                Every component you need is{' '}
                <span className={clsx('text-teal-400')}>
                  ready for production
                </span>
              </p>
              <p
                className={clsx(
                  'leading-relaxed text-lg w-full md:max-w-sm text-white'
                )}>
                Build at an accelerated pace without sacrificing flexibility or
                control
              </p>
              <div className={clsx('mb-8')} />
              <Details />
            </div>
            <div className={clsx('-mx-4 lg:-mx-0 mt-4 pt-8', 'relative')}>
              <div
                className={clsx(
                  'w-full h-[500px] md:h-[650px] xl:h-[832px]',
                  'relative'
                )}>
                <Projects />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
