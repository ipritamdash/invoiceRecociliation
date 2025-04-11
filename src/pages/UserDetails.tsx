
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { PlusCircle, Edit, Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

interface User {
  id: string;
  userId: string;
  name: string;
  role: string;
  location: string;
  hmclGstin: string;
  email: string;
  createdDate: string;
}

const UserDetails = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [role, setRole] = useState("All");
  const [userToDelete, setUserToDelete] = useState<User | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  // Mock users data
  const users: User[] = [
    {
      id: "1",
      userId: "0",
      name: "ASHIANA Maintenance Services LLP",
      role: "USR",
      location: "",
      hmclGstin: "",
      email: "",
      createdDate: "06-04-2025",
    },
    {
      id: "2",
      userId: "1",
      name: "Bangalore Motors",
      role: "ADM",
      location: "Bangalore",
      hmclGstin: "29AAACH0812J1ZX",
      email: "admin@bangaloremotors.com",
      createdDate: "04-04-2025",
    },
    {
      id: "3",
      userId: "2",
      name: "Chennai Services",
      role: "USR",
      location: "Chennai",
      hmclGstin: "33AAACH0812J1ZY",
      email: "user@chennaiservices.com",
      createdDate: "01-04-2025",
    }
  ];

  const filteredUsers = users.filter(
    (user) => {
      const matchesSearch = searchTerm === "" || 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) || 
        user.userId.includes(searchTerm);
      
      const matchesRole = role === "All" || user.role === role;
      
      return matchesSearch && matchesRole;
    }
  );

  const handleEditUser = (userId: string) => {
    navigate(`/edit-user/${userId}`);
  };

  const handleDeleteUser = (user: User) => {
    setUserToDelete(user);
    setIsDeleteDialogOpen(true);
  };

  const confirmDeleteUser = () => {
    // In a real app, you would call an API to delete the user
    toast({
      title: "User Deleted",
      description: `${userToDelete?.name} has been deleted successfully.`,
    });
    setIsDeleteDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
        <Button 
          className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2"
          onClick={() => navigate("/add-user")}
        >
          <PlusCircle className="h-4 w-4" />
          <span>Add User</span>
        </Button>
      </div>

      <Card className="p-4">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1">
            <label htmlFor="role" className="block text-sm text-gray-700 mb-1">Role</label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="ADM">Administrator</SelectItem>
                <SelectItem value="USR">User</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1 relative">
            <label htmlFor="search" className="block text-sm text-gray-700 mb-1">Search</label>
            <div className="relative">
              <Input
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search users..."
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
      </Card>

      <div className="text-sm font-semibold">
        Filtered Records : {filteredUsers.length}
      </div>

      <div className="overflow-x-auto">
        <Table className="border-collapse w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="border bg-blue-100 text-blue-800">UserId</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">User Name</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Role</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Location</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">HMCL GSTIN</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Email</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">CreatedDate</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="h-32 text-center">
                  No users found
                </TableCell>
              </TableRow>
            ) : (
              filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="border">{user.userId}</TableCell>
                  <TableCell className="border">{user.name}</TableCell>
                  <TableCell className="border">{user.role}</TableCell>
                  <TableCell className="border">{user.location}</TableCell>
                  <TableCell className="border">{user.hmclGstin}</TableCell>
                  <TableCell className="border">{user.email}</TableCell>
                  <TableCell className="border">{user.createdDate}</TableCell>
                  <TableCell className="border">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white bg-orange-500 hover:bg-orange-600"
                      onClick={() => handleEditUser(user.id)}
                    >
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete {userToDelete?.name}? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              variant="destructive" 
              onClick={confirmDeleteUser}
            >
              Delete User
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserDetails;
