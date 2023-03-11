import UserModel from "../models/userModel.js";
import catchErrorAsync from "../utils/catchErrorAsync.js";

// USER STATS
const searchUser = catchErrorAsync(async (req, res, next) => {
  const s = req.params.search;
  const data = await UserModel.find({
    or: [{ name: { $regex: s } }],
  });
  res.status(200).json({
    message: "success",
    total: data.length,
    data,
  });
});

const aggregate = catchErrorAsync(async (req, res, next) => {
  const data = await UserModel.aggregate([
    {
      $group: {
        _id: "$name",
        Total: { $sum: 1 },
        // averagePrice:{
        //     $avg:"$price"
        // }
      },
    },
    // {
    //   $addFields: {
    //     total: "$_id",
    //   },
    // },
    {
      $project: {
        _id: 0,
      },
    },
    
  ]);
  res.status(200).json({
    message: "success",
    data,
  });
});

export { searchUser, aggregate };
