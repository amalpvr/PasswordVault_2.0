using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using System;
using Microsoft.Extensions.Configuration;
using Project1.types;

namespace Project1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public LoginController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]

        public JsonResult Get()
        {
            string query = @"select Id, Username, Password, WebsiteUrl, WebsiteName from dbo.login";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("Passwordmanagerdb");
            SqlDataReader MyReader;
            using (SqlConnection MyConn = new SqlConnection(sqlDataSource))
            {
                MyConn.Open();
                using (SqlCommand MyCommand = new SqlCommand(query, MyConn))
                {
                    MyReader = MyCommand.ExecuteReader();
                    table.Load(MyReader);
                    MyReader.Close();
                    MyConn.Close();
                }
            }
            return new JsonResult(table);
        }
        [HttpPost]

        public JsonResult Post(login log)
        {
            string query = @"
            insert into dbo.login  
             (Username,Password,WebsiteUrl,WebsiteName) 
             values (@Username,@Password,@WebsiteUrl,@WebsiteName)
             ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("Passwordmanagerdb");
            SqlDataReader MyReader;
            using (SqlConnection MyConn = new SqlConnection(sqlDataSource))
            {
                MyConn.Open();
                using (SqlCommand MyCommand = new SqlCommand(query, MyConn))
                {
                    MyCommand.Parameters.AddWithValue("@Username", log.Username);
                    MyCommand.Parameters.AddWithValue("@Password", log.Password);
                    MyCommand.Parameters.AddWithValue("@WebsiteUrl", log.WebsiteUrl);
                    MyCommand.Parameters.AddWithValue("@WebsiteName", log.WebsiteName);
                    MyReader = MyCommand.ExecuteReader();
                    table.Load(MyReader);
                    MyReader.Close();
                    MyConn.Close();
                }
            }
            return new JsonResult("Added SuCessfully");
        }

        [HttpPut]

        public JsonResult Put(login log)
        {
            string query = @"
            update dbo.login set
             Username=@Username,
             Password=@Password,
             WebsiteUrl=@WebsiteUrl,
             WebsiteName=@WebsiteName 
             where Id = @Id ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("Passwordmanagerdb");
            SqlDataReader MyReader;
            using (SqlConnection MyConn = new SqlConnection(sqlDataSource))
            {
                MyConn.Open();
                using (SqlCommand MyCommand = new SqlCommand(query, MyConn))
                {
                    MyCommand.Parameters.AddWithValue("@Id", log.Id);
                    MyCommand.Parameters.AddWithValue("@Username", log.Username);
                    MyCommand.Parameters.AddWithValue("@Password", log.Password);
                    MyCommand.Parameters.AddWithValue("@WebsiteUrl", log.WebsiteUrl);
                    MyCommand.Parameters.AddWithValue("@WebsiteName", log.WebsiteName);
                    MyReader = MyCommand.ExecuteReader();
                    table.Load(MyReader);
                    MyReader.Close();
                    MyConn.Close();
                }
            }
            return new JsonResult("Updated SuCessfully");
        }



        [HttpDelete("{id}")]

        public JsonResult Delete (int id)
        {
            string query = @"delete from dbo.login 
             where Id = @Id";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("Passwordmanagerdb");
            SqlDataReader MyReader;
            using (SqlConnection MyConn = new SqlConnection(sqlDataSource))
            {
                MyConn.Open();
                using (SqlCommand MyCommand = new SqlCommand(query, MyConn))
                {
                    MyCommand.Parameters.AddWithValue("@Id",id);
                   
                    MyReader = MyCommand.ExecuteReader();
                    table.Load(MyReader);
                    MyReader.Close();
                    MyConn.Close();
                }
            }
            return new JsonResult("Deleted sucessfully");
        }
    }
}
