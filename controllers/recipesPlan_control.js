const Recipes_Model = require('../models/Recipes_Model')

const controllers = {
    getAllRecipes: async(req,res)=>{
       try{
          const allRecipes = await Recipes_Model.find().select('-__v')
          res.status(200).json({allRecipes})
       }
       catch(err){
        res.status(500).json({"message":"Fetching All data is Error ",err:err.message})
       }
    },
    getRecipeById:async(req,res)=>{
       try{
          const Id = req.params.id;
          const recipeByID = await Recipes_Model.findById(Id).select('-__v');
          if(!recipeByID){
           return res.status(404).json({"message":"Recipe not found!!!"});
          };
          res.status(200).json({"message":"successfully Fetched",recipeByID})
       }catch(err){
        res.status(500).json({"message":"Cannot get the Recipe ",err:err.Message})
       }
    },
    createRecipe: async(req,res)=>{
       try{
           const newRecipe = new Recipes_Model(req.body);
           const savedRecipe = await newRecipe.save();
           res.status(201).json({"Message":"Created Successfully ",savedRecipe})
       }
       catch(err){
        res.status(500).json({"Message":"Creating recipe failed ",err:err.message})
       }
    },
    updateRecipe:async(req,res)=>{
        try{
            const ID = req.params.id;
            
            const updated = req.body;

            const updatedRecipe = await Recipes_Model.findByIdAndUpdate(ID,updated,{new:true});

            if(!updatedRecipe){
                return  res.status(404).json({"message":"Recipes is not found!!!"})
            }
            res.status(200).json({message:"Recipe is successfully Updated!!",updatedRecipe})

        }catch(err){
            res.status(500).json({"message":"cannot get the ID ",err:err.message})
        }
    },
    deleteRecipe:async(req,res)=>{
        try{
           const iD = req.params.id
           const deleted = await Recipes_Model.findByIdAndDelete(iD)

           if(!deleted){
            return res.status(404).json({message:"Deleting Recipe is failed..."})
           }
           res.status(200).json({message:"Successfully Deleted",deleted})
        }catch(err){
            res.status(500).json({message:"Cannot Delete the recipe"})
        }
    }
}
module.exports = controllers