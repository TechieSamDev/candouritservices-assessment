import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Home() {
  return (
    <div className="flex items-center justify-center border h-screen">
      <div>
        <div className="w-96 flex py-5">
          <Input className="rounded-r-none" placeholder="Search Username" />
          <Button className="rounded-l-none">Search</Button>
        </div>

        <div className="h-96 p-5 border space-y-3">
          <div className="flex items-center gap-5 bg-gray-50 p-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="w-full">
              <p className="">Name</p>
              <p className="text-xs">Frontend Dev</p>
              <p className="text-xs">5 Followers . 5 Following</p>
            </div>
          </div>
          <div className="space-y-2">
            <p>
              <b>65</b> Public Repositories
            </p>

            <ul className="space-y-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <ul
                  key={i}
                  className="p-2 hover:bg-gray-200 bg-gray-100 rounded"
                >
                  Repo {i}
                </ul>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
