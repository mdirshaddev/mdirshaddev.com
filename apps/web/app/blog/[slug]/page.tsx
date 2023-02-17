import getFileBySlug from 'src/libs/mdx';
import { Article } from './components';

export default async function Page() {
  const data = await getFileBySlug('');
  return (
    <div className='text-white mt-20'>
      <Article code={data.code} />
    </div>
  );
}
