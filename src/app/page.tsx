import SearchUser from './components/SearchUser';

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="md:w-96 w-full p-4">
        <SearchUser />
      </div>
    </div>
  );
}
