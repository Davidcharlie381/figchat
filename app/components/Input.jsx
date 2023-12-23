export default function Input({ type, className, name, placeholder }) { 

  return <input type={type} className={`w-full p-4 border border-black outline-none focus:border-2 text-[15px] font-medium font-roboto text-bl transition-smooth ${className}`} name={name} placeholder={placeholder} />;
}
