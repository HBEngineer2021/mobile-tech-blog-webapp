export function ProfileArea() {
    return (
        <div className="container inline-block mt-10">
            <div className="container mx-auto bg-[#0b5394ff] rounded invisible lg:visible xl:visible">
                <div className="container pl-0 lg:pl-6 xl:pl-6 pt-0 lg:pt-6 xl:pt-6 text-[0px] lg:text-2xl xl:text-2xl font-semibold text-white">
                    #Profile
                </div>
                <div className="flex justify-center w-0 lg:w-full xl:w-full">
                    <img className="rounded-full w-0 lg:w-2/5 xl:w-2/5 h-0 lg:h-2/5 xl:h-2/5 m-0 lg:m-5 xl:m-5"
                        src="/profileicon.PNG"
                        alt="Sunset in the mountains"
                    />
                </div>
                <div className="p-0 lg:p-6 xl:p-6 w-0 lg:w-full xl:w-full">
                    <span className="text-[0px] lg:text-base xl:text-base font-semibold text-white">
                        <ul>
                            <li>■ Name</li>
                            <div className="p-0 lg:p-2 xl:p-2 inline-block text-white">
                                ジョーズじいさん🦈
                            </div>
                            <br />
                            <li>■ Occupation</li>
                            <div className="p-0 lg:p-2 xl:p-2 inline-block text-white">
                                iOS Engineer
                            </div>
                            <br />
                            <li>■ Development Skills</li>
                            <div className="p-0 lg:p-2 xl:p-2 inline-block text-white">
                                Swift, SwiftUI, Java, Kotlin, Flutter, Dart, Python, Ruby, Rails
                            </div>
                        </ul>
                    </span>
                </div>
            </div>
        </div>
    )
}