class Seed {
    constructor(seed_name, seed_category, seed_image, planting_season, description, germination_rate, days_to_germination, days_to_maturity, plant_height, disease_resistance, yield_potential, planting_depth, spacing_requirements, sunlight_requirements, watering_needs, soil_type, fertilizer_recommendations, harvesting_instructions, seed_origin, certification, price) {
        this.seed_name = seed_name
        this.seed_category = seed_category
        this.seed_image = seed_image
        this.planting_season = planting_season
        this.description = description
        this.germination_rate = germination_rate
        this.days_to_germination = days_to_germination
        this.days_to_maturity = days_to_maturity
        this.plant_height = plant_height
        this.disease_resistance = disease_resistance
        this.yield_potential = yield_potential
        this.planting_depth = planting_depth
        this.spacing_requirements = spacing_requirements
        this.sunlight_requirements = sunlight_requirements
        this.watering_needs = watering_needs
        this.soil_type = soil_type
        this.fertilizer_recommendations = fertilizer_recommendations
        this.harvesting_instructions = harvesting_instructions
        this.seed_origin = seed_origin
        this.certification = certification
        this.price = price
    }

    SeedDetailsCreator() {
        return {
            seed_name : this.seed_name, 
            seed_category : this.seed_category,
            seed_image : this.seed_image,
            planting_season : this.planting_season,        
            description : this.description,        
            germination_rate : this.germination_rate,        
            days_to_germination : this.days_to_germination,         
            days_to_maturity : this.days_to_maturity,         
            plant_height : this.plant_height,
            disease_resistance : this.disease_resistance,       
            yield_potential : this.yield_potential,
            planting_depth : this.planting_depth,     
            spacing_requirements : this.spacing_requirements,
            sunlight_requirements : this.sunlight_requirements,
            watering_needs : this.watering_needs,      
            soil_type : this.soil_type,
            fertilizer_recommendations : this.fertilizer_recommendations,
            harvesting_instructions : this.harvesting_instructionsons,
            seed_origin : this.seed_origin,  
            certification : this.certification,
            price : this.price
        }
    }

    get seedDetails() {
        return this.SeedDetailsCreator()
    }
}

function createSeed(src) {
    const createSeed = document.createElement("script")
    createSeed.src = src
    createSeed.type = "module"
    document.body.prepend(createSeed)
}

const addSeedForm = document.getElementById("add_seed")
var seed = addSeedForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const addSeedFormData = new FormData(addSeedForm)
        var seed = new Seed(addSeedFormData.get("seed_name"),addSeedFormData.get("seed_category"), addSeedFormData.get("seed_image"), addSeedFormData.get("planting_season"),addSeedFormData.get("description"),addSeedFormData.get("germination_rate"),addSeedFormData.get("days_to_germination"),addSeedFormData.get("days_to_maturity"),addSeedFormData.get("plant_height"),addSeedFormData.get("disease_resistance"),addSeedFormData.get("yield_potential"),addSeedFormData.get("planting_depth"),addSeedFormData.get("spacing_requirements"),addSeedFormData.get("sunlight_requirements"),addSeedFormData.get("watering_needs"),addSeedFormData.get("soil_type"),addSeedFormData.get("fertilizer_recommendations"),addSeedFormData.get("harvesting_instructions"),addSeedFormData.get("seed_origin"),addSeedFormData.get("certification"),addSeedFormData.get("price"))
        return seed
})
createSeed("/addSeedForm/crud.js")