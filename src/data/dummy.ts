// src/data/dummy.ts

export interface MonthlyBug {
  month: string;
  fixed: number;
}

export interface BugStats {
  reported: number;
  fixed: number;
  pending: number;
  fixRate: number;
}

export interface LabStat {
  lab: string;
  openTickets: number;
  closedTickets: number;
}

export interface Technician {
  name: string;
  bugsFixed: number;
}

export interface Ticket {
  title: string;
  lab: string;
  priority: "Low" | "Medium" | "High";
  status: "Fixed" | "In Progress" | "Pending";
}

// 1. Bug stats
export const bugStats: BugStats = {
  reported: 421,
  fixed: 389,
  pending: 32,
  fixRate: 92.4,
};

// 2. Monthly Bugs
export const monthlyBugs: MonthlyBug[] = [
  { month: "Jan", fixed: 25 },
  { month: "Feb", fixed: 30 },
  { month: "Mar", fixed: 22 },
  { month: "Apr", fixed: 35 },
  { month: "May", fixed: 28 },
  { month: "Jun", fixed: 40 },
  { month: "Jul", fixed: 32 },
  { month: "Aug", fixed: 45 },
  { month: "Sep", fixed: 38 },
  { month: "Oct", fixed: 42 },
  { month: "Nov", fixed: 50 },
  { month: "Dec", fixed: 33 },
];

// 3. Lab-wise Statistics
export const labStats: LabStat[] = [
  { lab: "Lab A", openTickets: 12, closedTickets: 40 },
  { lab: "Lab B", openTickets: 7, closedTickets: 30 },
  { lab: "Lab C", openTickets: 5, closedTickets: 25 },
  { lab: "Lab D", openTickets: 3, closedTickets: 18 },
];

// 4. Technician Performance
export const technicianPerformance: Technician[] = [
  { name: "John", bugsFixed: 120 },
  { name: "Priya", bugsFixed: 95 },
  { name: "Ahmed", bugsFixed: 87 },
  { name: "Lisa", bugsFixed: 110 },
];

// 5. Recent Tickets
export const recentTickets: Ticket[] = [
  { title: "Projector not working", lab: "Lab A", priority: "High", status: "Fixed" },
  { title: "Wi-Fi disconnecting", lab: "Lab B", priority: "Medium", status: "In Progress" },
  { title: "Computer not booting", lab: "Lab C", priority: "High", status: "Pending" },
  { title: "AC not cooling", lab: "Lab D", priority: "Low", status: "Fixed" },
  { title: "Printer jam issue", lab: "Lab A", priority: "Medium", status: "Fixed" },
];
