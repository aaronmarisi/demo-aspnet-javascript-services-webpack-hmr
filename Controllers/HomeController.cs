using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

public class HomeController : Controller
{
    private readonly IHostingEnvironment _hostingEnvironment;

    public HomeController(IHostingEnvironment hostingEnvironment)
    {
        _hostingEnvironment = hostingEnvironment;
    }

    public IActionResult Index()
    {
        var fileName = "index.html";
        var contentType = "text/html";

        string filePath = Path.Combine(_hostingEnvironment.WebRootPath, fileName);
        string fileContents = System.IO.File.ReadAllText(filePath);

        return Content(fileContents, contentType);
    }
}
