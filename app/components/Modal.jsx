export default function ({ children }) {
  return (
    <div style={style.blur} className="fixed z-[100] h-screen w-screen grid place-content-center inset-0 bg-black/60 backdrop-blur-md">
      {children}
    </div>
  );
}

// tailwind's backdrop-blur doesn't seem to work

const style = {
  blur: {
    backdropFilter: "blur(4px)"
  }
}