export const metadata = {
  title: 'About Us',
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <h3>&copy; Next Js</h3>
    </div>
  );
}
