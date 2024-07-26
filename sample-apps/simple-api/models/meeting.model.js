const SuperbaseService = require("../services/supabase.service");

class Meeting {
  tableName = "meetings";

  get client() {
    return SuperbaseService.connect();
  }

  async create(meetingData) {
    const { data, error, status } = await this.client
      .from(this.tableName)
      .insert(meetingData)
      .select();
    if (error?.message) {
      throw this.getError(error, status);
    }
    return data;
  }

  getError(err, status) {
    const { message, details, code, hint } = err;
    const error = new Error(message);
    error.code = code;
    error.details = details;
    error.hint = hint;
    error.status = status;
    return error;
  }

  async findOne(meetingId) {
    const { data, error, status } = await this.client
      .from(this.tableName)
      .select()
      .eq("meetingId", meetingId);
    if (error?.message) {
      throw this.getError(error, status);
    }
    return data[0] ?? null;
  }

  async findAll() {
    const { data, error, status } = await this.client
      .from(this.tableName)
      .select();
    if (error?.message) {
      throw this.getError(error, status);
    }
    return data;
  }

  async update(meetingData) {
    const { meetingId, ...others } = meetingData;
    const { data, error, status } = await this.client
      .from(this.tableName)
      .update(others)
      .eq("meetingId", meetingId)
      .select();
    if (error?.message) {
      throw this.getError(error, status);
    }
    return data;
  }

  async destroy(meetingId) {
    const { error, status } = await this.client
      .from("countries")
      .delete()
      .eq("meetingId", meetingId);
    if (error?.message) {
      throw this.getError(error, status);
    }
    return {};
  }
}

module.exports = new Meeting();
