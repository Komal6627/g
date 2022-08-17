import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('employee_tbl')
export class EmployeePostEntity{
    @PrimaryGeneratedColumn()
    emp_id:number;

    @Column({default:''})
    emp_name: string;

    @Column({default:''})
    emp_gender:string;

    @Column({default:''})
    emp_address:string;

    @Column({type: 'integer', default: null})
    emp_contact:number;

    @Column({type: 'int', default: null})
    emp_salary: number;

    @Column({default: ''})
    emp_dept: string;
}

