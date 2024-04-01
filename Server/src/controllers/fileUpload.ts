import { Request, Response } from "express";
import { PyqModel } from "../models/Pyq";


export const uploadThroughFiles=async(req,res)=>{
    try{
        const {Branch,Semester,Role}=req.body;

        const pyqDetail=new PyqModel({Branch,Semester,Role});
        await pyqDetail.save();
        res.status(200).json({ message: "File uploaded successfully" });


    }catch (error) {
        console.log(error);
        res.status(500).json({ error: (error as Error).message });
    }
};
