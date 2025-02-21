import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const handle = (await params).handle;
  const client = await clientPromise;
  const db = client.db("linktree");
  const collection = db.collection("links");
  const item = await collection.findOne({ handle: handle });
  if (!item) {
    return notFound();
  }

  const item2 = {
    _id: {
      $oid: "67b8b62a569d4e29699f1d09",
    },
    links: [
      {
        link: "https://www.instagram.com/lakshay.u16",
        linktext: "instagram",
      },
      {
        link: "https://www.facebook.com/lakshay.goel.165",
        linktext: "Facebook",
      },
    ],
    handle: "lakshay",
    pic: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_13.png",
  };

  return (
    <div className="flex min-h-screen bg-purple-400 justify-center items-start py-3">
      {item && (
        <div className="photo flex justify-center flex-col items-center">
          <img className="rounded-full size-29" src={item.pic} />
          <span className="font-bold text-xl">@{item.handle}</span>
          <div className="links">
            {item.links.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-center py-4 px-2 shadow-lg bg-purple-100 min-w-96 rounded-md my-3"
                >
                  <Link href={item.link}>{item.linktext}</Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
