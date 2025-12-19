import client from '@/lib/mongodb';

const Page = async () => {
  const mongoClient = await client.connect();
  const db = mongoClient.db('blog');

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
