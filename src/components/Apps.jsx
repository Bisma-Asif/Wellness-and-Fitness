import { Heart, Dumbbell, Download, ArrowRight } from "lucide-react";

export default function Apps() {
  const handleDownload = (fileName) => {
    const pdfPath = new URL(`../pdf/${fileName}`, import.meta.url).href;

    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = fileName;
    link.click();
  };

  return (
    <section
      id="apps"
      className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-purple-900 mb-4">
            Our Flagship Apps
          </h2>
          <p className="text-xl text-purple-800">
            Experience wellness innovation at your fingertips
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* SoulWhispers Section */}
          <div className="group relative p-10 rounded-3xl bg-white/40 backdrop-blur-sm border border-purple-200/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center shadow-lg shadow-pink-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <span className="px-4 py-1.5 rounded-full bg-pink-100 text-pink-700 text-sm font-medium">
                Mental Wellness
              </span>
            </div>

            <h3 className="text-3xl font-bold text-purple-900 mb-3">
              SoulWhispers
            </h3>
            <p className="text-lg bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-semibold mb-6">
              Your Pocket-Sized Wellness Companion
            </p>

            <p className="text-purple-800 leading-relaxed mb-8">
              SoulWhispers is a mindfulness and emotional wellness app designed
              to help users reconnect with their inner calm.
            </p>

            <button
              onClick={() => handleDownload("SoulWhispers-Brochure.pdf")}
              className="w-full px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl font-semibold text-white shadow-lg flex items-center justify-center gap-2 hover:shadow-xl transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Download SoulWhispers Brochure
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* GymKey Section */}
          <div className="group relative p-10 rounded-3xl bg-white/40 backdrop-blur-sm border border-purple-200/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center shadow-lg shadow-blue-300">
                <Dumbbell className="w-8 h-8 text-white" />
              </div>
              <span className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                Fitness & Gym
              </span>
            </div>

            <h3 className="text-3xl font-bold text-purple-900 mb-3">GymKey</h3>
            <p className="text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold mb-6">
              Smart Access to Fitness, Anytime
            </p>

            <p className="text-purple-800 leading-relaxed mb-8">
              GymKey is your digital passport to fitness freedom.
            </p>

            <button
              onClick={() => handleDownload("GymKey-Brochure.pdf")}
              className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl font-semibold text-white shadow-lg flex items-center justify-center gap-2 hover:shadow-xl transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Download GymKey Brochure
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
