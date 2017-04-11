
using Microsoft.AspNetCore.Mvc;

public class HomeController : ControllerBase
{

    public IActionResult Index()
    {
        var fileName = "index.html";
        var contentType = "text/html";

        return File(fileName, contentType);
    }
}
