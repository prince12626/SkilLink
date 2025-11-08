import React from 'react'
import { useServices } from "../context/ServiceContext"

const Service = () => {
    const { services } = useServices();
    console.log(services)

    let demo = [
        {
            "_id": "690f6f348a3bb98de96bd174",
            "owner": "672dcbf7e1a3a24a9c9a1b12",
            "title": "Logo Design Service",
            "description": "Professional logo design with unlimited revisions.",
            "keywords": ["design", "logo", "branding"],
            "imageURL": "https://images.unsplash.com/photo-1761839258044-e59f324b5a7f?auto=format&fit=crop&q=80&w=1171",
            "price": "49.99",
            "__v": 0
        },{
            "_id": "690f6f348a3bb98de96bd174",
            "owner": "672dcbf7e1a3a24a9c9a1b12",
            "title": "Logo Design Service",
            "description": "Professional logo design with unlimited revisions.",
            "keywords": ["design", "logo", "branding"],
            "imageURL": "https://images.unsplash.com/photo-1761839258044-e59f324b5a7f?auto=format&fit=crop&q=80&w=1171",
            "price": "49.99",
            "__v": 0
        },{
            "_id": "690f6f348a3bb98de96bd174",
            "owner": "672dcbf7e1a3a24a9c9a1b12",
            "title": "Logo Design Service",
            "description": "Professional logo design with unlimited revisions.",
            "keywords": ["design", "logo", "branding"],
            "imageURL": "https://images.unsplash.com/photo-1761839258044-e59f324b5a7f?auto=format&fit=crop&q=80&w=1171",
            "price": "49.99",
            "__v": 0
        },{
            "_id": "690f6f348a3bb98de96bd174",
            "owner": "672dcbf7e1a3a24a9c9a1b12",
            "title": "Logo Design Service",
            "description": "Professional logo design with unlimited revisions.",
            "keywords": ["design", "logo", "branding"],
            "imageURL": "https://images.unsplash.com/photo-1761839258044-e59f324b5a7f?auto=format&fit=crop&q=80&w=1171",
            "price": "49.99",
            "__v": 0
        },{
            "_id": "690f6f348a3bb98de96bd174",
            "owner": "672dcbf7e1a3a24a9c9a1b12",
            "title": "Logo Design Service",
            "description": "Professional logo design with unlimited revisions.",
            "keywords": ["design", "logo", "branding"],
            "imageURL": "https://images.unsplash.com/photo-1761839258044-e59f324b5a7f?auto=format&fit=crop&q=80&w=1171",
            "price": "49.99",
            "__v": 0
        },{
            "_id": "690f6f348a3bb98de96bd174",
            "owner": "672dcbf7e1a3a24a9c9a1b12",
            "title": "Logo Design Service",
            "description": "Professional logo design with unlimited revisions.",
            "keywords": ["design", "logo", "branding"],
            "imageURL": "https://images.unsplash.com/photo-1761839258044-e59f324b5a7f?auto=format&fit=crop&q=80&w=1171",
            "price": "49.99",
            "__v": 0
        },{
            "_id": "690f6f348a3bb98de96bd174",
            "owner": "672dcbf7e1a3a24a9c9a1b12",
            "title": "Logo Design Service",
            "description": "Professional logo design with unlimited revisions.",
            "keywords": ["design", "logo", "branding"],
            "imageURL": "https://images.unsplash.com/photo-1761839258044-e59f324b5a7f?auto=format&fit=crop&q=80&w=1171",
            "price": "49.99",
            "__v": 0
        },
    ];

    return (
        <div className="min-h-screen w-screen max-w-[90%] mx-auto flex">
            <div className="mt-30">
                <h1 className="text-4xl font-semibold">Our Services for your Comfort.</h1>

                <p className="text-sm text-gray-400 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa ceat facilis
                </p>

                <div className="grid gap-6 mt-8 
                    grid-cols-1
                    sm:grid-cols-2 
                    md:grid-cols-3 
                    lg:grid-cols-4">

                    {demo.map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-black/30 border border-[#33394C] shadow-md rounded-lg overflow-hidden hover:scale-105 duration-300"
                        >
                            <img
                                src={service.imageURL}
                                alt={service.title}
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-4">
                                <h2 className="text-lg font-semibold">{service.title}</h2>

                                <p className="text-gray-500 text-sm mt-1">
                                    {service.description}
                                </p>

                                <p className="mt-3 font-bold text-white">
                                    ₹{service.price}
                                </p>

                                <button className="mt-3 bg-gray-900 text-white text-sm px-4 py-2 rounded-md hover:bg-gray-700 w-full">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Service;
