class CarDealership {
    constructor(name) {
        this.name = name
        this.availableCars = []
        this.soldCars = []
        this.totalIncome = 0
    }
    addCar(model, horsepower, price, mileage) {
        if (model == '' || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error("Invalid input!")
        }
        this.availableCars.push({
            model,
            horsepower,
            price,
            mileage
        });
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }
    sellCar(model, desiredMileage) {
        let soldPrice = 0
        let carIndex = this.availableCars.findIndex(c => c.model == model);
        if (carIndex == -1) {
            throw Error(`${model} was not found!`);
        }
        if (this.availableCars[carIndex].mileage > desiredMileage) {
            let diff = this.availableCars[carIndex].mileage - desiredMileage
            if (diff <= 40000) {
                soldPrice = this.availableCars[carIndex].price - (this.availableCars[carIndex].price * 0.05);
            } else if (diff > 40000) {
                soldPrice = this.availableCars[carIndex].price - (this.availableCars[carIndex].price * 0.10);
            }
        } else {
            soldPrice = this.availableCars[carIndex].price;
        }
        this.soldCars.push(
            {
                model: this.availableCars[carIndex].model,
                horsepower: this.availableCars[carIndex].horsepower,
                soldPrice: soldPrice
            }
        );
        this.totalIncome += soldPrice;
        this.availableCars.slice(carIndex, 1);

        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }
    currentCar() {
        if (this.availableCars.length == 0) {
            return "There are no available cars"
        }
        let res = ["-Available cars:"]
        for (let c of this.availableCars) {
            res.push(`---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`);
        }
        return res.join('\n')
    }
    salesReport(criteria) {
        let sortedCars
        if (criteria == 'horsepower') {
            sortedCars = this.soldCars.sort((a, b) => b.horsepower - a.horsepower)
        } else if (criteria == 'model') {
            sortedCars = this.soldCars.sort((a, b) => (a.model).localeCompare(b.model))
        } else {
            throw Error('Invalid criteria!');
        }

        let result = [`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`, `-${this.soldCars.length} cars sold:`];
        for (const c of sortedCars) {
            result.push(`---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`)
        }
        return result.join('\n')
    }
}
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));