export const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white flex-1 text-black">
      <div className="max-w-2xl mx-auto my-4">{children}</div>
    </div>
  );
};
