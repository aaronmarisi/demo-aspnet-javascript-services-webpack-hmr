using Microsoft.AspNetCore.Mvc;

public class ApiController : ControllerBase
{
    public IActionResult Message(string message)
    {
        var contentType = "text/html";
        return Content(message, contentType);
    }
}
