using Microsoft.EntityFrameworkCore.Migrations;

namespace InfrastructureLayer.Migrations
{
    public partial class base64Imagexxx : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Book_Editors_EditorId",
                table: "Book");

            migrationBuilder.DropForeignKey(
                name: "FK_Book_Ressources_RessourceId",
                table: "Book");

            migrationBuilder.DropForeignKey(
                name: "FK_BookAuthors_Book_BookId",
                table: "BookAuthors");

            migrationBuilder.DropForeignKey(
                name: "FK_BookSubCategies_Book_BookId",
                table: "BookSubCategies");

            migrationBuilder.DropForeignKey(
                name: "FK_BookTag_Book_BookId",
                table: "BookTag");

            migrationBuilder.DropForeignKey(
                name: "FK_Comments_Book_BookId",
                table: "Comments");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Book",
                table: "Book");

            migrationBuilder.RenameTable(
                name: "Book",
                newName: "Books");

            migrationBuilder.RenameIndex(
                name: "IX_Book_RessourceId",
                table: "Books",
                newName: "IX_Books_RessourceId");

            migrationBuilder.RenameIndex(
                name: "IX_Book_EditorId",
                table: "Books",
                newName: "IX_Books_EditorId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Books",
                table: "Books",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_BookAuthors_Books_BookId",
                table: "BookAuthors",
                column: "BookId",
                principalTable: "Books",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Books_Editors_EditorId",
                table: "Books",
                column: "EditorId",
                principalTable: "Editors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Books_Ressources_RessourceId",
                table: "Books",
                column: "RessourceId",
                principalTable: "Ressources",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_BookSubCategies_Books_BookId",
                table: "BookSubCategies",
                column: "BookId",
                principalTable: "Books",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_BookTag_Books_BookId",
                table: "BookTag",
                column: "BookId",
                principalTable: "Books",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_Books_BookId",
                table: "Comments",
                column: "BookId",
                principalTable: "Books",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BookAuthors_Books_BookId",
                table: "BookAuthors");

            migrationBuilder.DropForeignKey(
                name: "FK_Books_Editors_EditorId",
                table: "Books");

            migrationBuilder.DropForeignKey(
                name: "FK_Books_Ressources_RessourceId",
                table: "Books");

            migrationBuilder.DropForeignKey(
                name: "FK_BookSubCategies_Books_BookId",
                table: "BookSubCategies");

            migrationBuilder.DropForeignKey(
                name: "FK_BookTag_Books_BookId",
                table: "BookTag");

            migrationBuilder.DropForeignKey(
                name: "FK_Comments_Books_BookId",
                table: "Comments");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Books",
                table: "Books");

            migrationBuilder.RenameTable(
                name: "Books",
                newName: "Book");

            migrationBuilder.RenameIndex(
                name: "IX_Books_RessourceId",
                table: "Book",
                newName: "IX_Book_RessourceId");

            migrationBuilder.RenameIndex(
                name: "IX_Books_EditorId",
                table: "Book",
                newName: "IX_Book_EditorId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Book",
                table: "Book",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Book_Editors_EditorId",
                table: "Book",
                column: "EditorId",
                principalTable: "Editors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Book_Ressources_RessourceId",
                table: "Book",
                column: "RessourceId",
                principalTable: "Ressources",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_BookAuthors_Book_BookId",
                table: "BookAuthors",
                column: "BookId",
                principalTable: "Book",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_BookSubCategies_Book_BookId",
                table: "BookSubCategies",
                column: "BookId",
                principalTable: "Book",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_BookTag_Book_BookId",
                table: "BookTag",
                column: "BookId",
                principalTable: "Book",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_Book_BookId",
                table: "Comments",
                column: "BookId",
                principalTable: "Book",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
