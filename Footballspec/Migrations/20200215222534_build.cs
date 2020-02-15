using Microsoft.EntityFrameworkCore.Migrations;

namespace FootballSpeci.Migrations
{
    public partial class build : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "tblLigas",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblLigas", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "tblMatchDayPts",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LigaId = table.Column<long>(nullable: false),
                    UserId = table.Column<long>(nullable: false),
                    Matchday = table.Column<int>(nullable: false),
                    Pts = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblMatchDayPts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_tblMatchDayPts_tblLigas_LigaId",
                        column: x => x.LigaId,
                        principalTable: "tblLigas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_tblMatchDayPts_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "tblMatchForecasts",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MatchDayId = table.Column<long>(nullable: false),
                    MatchId = table.Column<int>(nullable: false),
                    HomeTeam = table.Column<int>(nullable: false),
                    AwayTeam = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblMatchForecasts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_tblMatchForecasts_tblMatchDayPts_MatchDayId",
                        column: x => x.MatchDayId,
                        principalTable: "tblMatchDayPts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_tblMatchDayPts_LigaId",
                table: "tblMatchDayPts",
                column: "LigaId");

            migrationBuilder.CreateIndex(
                name: "IX_tblMatchDayPts_UserId",
                table: "tblMatchDayPts",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_tblMatchForecasts_MatchDayId",
                table: "tblMatchForecasts",
                column: "MatchDayId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "tblMatchForecasts");

            migrationBuilder.DropTable(
                name: "tblMatchDayPts");

            migrationBuilder.DropTable(
                name: "tblLigas");
        }
    }
}
