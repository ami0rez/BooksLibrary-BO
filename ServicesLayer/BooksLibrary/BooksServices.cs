using Core.Exceptions;
using Core.Models;
using Core.Queries;
using InfrastructureLayer.DataAccess.BooksLibrary;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ServicesLayer.BooksLibrary
{
    public class BooksServices : BaseServices, IBooksServices
    {
        public BooksServices(BooksDbContext database) : base(database)
        {

        }

        public Book ReadOne(int id)
        {
            return _database.Books.SingleOrDefault(t => t.Id == id);
        }

        public IEnumerable<Book> ReadAll()
        {
            return _database.Books
                .Include(b => b.AuthorLinks)
                .Include(b => b.Editor)
                .Include(b => b.SubCategoriesLink)
                .Include(b => b.TagLinks)
                .ToList();
        }

        public Book Create(CreateBookQuery query)
        {
            _database.Ressources.Add(query.Ressource);
            _database.SaveChanges();
            var subCategories = _database.SubCategories.Where(sc => query.SubCategories.Contains(sc.Id)).ToList();
            var bookSubCategories = subCategories.Select(
                c => new BookSubCategies
                {
                    SubCategory = c,
                    SubCategoryId = c.Id
                }
                );

            var authors = _database.Authors.Where(a => query.Authors.Contains(a.Id)).ToList();
            var bookAuthors = authors.Select(
                a => new BookAuthors
                {
                    Author = a,
                    AuthorId = a.Id
                }
                );
            var tags = _database.Tags.Where(t => query.Tags.Contains(t.Id)).ToList();
            var bookTags = tags.Select(
               a => new BookTag
               {
                   Tag = a,
                   TagId = a.Id
               }
               );
            var editor = _database.Editors.SingleOrDefault(e => e.Id == query.EditorId);
            if (editor == null)
            {
                throw new RecordNotFoundException("Could not find selected editor");
            }
            var subcategories = _database.SubCategories.Where(s => query.SubCategories.Contains(s.Id)).ToList();
            Book book = new Book
            {
                Name = query.Name,
                BookImage = query.ImageBase64,
                Ressource = query.Ressource,
                AuthorLinks = bookAuthors.ToList(),
                Editor = editor,
                TagLinks = bookTags.ToList(),
                SubCategoriesLink = bookSubCategories.ToList(),
            };
            _database.Books.Add(book);
            _database.SaveChanges();

            return book;
        }

        public void Update(Book Book)
        {
            var result = _database.Books.SingleOrDefault((oldBook) => oldBook.Id == Book.Id);
            if (result != null)
            {
                _database.Entry(result).CurrentValues.SetValues(Book);
                _database.SaveChanges();
            }
        }

        public void Delete(int id)
        {
            var Book = new Book { Id = id };
            _database.Books.Attach(Book);
            var deleted = _database.Books.Remove(Book);
            _database.SaveChanges();
        }

        public FilterOptions GetFilters(FilterQuery query)
        {
            var filterOptions = new FilterOptions();
            filterOptions.Editors = new List<Editor>();
            filterOptions.Tags = new List<Tag>();
            var books = _database.Books
                .Include(b => b.AuthorLinks)
                .Include(b => b.Editor)
                .Include(b => b.SubCategoriesLink)
                .Include(b => b.TagLinks)
                .Include(b => b.Ressource);
            var books1 = books
                .Where(
                    b => (query.Authors == null || query.Authors.Count == 0 || b.AuthorLinks.Any(bA => query.Authors.Contains(bA.AuthorId)))
                    && (query.Editors == null || query.Editors.Count == 0 || query.Editors.Contains(b.Editor.Id))
                    && (query.SubCategories == null || query.SubCategories.Count == 0 || b.SubCategoriesLink.Any(bs => query.SubCategories.Contains(bs.SubCategoryId)))
                    && (query.Tags == null || query.Tags.Count == 0 || b.TagLinks.Any(tag => query.Tags.Contains(tag.TagId)))
                    );
            var books2 = books1
            .GroupBy(
                b => new
                {
                    b.Editor,
                }
                 )
            .ToList();
            filterOptions.Authors = books1.SelectMany(b => b.AuthorLinks.Select(al => al.Author)).Distinct().ToList();
            filterOptions.SubCategories = books1.SelectMany(b => b.SubCategoriesLink.Select(sl => sl.SubCategory)).Distinct().ToList();
            filterOptions.Tags = books1.SelectMany(b => b.TagLinks.Select(tl => tl.Tag)).Distinct().ToList();
            books2.ForEach(
                g =>
                {
                    filterOptions.Editors.Add(g.Key.Editor);
                }
            );
            return filterOptions;
        }

        public IEnumerable<BookResponse> FilterBy(FilterQuery query)
        {
            var books = _database.Books
                .Include(b => b.AuthorLinks)
                .Include(b => b.Editor)
                .Include(b => b.SubCategoriesLink)
                .Include(b => b.TagLinks)
                .Include(b => b.Ressource);
            var books1 = books
                .Where(
                    b => (query.Authors == null || query.Authors.Count == 0 || b.AuthorLinks.Any(bA => query.Authors.Contains(bA.AuthorId)))
                    && (query.Editors == null || query.Editors.Count == 0 || query.Editors.Contains(b.Editor.Id))
                    && (query.SubCategories == null || query.SubCategories.Count == 0 || b.SubCategoriesLink.Any(bs => query.SubCategories.Contains(bs.SubCategoryId)))
                    && (query.Tags == null || query.Tags.Count == 0 || b.TagLinks.Any(tag => query.Tags.Contains(tag.TagId)))
                    )
                .Select(
                b => new BookResponse
                {
                    Id = b.Id,
                    Name = b.Name,
                    Editor = b.Editor,
                    Base64Image = b.BookImage,
                    Ressource = b.Ressource,
                    Comment = b.Comment,
                    Authors = b.AuthorLinks.Select(al => al.Author).ToList(),
                    SubCategories = b.SubCategoriesLink.Select(sl => sl.SubCategory).ToList(),
                    Tags = b.TagLinks.Select(tl => tl.Tag).ToList()
                }
                )
                ;
            if(books1.Count() == 0)
            {
                return new List<BookResponse>();
            }
            return books1
                .Skip(query.Start ?? 0)
                .Take(query.Length ?? books1.Count())
                .ToList();
        }
    }
}
