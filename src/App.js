import React, { useState } from "react";
import { motion } from "framer-motion";
import KatesProf from "./assets/Kate_Prof.jpg";
import {
  BookOpen,
  Heart,
  CloudRain,
  Sparkles,
  AlertTriangle,
  Instagram,
  Music,
  MessageCircle,
} from "lucide-react";

function App() {
  // Scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-warm-cream">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.h1
              className="text-2xl font-serif font-bold text-deep-brown"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Kate
            </motion.h1>
            <div className="flex gap-6">
              {["About", "Examples", "Fandoms", "Pricing", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-deep-brown hover:text-sepia transition-colors font-medium"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              className="flex-1 text-center md:text-left"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-deep-brown mb-6">
                Hey, I'm Kate! ✨
              </h1>
              <p className="text-xl md:text-2xl text-sepia mb-8">
                Crafting fanfiction with heart for over 14 years
              </p>
              <div className="w-32 h-1 bg-sepia mx-auto md:mx-0 rounded-full"></div>
            </motion.div>

            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-soft-beige">
                <img
                  src={KatesProf}
                  alt="Kate's profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16 px-4 bg-stone-100 paper-texture">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-bold text-deep-brown mb-8 text-center">
              About Me
            </h2>
            <div className="w-32 h-1 bg-sepia mx-auto rounded-full"></div>
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                I'm 26 and I write fanfiction! I've been in fandoms and writing
                since I was twelve, starting with One Direction and The 100.
                Since then, I have entered more fandom spaces and written for
                nearly all of them, my writing maturing as I have.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Recently, I realized that this hobby could be used as a way to
                earn some extra cash and also make someone a work that's just
                for them! I have experience with requests, work personalization,
                BL, and Dead Dove: Do Not Eat- among various other genres and
                preferences.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                If you have any questions, don't hesitate to just ask!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What I Write Section */}
      <section id="what-i-write" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-serif font-bold text-deep-brown mb-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            What I Write
          </motion.h2>
          <div className="w-32 h-1 bg-sepia mx-auto rounded-full mb-12"></div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Fluff Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Heart className="text-pink-500" size={24} />
                  <h3 className="text-2xl font-serif font-bold text-deep-brown">
                    Fluff
                  </h3>
                </div>
                <p className="text-gray-600">
                  Warm, cozy stories filled with comfort, sweetness, and
                  heartwarming moments. Perfect for when you need a smile.
                </p>
              </div>
            </motion.div>

            {/* Angst Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <CloudRain className="text-blue-600" size={24} />
                  <h3 className="text-2xl font-serif font-bold text-deep-brown">
                    Angst
                  </h3>
                </div>
                <p className="text-gray-600">
                  Emotional depth, conflict, and heartache. Stories that explore
                  the harder parts of love and life with authenticity.
                </p>
              </div>
            </motion.div>

            {/* Hurt/Comfort Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="text-purple-500" size={24} />
                  <h3 className="text-2xl font-serif font-bold text-deep-brown">
                    Hurt/Comfort
                  </h3>
                </div>
                <p className="text-gray-600">
                  The perfect balance of pain and healing. Stories where
                  characters support each other through difficult times.
                </p>
              </div>
            </motion.div>

            {/* Smut Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Heart className="text-red-500 fill-current" size={24} />
                  <h3 className="text-2xl font-serif font-bold text-deep-brown">
                    Smut
                  </h3>
                </div>
                <p className="text-gray-600">
                  Mature, intimate content written with care and respect. For
                  readers 18+ seeking romantic and explicit narratives.
                </p>
                <span className="inline-block mt-2 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                  18+ Only
                </span>
              </div>
            </motion.div>

            {/* Dead Dove Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-amber-500"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="text-amber-600" size={24} />
                  <h3 className="text-2xl font-serif font-bold text-deep-brown">
                    DD:DNE
                  </h3>
                </div>
                <p className="text-gray-600 mb-3">
                  Dead Dove: Do Not Eat. Dark, mature content with potentially
                  triggering themes. Read tags carefully.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-3 rounded">
                  <p className="text-sm text-amber-800 font-medium">
                    ⚠️ Contains mature/dark themes. Proceed with caution.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="examples" className="py-16 px-4 bg-stone-100 paper-texture">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-serif font-bold text-deep-brown mb-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Example Works
          </motion.h2>
          <div className="w-32 h-1 bg-sepia mx-auto rounded-full mb-12"></div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Second Thought */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="p-6 pb-4">
                <div className="flex items-start gap-3 mb-4">
                  <BookOpen className="text-sepia flex-shrink-0" size={28} />
                  <div>
                    <h3 className="text-xl font-serif font-bold text-deep-brown mb-1">
                      Second Thought
                    </h3>
                    <p className="text-sm text-gray-500">Salesman x Reader</p>
                  </div>
                </div>
              </div>
              <div className="h-40 overflow-hidden">
                <img
                  src="https://imgur.com/nXY4lLz.png"
                  alt="Second Thought"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 pt-4 flex flex-col flex-1">
                <p className="text-gray-600 text-sm mb-4">
                  Salesman gets attached to potential player.
                </p>
                <a
                  href="https://vladtoly.tumblr.com/post/666068833406173184/an-so-ive-been-out-of-the-writing-game-for-a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-deep-brown text-white px-4 py-2 rounded-lg hover:bg-sepia transition-colors mt-auto"
                >
                  Read on Tumblr
                </a>
              </div>
            </motion.div>

            {/* POV */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="p-6 pb-4">
                <div className="flex items-start gap-3 mb-4">
                  <BookOpen className="text-sepia flex-shrink-0" size={28} />
                  <div>
                    <h3 className="text-xl font-serif font-bold text-deep-brown mb-1">
                      POV
                    </h3>
                    <p className="text-sm text-gray-500">Gi-Hun x Reader</p>
                  </div>
                </div>
              </div>
              <div className="h-40 overflow-hidden">
                <img
                  src="https://i0.wp.com/www.thewrap.com/wp-content/uploads/2021/10/squid-game-episode-9-1024x576.jpg?resize=1024%2C576&quality=89"
                  alt="POV"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 pt-4 flex flex-col flex-1">
                <p className="text-gray-600 text-sm mb-4">
                  Gi-Hun still can't get past the games.
                </p>
                <a
                  href="https://vladtoly.tumblr.com/post/667985989713674240/pov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-deep-brown text-white px-4 py-2 rounded-lg hover:bg-sepia transition-colors mt-auto"
                >
                  Read on Tumblr
                </a>
              </div>
            </motion.div>

            {/* Sweater */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="p-6 pb-4">
                <div className="flex items-start gap-3 mb-4">
                  <BookOpen className="text-sepia flex-shrink-0" size={28} />
                  <div>
                    <h3 className="text-xl font-serif font-bold text-deep-brown mb-1">
                      Sweater
                    </h3>
                    <p className="text-sm text-gray-500">Ted Lasso x Reader</p>
                  </div>
                </div>
              </div>
              <div className="h-40 overflow-hidden">
                <img
                  src="https://imgur.com/1QhxVKN.png"
                  alt="Sweater"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 pt-4 flex flex-col flex-1">
                <p className="text-gray-600 text-sm mb-4">
                  Ted just can't seem to find his sweater.
                </p>
                <a
                  href="https://archiveofourown.org/works/76596946"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-deep-brown text-white px-4 py-2 rounded-lg hover:bg-sepia transition-colors mt-auto"
                >
                  Read on AO3
                </a>
              </div>
            </motion.div>

            {/* Click */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="p-6 pb-4">
                <div className="flex items-start gap-3 mb-4">
                  <BookOpen className="text-sepia flex-shrink-0" size={28} />
                  <div>
                    <h3 className="text-xl font-serif font-bold text-deep-brown mb-1">
                      Click
                    </h3>
                    <p className="text-sm text-gray-500">Oscar x Reader</p>
                  </div>
                </div>
              </div>
              <div className="h-40 overflow-hidden">
                <img
                  src="https://64.media.tumblr.com/2730aef5953c3d941b07a901002039ed/f2591ad152b6a102-30/s640x960/4616efb271b51b74d9f44987ff9415514cab141b.gif"
                  alt="Click"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 pt-4 flex flex-col flex-1">
                <p className="text-gray-600 text-sm mb-4">
                  You've been doing such a good job at work recently. But you
                  keep hearing this sound...
                </p>
                <a
                  href=" https://archiveofourown.org/works/76597861"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-deep-brown text-white px-4 py-2 rounded-lg hover:bg-sepia transition-colors mt-auto"
                >
                  Read on AO3
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Fandoms & Rules Section */}
      <section id="fandoms" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-serif font-bold text-deep-brown mb-8 text-center">
              Fandoms & Rules
            </h2>
            <div className="w-32 h-1 bg-sepia mx-auto rounded-full mb-8"></div>

            {/* Fandoms Grid */}
            <motion.div
              className="mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <h3 className="text-2xl font-serif font-bold text-deep-brown mb-6 text-center">
                Fandoms I Write For
              </h3>
              <h4 className="text-md text-gray-600 mb-4 text-center">
                (Character x Reader or Character x OC only | I DO NOT WRITE
                ABOUT MINORS)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Jujutsu Kaisen",
                    image:
                      "https://p325k7wa.twic.pics/high/jujutsu-kaisen/jujutsu-kaisen-cursed-clash/00-page-setup/JJK-header-mobile2.jpg?twic=v1/resize=760/step=10/quality=80",
                    tags: ["All Characters"],
                  },
                  {
                    name: "Hell's Paradise",
                    image:
                      "https://upload.wikimedia.org/wikipedia/en/5/5c/Jigcast.jpg",
                    tags: ["All Characters"],
                  },
                  {
                    name: "Gangsta",
                    image:
                      "https://www.cubed3.com/wp-content/uploads/2024/06/gangsta-anime-reviews-art-banner.jpg",
                    tags: ["All Characters"],
                  },
                  {
                    name: "Chainsaw Man",
                    image: "https://imgur.com/TEL4Jpf.png",
                    tags: ["All Characters"],
                  },
                  {
                    name: "Tokyo Revengers",
                    image:
                      "https://img10.hotstar.com/image/upload/f_auto,q_auto/sources/r1/cms/prod/6867/1446867-i-17781cc97835",
                    tags: ["Time Skip/Bonten Arc", "All Characters"],
                  },
                  {
                    name: "Arrested Development",
                    image:
                      "https://media-cldnry.s-nbcnews.com/image/upload/streams/2013/May/130523/6C7538002-tdy-130304-arrested-development-1.jpg",
                    tags: ["All Characters"],
                  },
                  {
                    name: "Ted Lasso",
                    image:
                      "https://m.media-amazon.com/images/M/MV5BYmQ2YzI0M2MtZTM1Mi00NWU4LThiMGMtNDZhZmNjZWY2N2ZmXkEyXkFqcGc@._V1_.jpg",
                    tags: ["All Characters"],
                  },
                  {
                    name: "Succession",
                    image:
                      "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2019_33/2968171/190812-succession-cast-cs-1053a.jpg",
                    tags: ["All Characters"],
                  },
                  {
                    name: "The Pitt",
                    image:
                      "https://static01.nyt.com/images/2025/04/13/fashion/10PITT-FANDOM-01-wljh/10PITT-FANDOM-01-wljh-videoSixteenByNineJumbo1600.jpg",
                    tags: ["All Characters"],
                  },
                  {
                    name: "Squid Game",
                    image: "https://imgur.com/kNS0D9R.png",
                    tags: ["All Characters"],
                  },
                  {
                    name: "Peacemaker",
                    image:
                      "https://vaguevisages.com/wp-content/uploads/2022/01/Peacemaker-Cast-HBO-Max-Every-Performer-Character.jpg",
                    tags: ["Adrian Chase/Vigilante"],
                  },
                  {
                    name: "Jason Sudeikis Characters",
                    image:
                      "https://www.azcentral.com/gcdn/-mm-/92bf6774304b066249b94bc8daa4d8dc38e0dede/c=0-0-4974-2810/local/-/media/2015/09/17/Phoenix/Phoenix/635780934850483616-film-review-sleeping-with-other-people.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp",
                    tags: [
                      "Colossal",
                      "Horrible Bosses",
                      "Sleeping with Other People",
                    ],
                  },
                ].map((fandom) => (
                  <motion.div
                    key={fandom.name}
                    variants={fadeInUp}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="h-48 bg-gradient-to-br from-stone-200 to-stone-300 overflow-hidden">
                      <img
                        src={fandom.image}
                        alt={fandom.name}
                        className="w-full h-full object-cover opacity-90"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen
                          className="text-sepia flex-shrink-0"
                          size={24}
                        />
                        <h4 className="text-xl font-serif font-bold text-deep-brown">
                          {fandom.name}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {fandom.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-soft-beige text-deep-brown text-xs rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-6 text-center italic">
                I will consider other fandoms and characters, just ask!
              </p>
            </motion.div>

            {/* Rules */}
            <div className="bg-amber-50 border-2 border-amber-400 rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-serif font-bold text-deep-brown mb-6 flex items-center gap-2">
                <AlertTriangle className="text-amber-600" size={28} />
                Important Rules
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                  <h4 className="font-bold text-deep-brown mb-2">
                    ❌ No Character x Character
                  </h4>
                  <p className="text-gray-700">
                    I specialize in Character x Reader or Character x OC
                    stories. I do not write ship fiction between canon
                    characters.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
                  <h4 className="font-bold text-deep-brown mb-2">
                    🚫 No Minors
                  </h4>
                  <p className="text-gray-700">
                    I do not write romantic or sexual content involving minors
                    (characters under 18). All characters must be adults.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                  <h4 className="font-bold text-deep-brown mb-2">
                    📝 Detailed Descriptions Required
                  </h4>
                  <p className="text-gray-700">
                    For OC or Reader inserts, please provide detailed
                    descriptions including personality, appearance, background,
                    and any specific traits or quirks. The more detail, the
                    better I can bring your vision to life!
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                  <h4 className="font-bold text-deep-brown mb-2">
                    💬 Communication is Key
                  </h4>
                  <p className="text-gray-700">
                    Don't hesitate to share references, inspiration, specific
                    scenes you want included, or content warnings you need. I'm
                    here to create exactly what you're looking for.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 bg-stone-100 paper-texture">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-serif font-bold text-deep-brown mb-8 text-center">
              Commission Pricing
            </h2>
            <div className="w-32 h-1 bg-sepia mx-auto rounded-full mb-12"></div>

            <div className="bg-gradient-to-br from-white to-soft-beige rounded-2xl shadow-2xl p-10 border-2 border-sepia">
              <div className="text-center mb-8">
                <div className="inline-block bg-sepia text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
                  ✨ COMMISSION OPEN ✨
                </div>
                <h3 className="text-5xl font-serif font-bold text-deep-brown mb-4">
                  $10
                </h3>
                <p className="text-2xl text-gray-600">1,000 - 3,000 words</p>
              </div>

              <div className="border-t-2 border-soft-beige pt-8">
                <h4 className="text-xl font-serif font-bold text-deep-brown mb-4">
                  What's Included:
                </h4>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-sepia">✓</span>
                    <span className="text-gray-700">
                      One round of revisions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sepia">✓</span>
                    <span className="text-gray-700">
                      Detailed character work
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sepia">✓</span>
                    <span className="text-gray-700">Any genre or rating</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sepia">✓</span>
                    <span className="text-gray-700">
                      Delivery within 1-2 weeks
                    </span>
                  </li>
                </ul>

                <div className="bg-amber-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-700">
                    <strong>Payment:</strong> PayPal or Venmo. Half upfront,
                    half upon completion.
                  </p>
                </div>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                  className="block w-full text-center bg-deep-brown text-white py-4 rounded-xl font-bold text-lg hover:bg-sepia transition-colors shadow-lg"
                >
                  Get Started →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-serif font-bold text-deep-brown mb-8">
              Let's Connect
            </h2>
            <div className="w-32 h-1 bg-sepia mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-gray-700 mb-8">
              Ready to commission a story or just want to chat about fanfiction?
              Reach out through any of these platforms!
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <a
                  href="https://www.tiktok.com/@eth3lroy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-soft-beige transition-colors"
                >
                  <Music className="text-sepia" size={32} />
                  <span className="text-deep-brown font-medium">TikTok</span>
                  <span className="text-sm text-gray-500">@Eth3lroy</span>
                </a>

                <a
                  href="https://www.instagram.com/vladtoly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-soft-beige transition-colors"
                >
                  <Instagram className="text-sepia" size={32} />
                  <span className="text-deep-brown font-medium">Instagram</span>
                  <span className="text-sm text-gray-500">@Vladtoly</span>
                </a>

                <a
                  href="https://archiveofourown.org/users/Vladtoly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-soft-beige transition-colors"
                >
                  <BookOpen className="text-sepia" size={32} />
                  <span className="text-deep-brown font-medium">AO3</span>
                  <span className="text-sm text-gray-500">Vladtoly</span>
                </a>

                <a
                  href="https://vladtoly.tumblr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-soft-beige transition-colors"
                >
                  <MessageCircle className="text-sepia" size={32} />
                  <span className="text-deep-brown font-medium">Tumblr</span>
                  <span className="text-sm text-gray-500">Vladtoly</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep-brown text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg font-serif mb-4">Kate - Fanfiction Writer</p>
          <p className="text-sm text-soft-beige mb-4">
            Crafting stories with heart since 2012
          </p>
          <div className="flex justify-center gap-6 mb-4">
            <a
              href="https://www.tiktok.com/@eth3lroy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-soft-beige transition-colors"
            >
              <Music size={20} />
            </a>
            <a
              href="https://www.instagram.com/vladtoly"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-soft-beige transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://archiveofourown.org/users/Vladtoly"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-soft-beige transition-colors"
            >
              <BookOpen size={20} />
            </a>
            <a
              href="https://vladtoly.tumblr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-soft-beige transition-colors"
            >
              <MessageCircle size={20} />
            </a>
          </div>
          <p className="text-xs text-soft-beige">
            © 2026 Kate. All commission work is owned by the commissioner.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
