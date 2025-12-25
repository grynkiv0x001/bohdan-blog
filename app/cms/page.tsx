import { getDatabase } from '@/lib/mongodb';

const Page = async () => {
  const db = await getDatabase();

  const users = await db
    .collection('users')
    .find({})
    .toArray()
    .catch((error) => console.error('Something went wrong', error));

  console.log('Users: ', users);

  return (
    <div>
      <h1>CMS</h1>
    </div>
  );
};

export default Page;
