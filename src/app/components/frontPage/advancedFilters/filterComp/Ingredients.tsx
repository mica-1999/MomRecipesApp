"use client"
import { useState, KeyboardEvent } from "react";

interface IngredientsProps {
    ingredients: string[];
    setIngredients: (value: string[]) => void;
}

export default function Ingredients({ingredients, setIngredients}: IngredientsProps) {
    const [inputValue, setInputValue] = useState("");
    
    const addIngredient = (ingredient: string) => {
        const trimmed = ingredient.trim();
        if (trimmed && !ingredients.includes(trimmed)) {
            setIngredients([...ingredients, trimmed]);
        }
        setInputValue("");
    };
    
    const removeIngredient = (ingredient: string) => {
        setIngredients(ingredients.filter(item => item !== ingredient));
    };
    
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            addIngredient(inputValue);
        }
    };

    return(
        <>
            <div className={`bg-white p-5 ${ingredients.length > 0 ? "border-[2.5px] border-green-500": "border-[0.5px] border-gray-200"} relative hover:z-10 hover:shadow-lg transition-all duration-200`}>
                <h2 className="text-lg font-semibold text-gray-800 mb-3">Ingredients</h2>
                <div className="space-y-4">
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="Add ingredients and press Enter"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" 
                        />
                        <button
                            onClick={() => addIngredient(inputValue)}
                            className="absolute right-2 top-2 p-1 rounded-md bg-indigo-500 text-white hover:bg-indigo-600 transition-colors cursor-pointer"
                        >
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </button>
                    </div>
                    
                    {ingredients.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {ingredients.map((ingredient, index) => (
                                <div 
                                    key={index} 
                                    className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm flex items-center"
                                >
                                    {ingredient}
                                    <button 
                                        onClick={() => removeIngredient(ingredient)}
                                        className="ml-1.5 text-indigo-500 hover:text-indigo-700 cursor-pointer"
                                    >
                                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
