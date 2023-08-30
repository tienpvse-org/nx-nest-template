-- migrate:up
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE OR REPLACE FUNCTION assign_update_date()
  RETURNS TRIGGER
  AS $$
BEGIN
  NEW.updated_at = 'now()';
  RETURN NEW;
END;
$$
LANGUAGE plpgsql;

-- migrate:down
DROP EXTENSION IF EXISTS "uuid-ossp";

DROP FUNCTION IF EXISTS assign_update_date;

