"use client";

import { useFetch } from "@/hooks/useFetch";
import { useState, useEffect } from "react";


const SalesSection = () => {
    const [data, setData] = useState<any[]>([]);
    
    useEffect(() => {
        const loadData = async () => {
            try {
                const result = await useFetch<any[]>('/api/new-arrivals', {});
                setData(result);
            } catch (error) {
                console.error("Failed to load:", error);
            }
        }

        loadData();
    }, []);

    return (
        <section className="w-full">
            <div className="flex flex-col">
                <h2 className="font-bold text-2xl lg:text-4xl">Sales</h2>
                <p className="text-md text-gray-700">
                    Check out our latest sales and special offers. Don't miss out on great deals!
                </p>

                <div className="flex">
                    {data.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {data.map((item, index) => (
                                <div key={index} className="border rounded-lg p-4">
                                    <h3 className="font-semibold">{item.name}</h3>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="w-full mt-4 text-lg text-gray-700 text-center">
                            Cannot load sales at the moment. Please try again later.
                        </p>
                    )}
                </div>
            </div>
        </section>
    )
}

export default SalesSection;