import Image from "next/image";
import HeroImage from "@/assets/hero_img.jpg";

const HeroBanner = () => {
    return (
        <section className="my-10">
            <div className="relative overflow-hidden bg-[#f8f5ef] rounded-2xl">
                {/* Decorative circles */}
                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-100/60 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-orange-100/60 blur-3xl" />

                <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:px-8 md:grid-cols-2 md:py-24 lg:px-12">

                    {/* Content */}
                    <div className="max-w-xl">
                        <span className="mb-4 inline-block rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
                            📚 Discover Your Next Read
                        </span>

                        <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                            Books to{" "}
                            <span className="text-amber-600">
                                freshen up
                            </span>{" "}
                            your bookshelf.
                        </h1>

                        <p className="mt-6 max-w-lg text-base leading-7 text-gray-600 sm:text-lg">
                            Explore our collection of amazing books and find your
                            next favorite story, idea, or adventure.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <button
                                className="rounded-lg bg-gray-900 px-6 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-xl"
                            >
                                View The List →
                            </button>

                            <button
                                className="rounded-lg border border-gray-300 bg-white px-6 py-3.5 font-semibold text-gray-700 transition-all duration-300 hover:border-gray-400 hover:bg-gray-50"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative flex justify-center md:justify-end">
                        <div className="relative">
                            {/* Background decoration */}
                            <div className="absolute -inset-4 rotate-3 rounded-2xl bg-amber-200/70" />

                            <div className="relative overflow-hidden rounded-2xl bg-white p-3 shadow-2xl">
                                <Image
                                    src={HeroImage}
                                    alt="Featured books"
                                    width={420}
                                    height={520}
                                    priority
                                    className="h-auto w-[280px] rounded-xl object-cover sm:w-[340px] md:w-[380px]"
                                />
                            </div>

                            {/* Floating badge */}
                            <div className="absolute -bottom-5 -left-5 rounded-xl bg-white px-5 py-3 shadow-xl">
                                <p className="text-xs font-medium text-gray-500">
                                    Explore
                                </p>
                                <p className="font-bold text-gray-900">
                                    1000+ Books
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;