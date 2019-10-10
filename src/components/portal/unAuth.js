import express from "express";

import mongoose from "mongoose";
const { Types } = mongoose;
const { ObjectId } = Types;

import { ACCOUNT_LEDGER_TYPE } from "../../config/constants";

import service from "./service";
import { throws } from "assert";
const router = express.Router();
// this include get user addUser i.e signup

router.post("/signup", async (req, res, next) => {
  const { err, user } = await service.addUser(req.body);
  if (err) next(err);
  res.send(user);
});

router.get("/user", async (req, res, next) => {
  const { err, user } = await service.getUser(req.body);
  if (err) next(err);
  else if (user) res.send(user);
  res.send("User Not Found");
});

// this include add grower, get single grower , getAllGrower
router.post("/grower", async (req, res, next) => {
  const { userId } = req.body;
  const { err: growerErr, addGrower: newGrower } = await service.addGrower(
    req.body
  );
  if (growerErr) next(growerErr);
  else {
    const { err: userErr, user: updatedUser } = await service.updateUser(
      { _id: ObjectId(userId) },
      { $addToSet: { growers: newGrower._id } }
    );
    res.send(newGrower);
  }
});

router.get("/grower", async (req, res, next) => {
  const { err, growerOne } = await service.getGrower(req.body);
  if (err) next(err);
  else if (growerOne) res.send(growerOne);
  res.send("Grower Not Found");
});

router.get("/growerAll", async (req, res, next) => {
  const { userId } = req.body;
  const { err, growerAll } = await service.getAllGrower({
    userId: { $eq: ObjectId(userId) }
  });
  if (err) next(err);
  else if (growerAll) {
    res.send(growerAll);
  }
  res.send("No Grower Found");
});

// this include add party, get single party, getAllParties
router.post("/party", async (req, res, next) => {
  const { userId } = req.body;
  const { err: partyErr, addParty: newParty } = await service.addParty(
    req.body
  );
  if (partyErr) next(partyErr);
  else {
    const { err: userErr, user: updatedUser } = await service.updateUser(
      { _id: ObjectId(userId) },
      { $addToSet: { parties: newParty._id } }
    );
    res.send(newParty);
  }
});

router.get("/party", async (req, res, next) => {
  const { err, partyOne } = await service.getParty(req.body);
  if (err) next(err);
  else if (partyOne) res.send(partyOne);
  else res.send("Party Not Found");
});

router.get("/partyAll", async (req, res, next) => {
  const { userId } = req.body;
  const { err, partyAll } = await service.getAllParties({
    userId: { $eq: ObjectId(userId) }
  });
  if (err) next(err);
  else if (partyAll) {
    res.send(partyAll);
  }
  res.send("No Party Found");
});

// add account ledger
router.post("/addAccountLedger", async (req, res, next) => {
  const { userId, type, remainingAmount,myAccount,PartyOrGrower } = req.body;
  const {
    err: Err,
    addAccountLedger: newAccountLedger
  } = await service.addAccountLedger(req.body);
  if (Err) next(Err);
  else if (type === ACCOUNT_LEDGER_TYPE[0]) {
    // updateding the party 1st
    const { err: Err, upParty: updatedParty } = await service.updateParty(
      { _id: ObjectId(PartyOrGrower) },
      {
        $addToSet: { accountLedgerParty: newAccountLedger._id },
        $set: {
          "account": remainingAmount
        }
      }
    );
    // updateing the user
    const { err: userErr, user: updatedUser } = await service.updateUser(
      { _id: ObjectId(userId) },
      { $addToSet: { accountLedger: newAccountLedger._id },
      $set: {
        "account": myAccount
      } }
    );
    res.send(newAccountLedger);
  } else if (type === ACCOUNT_LEDGER_TYPE[1]) {
    //   update the grower and user
    const { err: Err, upGrower: updatedGrower } = await service.updateGrower(
        { _id: ObjectId(PartyOrGrower) },
        {
          $addToSet: { accountLedgerGrower: newAccountLedger._id },
          $set: {
            "account": remainingAmount
          }
        }
      );
      // updateing the user
      const { err: userErr, user: updatedUser } = await service.updateUser(
        { _id: ObjectId(userId) },
        { $addToSet: { accountLedger: newAccountLedger._id },
        $set: {
          "account": myAccount
        } }
      );
    res.send(newAccountLedger);
  }
});

//get all parties by Type
router.get("/accountLedgerAll", async (req, res, next) => {
  const { userId,id } = req.body;
  const { err, accountAll } = await service.getAllAccountLedger({
    userId: { $eq: ObjectId(userId) },
    PartyOrGrower:{$eq:ObjectId(id)}
  });
  if (err) next(err);
  else if (accountAll.length) {
    res.status(200).json(accountAll)
    // res.send(accountAll);
  }else{
    res.status(400).json({message:"No account Found"})
  }
});

module.exports = router;
