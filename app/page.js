import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2">
        <div className="flex justify-center flex-col ml-[10vw] gap-4">
          <p className="text-yellow-300 font-bold text-6xl">Everything you</p>
          <p className="text-yellow-300 font-bold text-6xl"> are. In one,</p>
          <p className="text-yellow-300 font-bold text-6xl">
            simple link in bio.
          </p>
          <p className="font-bold text-yellow-300 text-xl mv-4">
            Join 50M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="input flex gap-2">
            <input
              className="focus:outline-green-800 px-2 py-2 rounded-md"
              placeholder="linktr.ee/yourname"
            />
            <button className="bg-pink-300 rounded-full px-4 py-4">
              Claim Your Linktree
            </button>
          </div>
        </div>
        <div>
          <img className="" src="/home.png" alt="img" />
        </div>
      </section>
      <section className="bg-purple-300 min-h-[100vh] grid grid-cols-2">
        <div className="">
          <img className="px-10 ml-16 align-middle" src="/tmp1.png" />
        </div>
        <div className="flex justify-center flex-col mr-20 mx-6 gap-4">
          <p className="font-bold text-purple-700 text-6xl">
            Create and customize your Linktree in minutes
          </p>
          <p className="font-bold text-xl text-purple-700 mv-4">
            Connect your TikTok, Instagram, Twitter, website, store, videos,
            music, podcast, events and more. It all comes together in a link in
            bio landing page designed to convert.
          </p>
          <button className="bg-purple-500 w-fit rounded-full px-4 py-4">
            Get Started for free
          </button>
        </div>
      </section>
    </main>
  );
}
