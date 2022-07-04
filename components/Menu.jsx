export default function Menu({ children }) {
  return (
    <div className="flex items-center justify-between space-x-14 text-sm">
      {children}
    </div>
  );
}
