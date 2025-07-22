import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface EscrowSystem {
  'adminCancelTrade' : ActorMethod<[bigint, string], Result>,
  'confirmPaymentReceived' : ActorMethod<[bigint], Result>,
  'confirmPaymentSent' : ActorMethod<[bigint], Result>,
  'createTrade' : ActorMethod<[Principal, bigint, bigint], Result_1>,
  'getProfile' : ActorMethod<[Principal], [] | [TraderProfile]>,
  'getTrade' : ActorMethod<[bigint], [] | [Trade]>,
  'initiateDispute' : ActorMethod<[bigint, string], Result>,
  'listAllProfiles' : ActorMethod<[], Array<TraderProfile>>,
  'listAllTrades' : ActorMethod<[], Array<Trade>>,
  'listUserTrades' : ActorMethod<[Principal], Array<Trade>>,
  'releaseCrypto' : ActorMethod<[bigint], Result>,
  'updateProfile' : ActorMethod<[string], Result>,
}
export type Result = { 'ok' : null } |
  { 'err' : string };
export type Result_1 = { 'ok' : bigint } |
  { 'err' : string };
export type Time = bigint;
export interface Trade {
  'id' : bigint,
  'disputeReason' : [] | [string],
  'createdAt' : Time,
  'seller' : Principal,
  'paymentSentAt' : [] | [Time],
  'state' : TradeState,
  'releaseRequestedAt' : [] | [Time],
  'ngnAmount' : bigint,
  'buyer' : Principal,
  'paymentReceivedAt' : [] | [Time],
  'usdtAmount' : bigint,
}
export type TradeState = { 'Disputed' : null } |
  { 'PaymentReceived' : null } |
  { 'PaymentSent' : null } |
  { 'Cancelled' : null } |
  { 'Created' : null } |
  { 'Completed' : null };
export interface TraderProfile {
  'totalTrades' : bigint,
  'principal' : Principal,
  'positiveTrades' : bigint,
  'rating' : number,
  'telegramHandle' : string,
}
export interface _SERVICE extends EscrowSystem {}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
