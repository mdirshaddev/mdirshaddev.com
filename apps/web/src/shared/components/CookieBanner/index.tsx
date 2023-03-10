import { AiOutlineClose } from 'react-icons/ai';

export function CookieBanner() {
  return (
    <div className='poppy-cookie-banner'>
      <div>
        <p></p>
        <p className='poppy-cookie-banner-text text-white mb-4'>
          This website uses cookies to ensure you get the best experience. Read
          all about it in our{' '}
        </p>
      </div>
      <div className='poppy-cookie-buttons'>
        <button className='poppy-cookie-buttons-okay bg-teal-400 rounded-3xl px-4 py-2'>
          <span className='poppy-cookie-banner-text font-bold'>Okay</span>
        </button>
        <button className='poppy-cookie-buttons-close ml-4 rounded-full p-3 ring-1 ring-teal-400'>
          <span>
            <AiOutlineClose className='w-3 h-3 text-white font-bold' />
          </span>
        </button>
      </div>
    </div>
  );
}
