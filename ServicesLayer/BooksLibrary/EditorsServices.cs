using Core.Models;
using InfrastructureLayer.DataAccess.BooksLibrary;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ServicesLayer.BooksLibrary
{
    public class EditorsServices : BaseServices, IEditorsServices
    {
        public EditorsServices(BooksDbContext database) : base(database)
        {

        }

        public Editor ReadOne(int id)
        {
            return _database.Editors.SingleOrDefault(t => t.Id == id);
        }

        public IEnumerable<Editor> ReadAll()
        {
            return _database.Editors.ToList();
        }

        public Editor Create(Editor Editor)
        {
            _database.Editors.Add(Editor);
            _database.SaveChanges();
            return Editor;
        }

        public void Update(Editor Editor)
        {
            var result = _database.Editors.SingleOrDefault((oldEditor) => oldEditor.Id == Editor.Id);
            if (result != null)
            {
                _database.Entry(result).CurrentValues.SetValues(Editor);
                _database.SaveChanges();
            }
        }

        public void Delete(int id)
        {
            var Editor = new Editor { Id = id };
            _database.Editors.Attach(Editor);
            var deleted = _database.Editors.Remove(Editor);
            _database.SaveChanges();
        }
    }
}
