
import { useState } from "react";
import { PlusCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface MenuItemProps {
  item: {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
    tags?: string[];
    nutritionInfo?: {
      calories: string;
      protein: string;
      carbs: string;
      fat: string;
      allergens?: string[];
    };
  };
  onAddToCart: (itemId: string) => void;
}

const MenuItem = ({ item, onAddToCart }: MenuItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start sm:items-center gap-4 flex-1">
        {item.image && (
          <div className="rounded-lg overflow-hidden w-20 h-20 flex-shrink-0">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-cover transition-transform duration-500"
              style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000";
              }}
            />
          </div>
        )}
        
        <div className="flex-1">
          <div className="flex items-center justify-between sm:justify-start">
            <h3 className="font-medium text-gray-900">{item.name}</h3>
            
            {item.nutritionInfo && (
              <Dialog>
                <DialogTrigger asChild>
                  <button className="ml-2 text-gray-400 hover:text-mcbongu-500 transition-colors">
                    <Info className="h-4 w-4" />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>{item.name} - Nutrition Information</DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-500">Calories</p>
                      <p className="font-medium">{item.nutritionInfo.calories}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-500">Protein</p>
                      <p className="font-medium">{item.nutritionInfo.protein}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-500">Carbs</p>
                      <p className="font-medium">{item.nutritionInfo.carbs}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-500">Fat</p>
                      <p className="font-medium">{item.nutritionInfo.fat}</p>
                    </div>
                  </div>
                  
                  {item.nutritionInfo.allergens && item.nutritionInfo.allergens.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Allergens:</p>
                      <div className="flex flex-wrap gap-2">
                        {item.nutritionInfo.allergens.map((allergen, index) => (
                          <span 
                            key={index}
                            className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded"
                          >
                            {allergen}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            )}
          </div>
          
          <p className="text-gray-600 text-sm mt-1">{item.description}</p>
          
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {item.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-4 sm:mt-0">
        <p className="font-medium text-gray-900 sm:mr-4">{item.price}</p>
        <Button 
          onClick={() => onAddToCart(item.id)}
          variant="ghost"
          className="text-mcbongu-500 hover:text-mcbongu-600 hover:bg-mcbongu-50"
        >
          <PlusCircle className="h-5 w-5 mr-1" />
          Add
        </Button>
      </div>
    </div>
  );
};

export default MenuItem;
