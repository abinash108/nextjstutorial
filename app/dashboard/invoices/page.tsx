import Image from 'next/image';
import React, {ReactNode} from 'react';
interface Props {
    children: ReactNode;
}
function Check({ children }: Props) {
    return (
        <div className="flex space-x-2 items-center">
            <input
                type="checkbox"
                disabled
                defaultChecked
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            ></input>
            <p className="antialiased"> {children}</p>
        </div>
    );
}

function InfoText() {
    return (
        <div className="h-full md:w-1/2 p-4">
            <div className="font-black text-xl antialiased mb-4">
                <p>ABOUT US</p>
            </div>
            <div className="text-lg antialiased mb-8">
                <p>
                    IEDC CUSAT is a government-funded organization that aims to promote entrepreneurship among students and young professionals in India. The organization was established with the goal of fostering a culture of innovation and entrepreneurship among the student community and to provide the necessary support and resources to budding entrepreneurs.
                </p>
            </div>
            <div className="font-black text-xl antialiased mb-4">
                <p>What We Offer</p>
            </div>
            <div>
                <Check>Provides various training and resources for future entrepreneurs</Check>
                <Check>Entrepreneurship-related workshops, seminars, and competitions.</Check>
                <Check>Provides incubation facilities for start-ups in CITTIC, CUSAT</Check>
                <Check>Provide opportunities for entrepreneurs to connect with other like-minded individuals</Check>
            </div>
        </div>
    );
}

export default function Page() {
    return (
        <div className="flex flex-col md:flex-row bg-emerald-200 h-screen">
            <div className="flex-1">
                <InfoText />
            </div>
            <div className="flex-1">
                <Image
                    layout="responsive"
                    width={1000}
                    height={700}
                    src="/hero-desktop.png"
                    alt="Hey babes"
                    className="object-contain"
                />
            </div>
        </div>
    );
}
