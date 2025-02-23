import * as React from 'react';

function Article() {
    return (
        <div className="max-w-7xl mx-auto p-6 rounded-lg text-left mt-40">
            <div className="flex">
                {/* Main Article Section */}
                <div className="flex-1 pr-6">
                    {/* Article Header */}
                    <div className="border-b pb-4 mb-6">
                        <h1 className="text-3xl font-bold text-gray-900">Righting a Wrong: The USA’s First Transcontinental Railroad</h1>
                        <div className="mt-2 text-gray-600 font-semibold">
                            <span className="font-medium">John Doe</span> • <time dateTime="2025-02-23">23 Feb 2025</time>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="my-6 flex justify-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/East_and_West_Shaking_hands_at_the_laying_of_last_rail_Union_Pacific_Railroad_-_Restoration.jpg/1920px-East_and_West_Shaking_hands_at_the_laying_of_last_rail_Union_Pacific_Railroad_-_Restoration.jpg"
                            alt="East and West Shaking Hands at the Laying of the Last Rail"
                            className="w-full max-w-md rounded-lg shadow-md"
                        />
                    </div>

                    {/* Article Content */}
                    <p className="text-gray-600 mt-4">
                    East finally met West 145 years ago on America's first transcontinental railroad. The symbolic hammering of a golden spike at Promontory Summit, Utah, completed the connection between the country's two coasts and shortened a cross-country trip of more than six months down to a week. Much of the building was done by thousands of laborers brought in from China, but their faces were left out of photographs taken on that momentous day. Over the years, one photograph in particular from May 10, 1869, has taken root in U.S. history. "It's a black-and-white, very historic-looking photo," says Connie Young Yu, the great-granddaughter of a Chinese laborer on the railroad. The iconic image shows a crowd of men swarmed around two locomotives.
                    </p>

                    <div className="border-l-4 border-yellow-500 pl-4 my-6">
                        <p className="text-gray-700 italic">
                        "In the middle are the two engineers shaking hands," Yu says. "And above them are workers hoisting champagne bottles."
                        </p>
                    </div>

                    <p className="text-gray-600">
                    The bubbly marked the long-awaited completion of the Gateway to the American West, nearly 2,000 miles of iron rail that crossed the Rockies and Sierra Nevada. But the portrait wasn't perfect.
                        
                    </p>
                    <p className="text-gray-600">
                    The bubbly marked the long-awaited completion of the Gateway to the American West, nearly 2,000 miles of iron rail that crossed the Rockies and Sierra Nevada. But the portrait wasn't perfect.
                        The completion of nearly 2,000 miles of iron rail marked the opening of the Gateway to the American West. But history, at least in photographs, omitted the Chinese workers who made up the majority of the Central Pacific Railroad's workforce. Photographer Corky Lee noticed this absence and, in 2002, gathered Chinese-Americans at the same location in Utah to re-create the momentous shot.
                    </p>

                    <p className="text-gray-600">
                    "History — at least photographically — says that the Chinese were not present," says photographer Corky Lee.
                    </p>

                    <div className="border-l-4 border-yellow-500 pl-4 my-6">
                        <p className="text-gray-700 italic">
                            "Being a first-generation immigrant and having a Chinese accent, you often hear, 'You're taking advantage of the infrastructure built by others'—assuming, of course, that 'others' are Caucasian and not our ancestors," says Ze Min Xiao, a board member of the Utah chapter of OCA - Asian Pacific American Advocates.
                        </p>
                    </div>
                </div>

                {/* Sidebar Section for Tags */}
                <div className="w-64 ml-4">
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">Tags</h2>
                    <div className="flex flex-wrap gap-2">
                        <a href="#" className="bg-gray-300 text-black rounded-full px-3 py-1 text-sm font-semibold hover:text-black hover:bg-gray-400">
                            Transcontinental Railroad
                        </a>
                        <a href="#" className="bg-gray-300 text-black rounded-full px-3 py-1 text-sm font-semibold hover:text-black hover:bg-gray-400 ">
                            Chinese American Laborers
                        </a>
                        <a href="#" className="bg-gray-300 text-black rounded-full px-3 py-1 text-sm font-semibold hover:text-black hover:bg-gray-400">
                            Westward Expansion
                        </a>
                    </div>
                    
                    <h2 className="text-lg font-semibold text-gray-900 my-2">Topics</h2>
                    <div className="flex flex-wrap gap-2">
                    <a href="#" className="bg-gray-300 text-black rounded-full px-3 py-1 text-sm font-semibold hover:text-black hover:bg-gray-400">
                            Labor
                        </a>
                        <a href="#" className="bg-gray-300 text-black rounded-full px-3 py-1 text-sm font-semibold hover:text-black hover:bg-gray-400 ">
                            Architecture
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Article;
