import Image from "next/image";
import HeroImage from "@/assets/hero_img.jpg";
import Link from "next/link";

const HeroBanner = () => {
    return (
        <section className="px-1 py-5">
            <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-[#f8f7f3]">
                <div className="pointer-events-none absolute -left-16 -top-16 hidden h-40 w-40 rounded-full border-18 border-[#4930d9]/5 md:block" />
                <div className="pointer-events-none absolute left-12 top-10 hidden h-3 w-3 rounded-full bg-[#4930d9]/20 md:block" />
                <div className="pointer-events-none absolute left-7 top-1/2 hidden -translate-y-1/2 md:block">
                    <div className="grid grid-cols-3 gap-2 opacity-30">
                        {Array.from({ length: 9 }).map((_, index) => (
                            <span
                                key={index}
                                className="h-1 w-1 rounded-full bg-[#4930d9]"
                            />
                        ))}
                    </div>
                </div>

                <div className="pointer-events-none absolute bottom-8 left-7 hidden -rotate-12 text-[9px] font-bold tracking-[0.25em] text-gray-300 md:block">
                    READ
                </div>

                <div className="pointer-events-none absolute -right-20 -top-20 hidden h-48 w-48 rounded-full border-22 border-[#f5df69]/30 md:block" />

                <div className="pointer-events-none absolute right-20 top-12 hidden h-3 w-3 rounded-full bg-[#f5df69] md:block" />

                <div className="pointer-events-none absolute bottom-8 right-7 hidden md:block">
                    <div className="grid grid-cols-3 gap-2 opacity-30">
                        {Array.from({ length: 9 }).map((_, index) => (
                            <span
                                key={index}
                                className="h-1 w-1 rounded-full bg-[#4930d9]"
                            />
                        ))}
                    </div>
                </div>

                {/* Decorative Text */}
                <div className="pointer-events-none absolute bottom-8 right-8 hidden rotate-12 text-[9px] font-bold tracking-[0.25em] text-gray-300 md:block">
                    DISCOVER
                </div>


                <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 py-9 sm:px-8 md:grid-cols-2 md:py-11 lg:px-12">
                    <div className="max-w-xl">

                        {/* Badge */}
                        <span className="mb-3 inline-flex items-center rounded-full bg-[#fff3d6] px-3 py-1 text-[10px] font-semibold text-[#e59a00]">
                            📚 Discover Your Next Read
                        </span>

                        {/* Heading */}
                        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                            Books to{" "}
                            <span className="text-[#4930d9]">
                                freshen up
                            </span>{" "}
                            your bookshelf.
                        </h1>

                        {/* Description */}
                        <p className="mt-4 max-w-md text-xs leading-5 text-gray-500 sm:text-sm">
                            Explore our collection of amazing books and find
                            your next favorite story, idea, or adventure.
                        </p>

                        {/* Buttons */}
                        <div className="mt-5 flex flex-wrap items-center gap-3">

                            <Link
                                href="/books"
                                className="rounded-md bg-[#4930d9] px-4 py-2.5 text-[11px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#3d27c4] hover:shadow-md"
                            >
                                View The List →
                            </Link>

                            <Link
                                href="#about"
                                className="rounded-md border border-gray-300 bg-white px-4 py-2.5 text-[11px] font-semibold text-gray-600 transition-all duration-200 hover:border-[#4930d9] hover:text-[#4930d9]"
                            >
                                Learn More
                            </Link>

                        </div>
                    </div>
                    <div className="relative flex justify-center md:justify-end">

                        <div className="relative">

                            {/* Yellow Back Shape */}
                            <div className="absolute -right-2 -top-2 h-full w-full rotate-2 rounded-xl bg-[#f5df69]" />

                            {/* Purple Back Shape */}
                            <div className="absolute -bottom-2 -left-2 h-full w-full -rotate-2 rounded-xl bg-[#4930d9]/10" />

                            {/* Image Card */}
                            <div className="relative overflow-hidden rounded-xl border-4 border-white bg-white shadow-lg">

                                <Image
                                    src={HeroImage}
                                    alt="Featured books"
                                    width={420}
                                    height={300}
                                    priority
                                    className="h-47.5 w-67.5 object-cover sm:h-55 sm:w-[320px] md:h-57.5 md:w-85"
                                />

                            </div>

                            {/* Book Count Badge */}
                            <div className="absolute -bottom-4 -left-4 rounded-lg border border-gray-100 bg-white px-3 py-2 shadow-md">

                                <p className="text-[8px] font-medium text-gray-400">
                                    Explore
                                </p>

                                <p className="text-[11px] font-bold text-gray-800">
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