-- migrate:up
CREATE TABLE IF NOT EXISTS public."user"(
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at timestamptz DEFAULT 'now()',
  updated_at timestamptz,
  username text NOT NULL UNIQUE,
  "password" text NOT NULL,
  custom_data jsonb DEFAULT jsonb_build_object()
);

CREATE TRIGGER assign_user_updated_at
  BEFORE UPDATE ON public."user"
  FOR EACH ROW
  EXECUTE PROCEDURE assign_update_date();

-- migrate:down
DROP TABLE IF EXISTS public."user";

DROP TRIGGER assign_user_updated_at ON public."user";
