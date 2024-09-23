import fs from 'node:fs/promises';
import { v4 as uuidv4 } from 'uuid';

class Employee { 
    id: string;
    first_name: string;
    last_name: string;
    role_id: string;
    manager_id: string

    constructor(
      id: string,
      first_name: string,
      last_name: string,
      role_id: string,
      manager_id: string
    ) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.role_id = role_id;
        this.manager_id = manager_id
    }
}

class addEmployee {
    private async read() {
        return await fs.readFile('db/addEmployee.json', {
            flag:'a+',
            encoding: 'utf8',
        });
    }

    private async write(Employee: Employee[]) {
        return await fs.writeFile(
            'db/addEmployee.json',
            JSON.stringify(Employee, null, '\t')
        );
    }
    
    async getEmployee() {
        return await this.read().then((Employee) => {
            let parsedEmployee: Employee[];

            try {
                parsedEmployee = [].concat(JSON.parse(Employee));
            } catch (err) {
                parsedEmployee = [];
            }
            return parsedEmployee;
            });
            
        }

        async addEmployee(
            id: string,
            first_name: string,
            last_name: string,
            role_id: number,
            manager_id: string
        ) {
            if (!id || !first_name || !last_name || !role_id || !manager_id) {
                throw new Error('Employee cannot be blank');
            }
            const newEmployee: Employee = {
               id: uuidv4(),
               first_name: first_name,
               last_name: last_name,
               role_id: uuidv4(),
               manager_id: uuidv4()
               
            };

            return await this.getEmployee()
            .then((Employee) => {
                return [...Employee, newEmployee];
            })
            .then((updatedEmployee) => this.write(updatedEmployee))
            .then(() => newEmployee);
            
        }
    }

export default new addEmployee();