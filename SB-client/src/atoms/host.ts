import { atom } from "recoil";

export const hostAtom = atom({
    key: "host",
    default: "http://192.168.1.8:3000/"
})