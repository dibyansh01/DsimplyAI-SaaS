"use client";


import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { CodeIcon, ImageIcon, LayoutDashboard, MessageSquare, MusicIcon, SettingsIcon, VideoIcon } from "lucide-react";


const montserrat = Montserrat({weight: "600", subsets: ["latin"]});

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500"
    },
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/dashboard",
        color: "text-violet-500"
    },
    {
        label: "Image Genaration",
        icon: ImageIcon,
        href: "/dashboard",
        color: "text-pink-500"
    },
    {
        label: "Video Genaration",
        icon: VideoIcon,
        href: "/dashboard",
        color: "text-orange-500"
    },
    {
        label: "Music Generation",
        icon: MusicIcon,
        href: "/dashboard",
        color: "text-emerald-500"
    },
    {
        label: "Code Generation",
        icon: CodeIcon,
        href: "/dashboard",
        color: "text-green-500"
    },
    {
        label: "Settings",
        icon: SettingsIcon,
        href: "/dashboard",
       
    }
]

const Sidebar = ()=> {
    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-gray-700 text-white">
            <div className="px-3 py-3 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative h-8 w-8 mr-4">
                        <Image fill alt="Logo" src="/logo.png" />

                    </div>
                    <h1 className={cn("text-2xl font-bold", montserrat.className)}>
                        DsimplyAI
                    </h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route)=> (
                        <Link
                            href={route.href}
                            key={route.href}
                            className="text-sm group flex p-3 w-full justify-start 
                            font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)}/>
                                {route.label}
                            </div>
                        </Link>
                    ))}

                </div>
            </div>

        </div>
    )
}

export default Sidebar;
