
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const EditUser = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userId: "",
    name: "",
    email: "",
    password: "",
    role: "USR",
    location: "",
    hmclGstin: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch user data
    setTimeout(() => {
      // Mock user data based on the screenshot
      const userData = {
        userId: "0",
        name: "ASHIANA Maintenance Services LLP",
        email: "",
        password: "••••••••••••••••••••••••••",
        role: "USR",
        location: "",
        hmclGstin: "",
      };

      setFormData(userData);
      setLoading(false);
    }, 500);
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (role: string) => {
    setFormData((prev) => ({ ...prev, role }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "User Updated",
        description: `${formData.name}'s information has been updated successfully.`,
      });
      setIsSubmitting(false);
      navigate("/user-details");
    }, 1000);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gstRed mx-auto"></div>
          <p className="mt-4 text-gray-500">Loading user information...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          size="icon"
          onClick={() => navigate("/user-details")}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold">Edit User</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-3">
          <div>
            <Label htmlFor="userId">UserId</Label>
            <Input
              id="userId"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              className="mt-1"
              readOnly
            />
          </div>

          <div>
            <Label htmlFor="name">User Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="role">Role</Label>
            <div className="flex gap-4 mt-1">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="role"
                  checked={formData.role === "ADM"}
                  onChange={() => handleRoleChange("ADM")}
                  className="mr-1"
                />
                ADM
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="role"
                  checked={formData.role === "FIN"}
                  onChange={() => handleRoleChange("FIN")}
                  className="mr-1"
                />
                FIN
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="role"
                  checked={formData.role === "USR"}
                  onChange={() => handleRoleChange("USR")}
                  className="mr-1"
                />
                USR
              </label>
            </div>
          </div>

          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="hmclGstin">HMCL GSTIN</Label>
            <Input
              id="hmclGstin"
              name="hmclGstin"
              value={formData.hmclGstin}
              onChange={handleChange}
              className="mt-1"
            />
          </div>
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Updating..." : "Update"}
          </Button>
        </div>
      </form>

      <div className="text-center text-sm text-gray-500 mt-8">
        © 2022 - HMCL Ltd - <a href="#" className="text-blue-500">Privacy</a>
      </div>
    </div>
  );
};

export default EditUser;
