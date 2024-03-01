namespace Api.Core.Dtos.Auth
{
    public class LoginServiceResponseDto
    {
        public string Token { get; set; }

        //This would be returned to front-end
        public UserInfoResult UserInfo { get; set; }
    }
}
