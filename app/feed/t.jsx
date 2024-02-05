"use client"

export default function MainLayout({ children }) {
  return (
    <>
      <div>Navbar </div>
      {children}
      <div>Footer bar</div>
    </>
  );
}
