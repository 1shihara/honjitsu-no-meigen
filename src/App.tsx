import { useState } from "react";

type Quote = {
  text: string;
  author: string;
};

function App() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [image, setImage] = useState<string>("/cat.png");
  const [showResult, setShowResult] = useState(false);
  const [bgColor, setBgColor] = useState<string>("bg-orange-300");

  const fetchQuote = async () => {
    if (import.meta.env.DEV) {
      // 開発中はダミーデータ
      setQuote({
        text: "ローカル開発用のダミー名言",
        author: "Dummy Author"
      });
    } else {
      // 本番ではAPIから取得
      const res = await fetch("/api/quote");
      const data = await res.json();
      setQuote(data);
    }

    // 画像をランダムに切り替え
    const images = ["/halloween.png", "/cat2.png", "/witch.png", "/witch2.png"];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setImage(randomImage);

    // ランダム背景色
    const colors = [
      "bg-purple-500",
      "bg-yellow-500",
      "bg-gray-500",
      "bg-pink-400"
    ];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);

    setShowResult(true);
  };

  const reset = () => {
    setQuote(null);
    setImage("/cat.png");
    setBgColor("bg-orange-300");
    setShowResult(false); // 最初の状態に戻す
  };


  return (
    <div className={`h-screen flex flex-col items-center justify-center ${bgColor}`}>
      <div className="max-w-xl text-center p-6 bg-white rounded-xl shadow-lg  w-[310px] ">
        <img
          src={image}
          alt="animal"
          className="mx-auto mb-4 object-contain"
        />
        <p className="text-xl font-semibold">
          {showResult ? quote?.text : "本日の名言"}
        </p>
        {showResult && <p className="mt-2 text-gray-500">— {quote?.author}</p>}
        <button
          onClick={showResult ? reset : fetchQuote}
          className="mt-6 px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-600 transition"
        >
          {showResult ? "reset" : "push"}
        </button>
      </div>
    </div>
  );
}

export default App;
