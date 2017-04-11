using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace demo_javascript_services_angular_cli
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
          services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();
            var logger = loggerFactory.CreateLogger("Startup");
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            #if RANDOM_UNDEFINED_CONSTANT
              logger.LogWarning("Inside #if debug");
              app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions {
                HotModuleReplacement = true
              });
            #endif

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseMvc(routes => {
              routes.MapRoute(
                name: "api",
                template: "api/{message}",
                defaults: new { controller = "Api", action = "Message"});

              routes.MapSpaFallbackRoute(
                name: "spa-fallback",
                defaults: new { controller = "Home", action = "Index" });
            });
        }
    }
}
