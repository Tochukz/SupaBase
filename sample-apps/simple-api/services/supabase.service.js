const { createClient } = require("@supabase/supabase-js");

class SuperbaseService {
  static connect() {
    const { SUPABASE_KEY, SUPABASE_URL } = process.env;
    return createClient(SUPABASE_URL, SUPABASE_KEY);
  }
}

module.exports = SuperbaseService;
