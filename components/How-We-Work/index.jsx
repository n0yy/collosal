import Header from "./ui/Header";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

export default function HowWeWorkPages() {
  return (
    <>
      <Header
        title="We have a workflow that allows the job to be delivered well"
        subTitle="HOW WE WORK"
      />
      <FirstStep />
      <SecondStep />
      <ThirdStep />
    </>
  );
}
