export class TableConstants {
    public static readonly FundColumns = [
        { field: 'personName', header: 'Person Name', align: 'left !important'},
        { field: 'paymentBy', header: 'Payment By', align: 'left !important'},
        { field: 'amount', header: 'Amount', align: 'right !important'},
        { field: 'dayCall', header: 'Day or Call', align: 'right !important'},
        { field: 'totalAmount', header: 'Total Amount', align: 'right !important'},
    ];

    public static readonly ShootingScheduleColumns = [
        { field: 'name', header: 'Name', align: 'left !important'},
        { field: 'role', header: 'Role', align: 'left !important'},
        { field: 'mainCategory', header: 'Main Category', align: 'left !important'},
        { field: 'subCategory', header: 'Sub Category', align: 'left !important'},
        { field: 'phoneNo', header: 'Phone Number', align: 'right !important'},
    ];

    public static readonly menuMasterColumns = [
        {field:'roleid',header:'RoleId'},
        {field:'parentid',header:'ParentId',align:'right !important'},
        {field:'name',header:'Menu Name',align:'left !important'},
        {field:'url',header:'URL',align:'left !important'},
        {field:'icon',header:'Icon',align:'left !important'},
        {field:'priorities',header:'Priorities'},
        {field:'isactive',header:'IsActive'},
        
    ];

    public static readonly unionMasterColumns = [
        {field: 'unionname',header:'UnionName',align:'right !important'},
        {field:'registernumber',header:'RegisterNumber',align:'left !important'},
        {field:'flag',header:'Flag',align:'left !important'},
    ]
}