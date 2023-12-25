export default function Heading({text, className}) {
    return (
        <h2 className={`text-[13px] font-roboto font-extrabold tracking-[0.52px] ${className}`}>
        {text}
      </h2>
    )
}