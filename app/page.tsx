import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white flex flex-col justify-center  items-center h-screen px-2">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
      <div>
        <div>
          <div>
            <h2>Examples</h2>
          </div>
          <div className="space-y-3">
            <p className="infoText">Explain something to me</p>
            <p className="infoText">
              What is the difference between dog and cat?
            </p>
            <p className="infoText"> What is the color of the sun?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
