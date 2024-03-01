import { useQuery } from "@tanstack/react-query";
import { AuthService } from "../../api/services/auth.service";
import { UserInfo } from "../../interfaces/user.interface";

const useGetUsers = () => {
  return useQuery<UserInfo[]>({
    queryKey: ["users"],
    queryFn: AuthService.getUsers,
  });
};

export { useGetUsers };
