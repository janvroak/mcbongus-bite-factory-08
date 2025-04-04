
import React from 'react';
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

interface SearchResultItemProps {
  restaurant: any;
  matchedItem?: {
    name: string;
    description?: string;
  };
}

const SearchResultItem = ({ restaurant, matchedItem }: SearchResultItemProps) => {
  return (
    <div className="bg-card rounded-lg shadow-md border border-border/50 overflow-hidden">
      <RestaurantCard restaurant={restaurant} />
      
      {matchedItem && (
        <div className="px-4 pb-4 pt-1">
          <div className="mt-1 pl-4 border-l-2 border-mcbongu-500">
            <p className="font-medium text-foreground">Matched dish: {matchedItem.name}</p>
            {matchedItem.description && (
              <p className="text-sm text-foreground/70 mt-1">{matchedItem.description}</p>
            )}
          </div>
          
          <Link 
            to={`/restaurant/${restaurant.id}`}
            className="mt-3 inline-flex items-center text-sm font-medium text-mcbongu-400 hover:text-mcbongu-300"
          >
            See full menu
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SearchResultItem;
