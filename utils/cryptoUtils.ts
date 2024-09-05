import "./elliptic-types";
import * as elliptic from "elliptic";

var EC = elliptic.ec;

export const ec = new EC('secp256k1');