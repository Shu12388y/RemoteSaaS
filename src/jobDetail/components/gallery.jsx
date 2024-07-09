import React from 'react'


// random image
const randomImages=[
    'https://images.unsplash.com/photo-1664575262619-b28fef7a40a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29yayUyMGZyb20lMjBob21lfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1664575197229-3bbebc281874?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29yayUyMGZyb20lMjBob21lfGVufDB8fDB8fHww',
    'https://plus.unsplash.com/premium_photo-1665203424923-a7a3fcddd444?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmslMjBmcm9tJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1511732351157-1865efcb7b7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmslMjBmcm9tJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1664193968850-ee8f7ca24e6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmslMjBmcm9tJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1507099985932-87a4520ed1d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvcmslMjBsaWZlJTIwYmFsYW5jZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1640622307951-4ca1e4804e58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHdvcmslMjBmcm9tJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1664199486503-8a3e9a032dbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHdvcmslMjBmcm9tJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D'
]



function Gallery() {
    const index = Math.floor(Math.random() * randomImages.length);
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="flex flex-wrap md:-m-2 -m-1">
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={randomImages[0]} />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={randomImages[3]} />
                            </div>
                            <div class="md:p-2 p-1 w-full">
                                <img alt="gallery" class="w-full h-full object-cover object-center block" src={randomImages[2]} />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-full">
                                <img alt="gallery" class="w-full h-full object-cover object-center block" src={randomImages[1]} />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={randomImages[4]} />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={randomImages[5]} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Gallery