var Role;
(function (Role) {
    Role["Doctor"] = "Doctor";
    Role["Nurse"] = "Nurse";
    Role["Admin"] = "Admin";
})(Role || (Role = {}));
var staffMembers = [
    { id: 1, name: "Dr. Sarah Chen", role: Role.Doctor },
    { id: 2, name: "James Miller", role: Role.Nurse },
    { id: 3, name: "Linda Torres", role: Role.Admin },
    { id: 4, name: "Dr. Omar Patel", role: Role.Doctor },
];
function printStaffSummary(staff) {
    console.log("Staff Summary");
    console.log("-------------");
    staff.forEach(function (member) {
        console.log("Name: ".concat(member.name, " | Role: ").concat(member.role));
    });
}
printStaffSummary(staffMembers);
