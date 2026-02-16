-- 1. DROP EXISTING TABLES AND DEPENDENCIES (Clean Slate)
drop table if exists cases cascade;
drop table if exists testimonials cascade;

-- 2. CREATE CASES TABLE
-- Using 'sort_order' because 'order' is a reserved SQL keyword
create table cases (
  id text primary key,
  title text,
  client text,
  year text,
  cover_url text,
  category text,
  industry text,
  location text,
  description text,
  challenge text,
  category_en text,
  industry_en text,
  location_en text,
  description_en text,
  challenge_en text,
  blocks jsonb,
  sort_order integer
);

-- 3. CREATE TESTIMONIALS TABLE
create table testimonials (
  id text primary key,
  text text,
  text_en text,
  author text,
  company text
);

-- 4. ENABLE RLS
alter table cases enable row level security;
alter table testimonials enable row level security;

-- 5. CREATE PERMISSIVE POLICIES (Allow Anon/Public to Read & Write)
create policy "Public Select Cases" on cases for select using (true);
create policy "Public Insert Cases" on cases for insert with check (true);
create policy "Public Update Cases" on cases for update using (true);
create policy "Public Delete Cases" on cases for delete using (true);

create policy "Public Select Testimonials" on testimonials for select using (true);
create policy "Public Insert Testimonials" on testimonials for insert with check (true);
create policy "Public Update Testimonials" on testimonials for update using (true);
create policy "Public Delete Testimonials" on testimonials for delete using (true);

-- 6. GRANT PERMISSIONS (Crucial for Anon Key access)
grant all on table cases to anon;
grant all on table testimonials to anon;
grant all on table cases to service_role;
grant all on table testimonials to service_role;

-- 7. RELOAD SCHEMA CACHE (Fixes "Could not find column in schema cache" errors)
NOTIFY pgrst, 'reload schema';
