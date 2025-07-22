export const idlFactory = ({ IDL }) => {
  const Result = IDL.Variant({ 'ok' : IDL.Null, 'err' : IDL.Text });
  const Result_1 = IDL.Variant({ 'ok' : IDL.Nat, 'err' : IDL.Text });
  const TraderProfile = IDL.Record({
    'totalTrades' : IDL.Nat,
    'principal' : IDL.Principal,
    'positiveTrades' : IDL.Nat,
    'rating' : IDL.Float64,
    'telegramHandle' : IDL.Text,
  });
  const Time = IDL.Int;
  const TradeState = IDL.Variant({
    'Disputed' : IDL.Null,
    'PaymentReceived' : IDL.Null,
    'PaymentSent' : IDL.Null,
    'Cancelled' : IDL.Null,
    'Created' : IDL.Null,
    'Completed' : IDL.Null,
  });
  const Trade = IDL.Record({
    'id' : IDL.Nat,
    'disputeReason' : IDL.Opt(IDL.Text),
    'createdAt' : Time,
    'seller' : IDL.Principal,
    'paymentSentAt' : IDL.Opt(Time),
    'state' : TradeState,
    'releaseRequestedAt' : IDL.Opt(Time),
    'ngnAmount' : IDL.Nat,
    'buyer' : IDL.Principal,
    'paymentReceivedAt' : IDL.Opt(Time),
    'usdtAmount' : IDL.Nat,
  });
  const EscrowSystem = IDL.Service({
    'adminCancelTrade' : IDL.Func([IDL.Nat, IDL.Text], [Result], []),
    'confirmPaymentReceived' : IDL.Func([IDL.Nat], [Result], []),
    'confirmPaymentSent' : IDL.Func([IDL.Nat], [Result], []),
    'createTrade' : IDL.Func([IDL.Principal, IDL.Nat, IDL.Nat], [Result_1], []),
    'getProfile' : IDL.Func(
        [IDL.Principal],
        [IDL.Opt(TraderProfile)],
        ['query'],
      ),
    'getTrade' : IDL.Func([IDL.Nat], [IDL.Opt(Trade)], ['query']),
    'initiateDispute' : IDL.Func([IDL.Nat, IDL.Text], [Result], []),
    'listAllProfiles' : IDL.Func([], [IDL.Vec(TraderProfile)], ['query']),
    'listAllTrades' : IDL.Func([], [IDL.Vec(Trade)], ['query']),
    'listUserTrades' : IDL.Func([IDL.Principal], [IDL.Vec(Trade)], ['query']),
    'releaseCrypto' : IDL.Func([IDL.Nat], [Result], []),
    'updateProfile' : IDL.Func([IDL.Text], [Result], []),
  });
  return EscrowSystem;
};
export const init = ({ IDL }) => { return [IDL.Principal, IDL.Principal]; };
