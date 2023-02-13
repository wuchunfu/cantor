// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {internal} from '../models';
import {menu} from '../models';

export function BatchUploadFile():Promise<internal.Response>;

export function CheckFile(arg1:string):Promise<void>;

export function CopyFileUrl(arg1:string):Promise<internal.Response>;

export function DeleteFile(arg1:string):Promise<internal.Response>;

export function GetConfig():Promise<internal.Response>;

export function GetList():Promise<internal.Response>;

export function Menu():Promise<menu.Menu>;

export function SetConfig(arg1:string):Promise<internal.Response>;

export function SyncDatabase():Promise<void>;

export function UpdateFileName(arg1:string,arg2:string):Promise<internal.Response>;

export function Upload(arg1:string,arg2:Array<boolean>):Promise<string>;