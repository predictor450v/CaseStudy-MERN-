enum Role {
  Doctor = "Doctor",
  Nurse = "Nurse",
  Admin = "Admin"
}

interface Staff {
  id: number;
  name: string;
  role: Role;
}

const staffMembers: Staff[] = [
  { id: 1, name: "Dr. Sarah Chen", role: Role.Doctor },
  { id: 2, name: "James Miller", role: Role.Nurse },
  { id: 3, name: "Linda Torres", role: Role.Admin },
  { id: 4, name: "Dr. Omar Patel", role: Role.Doctor },
];

function printStaffSummary(staff: Staff[]): void {
  console.log("Staff Summary");
  console.log("-------------");
  staff.forEach((member) => {
    console.log(`Name: ${member.name} | Role: ${member.role}`);
  });
}

printStaffSummary(staffMembers);