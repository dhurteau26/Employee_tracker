import fs from 'node:fs/promises';
import { v4 as uuidv4 } from 'uuid';

class Department { 
    department_id: number;
    name: string;
    id: string;

    constructor(
        department_id: number,
        name: string
    ) {
        this.department_id = department_id;
        this.name = name;
    }
}

class addDepartment {
    private async read() {
        return await fs.readFile('db/addDepartment.json', {
            flag:'a+',
            encoding: 'utf8',
        });
    }

    private async write(Department: Department[]) {
        return await fs.writeFile(
            'db/addDepartment.json',
            JSON.stringify(Department, null, '\t')
        );
    }
    
    async getDepartment() {
        return await this.read().then((Department) => {
            let parsedDepartment: Department[];

            try {
                parsedDepartment = [].concat(JSON.parse(Department));
            } catch (err) {
                parsedDepartment = [];
            }
            return parsedDepartment;
            });
            
        }

        async addDepartment(
            department_id: number,
            name: string
        ) {
            if (!department_id || !name) {
                throw new Error('Department cannot be blank');
            }
            const newDepartment: Department = {
                name: name,
                department_id: department_id,
                id: uuidv4(),
            };

            return await this.getDepartment()
            .then((Department) => {
                return [...Department, newDepartment];
            })
            .then((updatedDepartment) => this.write(updatedDepartment))
            .then(() => newDepartment);
            
        }
    }

export default new addDepartment();