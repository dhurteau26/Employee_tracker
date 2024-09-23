import fs from 'node:fs/promises';
import { v4 as uuidv4 } from 'uuid';

class Role { 
    role_id: string;
    title: string;
    salary: number;
    department_id: string;

    constructor(
        role_id: string,
        title: string,
        salary: number,
        department_id: string
    ) {
        this.role_id = role_id;
        this.title = title;
        this.salary = salary;
        this.department_id = department_id;
    }
}

class addRole {
    private async read() {
        return await fs.readFile('db/addRole.json', {
            flag:'a+',
            encoding: 'utf8',
        });
    }

    private async write(Role: Role[]) {
        return await fs.writeFile(
            'db/addRole.json',
            JSON.stringify(Role, null, '\t')
        );
    }
    
    async getRole() {
        return await this.read().then((Role) => {
            let parsedRole: Role[];

            try {
                parsedRole = [].concat(JSON.parse(Role));
            } catch (err) {
                parsedRole = [];
            }
            return parsedRole;
            });
            
        }

        async addRole(
            role_id: string,
            title: string,
            salary: number,
            department_id: string
        ) {
            if (!role_id || !title || !salary || !department_id) {
                throw new Error('Role cannot be blank');
            }
            const newRole: Role = {
               role_id: uuidv4(),
               title: title,
               salary: salary,
               department_id: uuidv4()
            };

            return await this.getRole()
            .then((Role) => {
                return [...Role, newRole];
            })
            .then((updatedRole) => this.write(updatedRole))
            .then(() => newRole);
            
        }
    }

export default new addRole();