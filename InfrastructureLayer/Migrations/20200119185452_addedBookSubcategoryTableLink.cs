using Microsoft.EntityFrameworkCore.Migrations;

namespace InfrastructureLayer.Migrations
{
    public partial class addedBookSubcategoryTableLink : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SubCategories_Books_BookId",
                table: "SubCategories");

            migrationBuilder.DropIndex(
                name: "IX_SubCategories_BookId",
                table: "SubCategories");

            migrationBuilder.DropColumn(
                name: "BookId",
                table: "SubCategories");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "BookId",
                table: "SubCategories",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_SubCategories_BookId",
                table: "SubCategories",
                column: "BookId");

            migrationBuilder.AddForeignKey(
                name: "FK_SubCategories_Books_BookId",
                table: "SubCategories",
                column: "BookId",
                principalTable: "Books",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
