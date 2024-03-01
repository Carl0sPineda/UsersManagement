import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthService } from "../../api/services/auth.service";

const useRegisterUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: AuthService.register,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

export { useRegisterUser };
