// import Link from "next/link";
import Input from "@/app/components/Input";
import Back from "@/app/ui/Back";
import Button from "@/app/components/Button";
import Form from "@/app/components/Form";



const Home = async () => {

  return (
    <main className="mx-auto max-w-xl px-4">
      <Back />
      <h1 className="text-4xl font-normal py-8">Register</h1>
      <Form>
        <Input
          type="email"
          name="email"
          placeholder="Email address"
          className="mb-4"
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          className="mb-5"
        />
        <Button text="NEXT" className="w-full p-[18px] rounded-md" />
      </Form>
    </main>
  );
};

export default Home;
