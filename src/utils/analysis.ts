interface CropData {
    Country: string;
    Year: string;
    "Crop Name": string;
    "Crop Production (UOM:t(Tonnes))": string | number;
    "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": string | number;
    "Area Under Cultivation (UOM:Ha(Hectares))": string | number;
  } // Define the CropData interface
  
  interface CropStats {
    year: string;
    maxCrop: string;
    minCrop: string;
  } // Define the CropStats interface
  
  interface CropAverage {
    crop: string;
    avgYield: string;
    avgArea: string;
  } // Define the CropAverage interface
  
  export const getMaxAndMinProduction = (cropData: CropData[]): CropStats[] => {
    const years = [...new Set(cropData.map(item => item.Year))]; // Get unique years
    const result = years.map(year => {                           // Calculate max and min production for each year
      const dataForYear = cropData.filter(item => item.Year === year); // Filter data for the year
      
      const validProductions = dataForYear.map(item => item["Crop Production (UOM:t(Tonnes))"]) // Get production values
                                           .filter(item => item !== "" && item !== undefined && item !== null); // Filter out empty values
      
      if (validProductions.length === 0) {
        return {
          year,
          maxCrop: 'N/A',
          minCrop: 'N/A'
        };
      }
  
      const maxProd = Math.max(...validProductions.map(item => parseFloat(item as string) || 0)); // Find max production
      const minProd = Math.min(...validProductions.map(item => parseFloat(item as string) || 0)); // Find min production
  
      const maxCrop = dataForYear.find(item => parseFloat(item["Crop Production (UOM:t(Tonnes))"] as string) === maxProd); // Find the crop with max production
      const minCrop = dataForYear.find(item => parseFloat(item["Crop Production (UOM:t(Tonnes))"] as string) === minProd); // Find the crop with min production
  
      return {
        year,
        maxCrop: maxCrop ? maxCrop["Crop Name"] : 'N/A',
        minCrop: minCrop ? minCrop["Crop Name"] : 'N/A',
      };
    });
  
    return result;
  };
  
  export const getAverageYieldAndArea = (cropData: CropData[]): CropAverage[] => {
    const crops = [...new Set(cropData.map(item => item["Crop Name"]))];  // Get unique crops
    const result = crops.map(crop => {  // Calculate average yield and area for each crop
      const dataForCrop = cropData.filter(item => item["Crop Name"] === crop);  // Filter data for the crop
  
      const validYields = dataForCrop.map(item => item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]) // Get yield values
                                     .filter(item => item !== "" && item !== undefined && item !== null)  // Filter out empty values
                                     .map(item => parseFloat(item as string) || 0); // Convert to number
  
      const validAreas = dataForCrop.map(item => item["Area Under Cultivation (UOM:Ha(Hectares))"]) // Get area values
                                    .filter(item => item !== "" && item !== undefined && item !== null) // Filter out empty values
                                    .map(item => parseFloat(item as string) || 0);  // Convert to number
  
      const avgYield = validYields.length > 0 ? (validYields.reduce((sum, item) => sum + item, 0) / validYields.length) : 0;  // Calculate average yield
      const avgArea = validAreas.length > 0 ? (validAreas.reduce((sum, item) => sum + item, 0) / validAreas.length) : 0;  // Calculate average area
  
      return {
        crop,
        avgYield: avgYield.toFixed(3),
        avgArea: avgArea.toFixed(3),
      };
    });
  
    return result;
  };
  