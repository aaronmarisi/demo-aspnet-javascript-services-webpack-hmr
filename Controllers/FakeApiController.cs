using System.IO;
using Microsoft.AspNetCore.Mvc;

public class FakeApiController : Controller
{
    public IActionResult Index(string id = null)
    {
        string idMessage = id == null ? "no id" : id;
        string message = "id is: " + idMessage;

        var contentType = "text/html";
        return Content(message, contentType);
    }
}
