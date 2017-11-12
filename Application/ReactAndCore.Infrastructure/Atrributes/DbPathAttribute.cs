using System;

namespace ReactAndCore.Infrastructure.Attributes
{
    /// <summary>
    /// Path the model used by nosql (this case MongoDb)
    /// </summary>
    [AttributeUsage(AttributeTargets.Class)]
    public class DbPathAttribute: Attribute
    {
        public string Path { get; set; }

        public DbPathAttribute(string path)
        {
            Path = path;
        }
    }
}
