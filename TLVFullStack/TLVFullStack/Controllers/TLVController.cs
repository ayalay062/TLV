using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TLVFullStack.Models;

namespace TLVFullStack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TLVController : ControllerBase
    {
        [Route("GetTimeByEmail")]
        [HttpPost(Name = "GetTimeByEmail")]
        public EmailResModel GetTimeByEmail(EmailReqModel emailModel)
        {
            return new EmailResModel() { Time =
                DateTime.Now.ToString()
            };
          
        }

    }
}
