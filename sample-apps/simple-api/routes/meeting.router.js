const express = require("express");
const meetingModel = require("../models/meeting.model");
const { meetingValidator } = require("../validators");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const meetings = await meetingModel.findAll();
    return res.json(meetings);
  } catch (error) {
    return next(error);
  }
});

router.get("/:meetingId", async (req, res, next) => {
  try {
    const meetingId = req.params.meetingId;
    const meeting = await meetingModel.findOne(meetingId);
    if (!meeting) {
      return res.status(404).json({});
    }
    return res.json(meeting);
  } catch (error) {
    return next(error);
  }
});

router.post("/create", meetingValidator, async (req, res, next) => {
  try {
    const data = req.body;
    const meeting = await meetingModel.create(data);
    return res.status(201).json(meeting);
  } catch (error) {
    return next(error);
  }
});

router.put("/update", meetingValidator, async (req, res, next) => {
  try {
    const data = req.body;
    const meetings = await meetingModel.update(data);
    res.status(201).json(meetings);
  } catch (error) {
    return next(error);
  }
});

router.delete("/destroy/:meetingId", async (req, res, next) => {
  try {
    const meetingId = req.params.meetingId;
    await meetingModel.destroy(meetingId);
    res.status(204).json({});
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
