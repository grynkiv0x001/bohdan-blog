import { z } from 'zod';

import { Input, Button, Typography } from '@/components/ui';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
});

const Page = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center h-screen">
      <div className="flex flex-col text-center">
        <Typography variant="h1">Welcome back!</Typography>
        <Typography variant="p" className="text-muted-foreground">
          To use the CMS, please login.
        </Typography>
      </div>

      <form className="flex flex-col gap-4 w-full max-w-sm">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />

        <Button type="submit">Login</Button>
        <Button asChild variant="link">
          <a href="/cms/register">Don&apos;t have an account?</a>
        </Button>
      </form>
    </div>
  );
};

export default Page;
