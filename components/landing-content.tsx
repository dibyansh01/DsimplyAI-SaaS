"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
    {
        name: "Akash",
        avatar: "A",
        title: "Software Engineer",
        description: "Nice platform for multiple use cases."
    },
    {
        name: "Sudhanshu",
        avatar: "A",
        title: "Data Scientist",
        description: "Good platform for content generation."
    },
    {
        name: "Arpit",
        avatar: "A",
        title: "Software Engineer",
        description: "Great AI  based application."
    }

]

export const LandingContent = ()=> {
    return (
        <div className="px-10 pb-20 ">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testimonials
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-between mx-auto">
                {testimonials.map((item)=>(
                    <Card key={item.description} className="bg-[#182458] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>
                                   
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4  px-0">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>          
        </div>
    )
}