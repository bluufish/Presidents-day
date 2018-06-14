using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.IO;

namespace SimonAPI.Controllers
{
    [Route("api/[controller]")]
    public class PresidentController : Controller
    {
        // GET api/President/ascending?descending
        [HttpGet("{id?}")]

        public List<President> Get(string id)
        {
            //Get JSON file
            using (StreamReader streamReader = new StreamReader("./PresidentList.json"))
            {
                string readContents = streamReader.ReadToEnd();

                //Convert from JSON string to List of President 
                List<President> ListOfPresidents = JsonConvert.DeserializeObject<List<President>>(readContents);

                //Sorting by last name 
                if (id == "ascending")
                {
                    ListOfPresidents.Sort((x, y) => string.Compare(x.LastName, y.LastName));
                }
                else if (id == "descending")
                {
                    ListOfPresidents.Sort((x, y) => string.Compare(y.LastName, x.LastName));
                }
                return ListOfPresidents;
            }
        }     
    }
}
