import 'src/app/page.module.css';

import { Analytics, Hero, Library, Showcase, Blogs } from 'src/app/components';

export default async function Page() {
  return (
    <main className='main-content' tabIndex={-1}>
      <Hero />
      <div className='relative'>
        <div className='absolute inset-0 bg-slate-900' />
        <Showcase />
      </div>
      <Blogs />
      <Analytics />
      <Library />
    </main>
  );
}
