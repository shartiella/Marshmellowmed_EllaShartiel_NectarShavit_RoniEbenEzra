﻿// <auto-generated />
using Marshmellowmed_EllaShartiel_NectarShavit_RoniEbenEzra.Server.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Marshmellowmed_EllaShartiel_NectarShavit_RoniEbenEzra.Server.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20220515102549_CategoryItemAdded")]
    partial class CategoryItemAdded
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.12");

            modelBuilder.Entity("Marshmellowmed_EllaShartiel_NectarShavit_RoniEbenEzra.Shared.Entities.Category", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("CategoryName")
                        .HasColumnType("TEXT");

                    b.Property<int>("GameID")
                        .HasColumnType("INTEGER");

                    b.HasKey("ID");

                    b.HasIndex("GameID");

                    b.ToTable("Categories");
                });

            modelBuilder.Entity("Marshmellowmed_EllaShartiel_NectarShavit_RoniEbenEzra.Shared.Entities.Game", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("GameCode")
                        .HasColumnType("INTEGER");

                    b.Property<string>("GameName")
                        .HasColumnType("TEXT");

                    b.Property<bool>("IsPublished")
                        .HasColumnType("INTEGER");

                    b.Property<int>("UserID")
                        .HasColumnType("INTEGER");

                    b.HasKey("ID");

                    b.HasIndex("UserID");

                    b.ToTable("Games");
                });

            modelBuilder.Entity("Marshmellowmed_EllaShartiel_NectarShavit_RoniEbenEzra.Shared.Entities.Item", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("CategoryID")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("IsPicture")
                        .HasColumnType("INTEGER");

                    b.Property<string>("ItemContent")
                        .HasColumnType("TEXT");

                    b.HasKey("ID");

                    b.HasIndex("CategoryID");

                    b.ToTable("Items");
                });

            modelBuilder.Entity("Marshmellowmed_EllaShartiel_NectarShavit_RoniEbenEzra.Shared.Entities.User", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Email")
                        .HasColumnType("TEXT");

                    b.Property<string>("FirstName")
                        .HasColumnType("TEXT");

                    b.Property<string>("LastName")
                        .HasColumnType("TEXT");

                    b.HasKey("ID");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Marshmellowmed_EllaShartiel_NectarShavit_RoniEbenEzra.Shared.Entities.Category", b =>
                {
                    b.HasOne("Marshmellowmed_EllaShartiel_NectarShavit_RoniEbenEzra.Shared.Entities.Game", "CategoryGame")
                        .WithMany("GameCategories")
                        .HasForeignKey("GameID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("CategoryGame");
                });

            modelBuilder.Entity("Marshmellowmed_EllaShartiel_NectarShavit_RoniEbenEzra.Shared.Entities.Game", b =>
                {
                    b.HasOne("Marshmellowmed_EllaShartiel_NectarShavit_RoniEbenEzra.Shared.Entities.User", "GameUser")
                        .WithMany("UserGames")
                        .HasForeignKey("UserID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("GameUser");
                });

            modelBuilder.Entity("Marshmellowmed_EllaShartiel_NectarShavit_RoniEbenEzra.Shared.Entities.Item", b =>
                {
                    b.HasOne("Marshmellowmed_EllaShartiel_NectarShavit_RoniEbenEzra.Shared.Entities.Category", "ItemCategory")
                        .WithMany("CategoryItems")
                        .HasForeignKey("CategoryID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("ItemCategory");
                });

            modelBuilder.Entity("Marshmellowmed_EllaShartiel_NectarShavit_RoniEbenEzra.Shared.Entities.Category", b =>
                {
                    b.Navigation("CategoryItems");
                });

            modelBuilder.Entity("Marshmellowmed_EllaShartiel_NectarShavit_RoniEbenEzra.Shared.Entities.Game", b =>
                {
                    b.Navigation("GameCategories");
                });

            modelBuilder.Entity("Marshmellowmed_EllaShartiel_NectarShavit_RoniEbenEzra.Shared.Entities.User", b =>
                {
                    b.Navigation("UserGames");
                });
#pragma warning restore 612, 618
        }
    }
}