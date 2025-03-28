"use client"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { useState } from "react"

const profileTabs = [
    {name: 'About', icon: "ri-information-line"},
    {name: 'Recipes', icon: "ri-book-2-line"},
    {name: 'Followers', icon: "ri-user-follow-line"},
    {name: 'Following', icon: "ri-user-shared-line"}
]; 

export default function Profile () {
    const { data: session, status } = useSession()
    const [activeTab, setActiveTab] = useState('About');
    
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            {/* Profile Banner */}
            <div className="w-full h-64 relative bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl  shadow-md">
                <div className="absolute inset-0 bg-black opacity-20">
                    <Image 
                        src="/images/home/profile/banner1.jpg" 
                        alt="Profile banner"
                        fill
                        className="object-cover rounded-xl"
                    />
                </div>
                
                {/* Profile Icon */}
                <div className="absolute -bottom-16 left-10 sm:left-16 bg-white rounded-full border-4 border-white w-32 h-32 flex justify-center items-center shadow-lg overflow-hidden">
                    <Image 
                        src="/images/home/profile/haha.webp" 
                        alt="Profile picture"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            
            {/* Profile Info */}
            <div className="w-full pt-5 pb-4 px-4 sm:pl-54 sm:pr-10">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-3xl font-bold text-gray-800">Jane Doe</h1>
                        <p className="text-gray-600 flex items-center">
                            <i className="ri-cookbook-line mr-2"></i>
                            489 recipes
                        </p>
                    </div> 
                    <div className="flex gap-3 mt-2 sm:mt-0">
                        {status === "authenticated" ? (
                            <>
                                <button className="px-4 py-2 bg-[#FF6B35] text-white rounded-md hover:bg-[#e55a29] transition-colors flex items-center">
                                    <i className="ri-edit-line mr-2"></i>
                                    Edit Profile
                                </button>
                                <button className="px-4 py-2 border border-gray-300 text-gray-700 bg-white rounded-md hover:bg-gray-50 transition-colors flex items-center">
                                    <i className="ri-settings-4-line mr-2"></i>
                                    Settings
                                </button>
                            </>
                        ):(
                            <>
                                <button className="px-4 py-2 bg-[#FF6B35] text-white rounded-md hover:bg-[#e55a29] transition-colors flex items-center">
                                    <i className="ri-user-add-line mr-2"></i>
                                    Follow
                                </button>
                                <button className="px-4 py-2 border border-gray-300 text-gray-700 bg-white rounded-md hover:bg-gray-50 transition-colors flex items-center">
                                    <i className="ri-mail-line mr-2"></i>
                                    Message
                                </button>
                            </>
                        )}
                    </div> 
                </div>
            </div>
            
            {/* Profile Tabs - Styled similar to myList */}
            <div className="flex items-center w-full border-b border-gray-200 overflow-x-auto">
                {profileTabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`
                            flex items-center justify-center gap-2 px-6 h-14 cursor-pointer
                            relative transition-all duration-200 hover:text-[#FF6B35] whitespace-nowrap
                            ${activeTab === tab.name 
                                ? 'text-[#FF6B35] font-medium' 
                                : 'text-gray-600'}            
                        `}
                        onClick={() => setActiveTab(tab.name)}
                    >
                        <i className={`${tab.icon} text-lg`}></i>
                        <h1 className="text-base">{tab.name}</h1>
                        
                        {/* Active indicator */}
                        {activeTab === tab.name && (
                            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#FF6B35]"></div>
                        )}
                    </div>
                ))}
            </div>
            
            {/* Profile Content */}
            <div className="w-full py-8">
                {activeTab === 'About' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                    <i className="ri-gallery-line mr-2 text-[#FF6B35]"></i>
                                    Recipe Gallery
                                </h2>
                                <div className="grid grid-cols-2 gap-3">
                                    {[1, 2, 3, 4, 5, 6].map((item) => (
                                        <div key={item} className="aspect-square rounded-md overflow-hidden relative shadow-sm hover:shadow-md transition-shadow">
                                            <Image 
                                                src={`/images/home/trending/trending${(item % 6) + 1}.jpg`}
                                                alt="Recipe image"
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <button className="w-full mt-4 text-sm text-[#FF6B35] hover:text-[#e55a29] font-medium flex items-center justify-center">
                                    <i className="ri-add-line mr-1"></i>
                                    View All Photos
                                </button>
                            </div>
                        </div>
                        
                        <div className="md:col-span-2">
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                    <i className="ri-user-heart-line mr-2 text-[#FF6B35]"></i>
                                    About Jane
                                </h2>
                                <p className="text-gray-600 mb-4">
                                    Passionate home cook with a love for experimenting with flavors from around the world. 
                                    I believe that cooking is a creative expression that brings people together. 
                                    My specialty is taking traditional recipes and giving them a modern twist.
                                </p>
                                
                                <div className="mt-6 space-y-4">
                                    <div className="flex items-center">
                                        <div className="w-1/3 text-gray-500 flex items-center">
                                            <i className="ri-map-pin-line mr-2"></i>
                                            Location
                                        </div>
                                        <div className="w-2/3 text-gray-800">New York, USA</div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-1/3 text-gray-500 flex items-center">
                                            <i className="ri-award-line mr-2"></i>
                                            Joined
                                        </div>
                                        <div className="w-2/3 text-gray-800">March 2023</div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-1/3 text-gray-500 flex items-center">
                                            <i className="ri-heart-line mr-2"></i>
                                            Favorite Cuisine
                                        </div>
                                        <div className="w-2/3 text-gray-800">Mediterranean, Asian</div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-1/3 text-gray-500 flex items-center">
                                            <i className="ri-trophy-line mr-2"></i>
                                            Achievements
                                        </div>
                                        <div className="w-2/3 text-gray-800">
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">Top Chef</span>
                                                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Recipe Creator</span>
                                                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Trendsetter</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                
                {activeTab === 'Recipes' && (
                    <div className="text-center py-8">
                        <h2 className="text-lg text-gray-700">User's recipes will be displayed here</h2>
                    </div>
                )}
                
                {activeTab === 'Followers' && (
                    <div className="text-center py-8">
                        <h2 className="text-lg text-gray-700">User's followers will be displayed here</h2>
                    </div>
                )}
                
                {activeTab === 'Following' && (
                    <div className="text-center py-8">
                        <h2 className="text-lg text-gray-700">Accounts this user follows will be displayed here</h2>
                    </div>
                )}
            </div>
        </div>
    )
}