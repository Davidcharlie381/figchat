import clsx from "clsx";

export default function Alert({ type, message }) {

  return (
    <div
      className={clsx(
        "fixed bottom-7 shadow-xl w-[343px] mx-auto left-1/2 translate-x-[-50%] p-5 rounded-xl text-white font-medium",
        {
          "bg-red-500": type === "error",
          "bg-green-500": type === "success",
        }
      )}
    >
      {message}
    </div>
  );
}
