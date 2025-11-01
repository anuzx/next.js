//this to get loading page untless the next.js fetches the data from backend

export default function Loading() {
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">Loading...</div>
    </div>
  );
}