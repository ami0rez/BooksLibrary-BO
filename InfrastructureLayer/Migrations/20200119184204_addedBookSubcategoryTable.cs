using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace InfrastructureLayer.Migrations
{
    public partial class addedBookSubcategoryTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Author_Books_BookId",
                table: "Author");

            migrationBuilder.DropForeignKey(
                name: "FK_Books_SubCategories_SubCategoryId",
                table: "Books");

            migrationBuilder.DropIndex(
                name: "IX_Books_SubCategoryId",
                table: "Books");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Author",
                table: "Author");

            migrationBuilder.DropColumn(
                name: "SubCategoryId",
                table: "Books");

            migrationBuilder.RenameTable(
                name: "Author",
                newName: "Authors");

            migrationBuilder.RenameIndex(
                name: "IX_Author_BookId",
                table: "Authors",
                newName: "IX_Authors_BookId");

            migrationBuilder.AddColumn<int>(
                name: "BookId",
                table: "SubCategories",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Authors",
                table: "Authors",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "BookSubCategies",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    BookId = table.Column<int>(nullable: false),
                    SubCategoryId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BookSubCategies", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BookSubCategies_Books_BookId",
                        column: x => x.BookId,
                        principalTable: "Books",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BookSubCategies_SubCategories_SubCategoryId",
                        column: x => x.SubCategoryId,
                        principalTable: "SubCategories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SubCategories_BookId",
                table: "SubCategories",
                column: "BookId");

            migrationBuilder.CreateIndex(
                name: "IX_BookSubCategies_BookId",
                table: "BookSubCategies",
                column: "BookId");

            migrationBuilder.CreateIndex(
                name: "IX_BookSubCategies_SubCategoryId",
                table: "BookSubCategies",
                column: "SubCategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Authors_Books_BookId",
                table: "Authors",
                column: "BookId",
                principalTable: "Books",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_SubCategories_Books_BookId",
                table: "SubCategories",
                column: "BookId",
                principalTable: "Books",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Authors_Books_BookId",
                table: "Authors");

            migrationBuilder.DropForeignKey(
                name: "FK_SubCategories_Books_BookId",
                table: "SubCategories");

            migrationBuilder.DropTable(
                name: "BookSubCategies");

            migrationBuilder.DropIndex(
                name: "IX_SubCategories_BookId",
                table: "SubCategories");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Authors",
                table: "Authors");

            migrationBuilder.DropColumn(
                name: "BookId",
                table: "SubCategories");

            migrationBuilder.RenameTable(
                name: "Authors",
                newName: "Author");

            migrationBuilder.RenameIndex(
                name: "IX_Authors_BookId",
                table: "Author",
                newName: "IX_Author_BookId");

            migrationBuilder.AddColumn<int>(
                name: "SubCategoryId",
                table: "Books",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Author",
                table: "Author",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_Books_SubCategoryId",
                table: "Books",
                column: "SubCategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Author_Books_BookId",
                table: "Author",
                column: "BookId",
                principalTable: "Books",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Books_SubCategories_SubCategoryId",
                table: "Books",
                column: "SubCategoryId",
                principalTable: "SubCategories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
