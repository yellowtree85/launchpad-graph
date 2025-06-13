import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  CompoundedEarnings,
  Deposit,
  EmergencyWithdraw,
  OwnershipTransferred,
  Withdraw
} from "../generated/AllocationStaking/AllocationStaking"

export function createCompoundedEarningsEvent(
  user: Address,
  pid: BigInt,
  amountAdded: BigInt,
  totalDeposited: BigInt
): CompoundedEarnings {
  let compoundedEarningsEvent = changetype<CompoundedEarnings>(newMockEvent())

  compoundedEarningsEvent.parameters = new Array()

  compoundedEarningsEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  compoundedEarningsEvent.parameters.push(
    new ethereum.EventParam("pid", ethereum.Value.fromUnsignedBigInt(pid))
  )
  compoundedEarningsEvent.parameters.push(
    new ethereum.EventParam(
      "amountAdded",
      ethereum.Value.fromUnsignedBigInt(amountAdded)
    )
  )
  compoundedEarningsEvent.parameters.push(
    new ethereum.EventParam(
      "totalDeposited",
      ethereum.Value.fromUnsignedBigInt(totalDeposited)
    )
  )

  return compoundedEarningsEvent
}

export function createDepositEvent(
  user: Address,
  pid: BigInt,
  amount: BigInt
): Deposit {
  let depositEvent = changetype<Deposit>(newMockEvent())

  depositEvent.parameters = new Array()

  depositEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("pid", ethereum.Value.fromUnsignedBigInt(pid))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return depositEvent
}

export function createEmergencyWithdrawEvent(
  user: Address,
  pid: BigInt,
  amount: BigInt
): EmergencyWithdraw {
  let emergencyWithdrawEvent = changetype<EmergencyWithdraw>(newMockEvent())

  emergencyWithdrawEvent.parameters = new Array()

  emergencyWithdrawEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  emergencyWithdrawEvent.parameters.push(
    new ethereum.EventParam("pid", ethereum.Value.fromUnsignedBigInt(pid))
  )
  emergencyWithdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return emergencyWithdrawEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent =
    changetype<OwnershipTransferred>(newMockEvent())

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createWithdrawEvent(
  user: Address,
  pid: BigInt,
  amount: BigInt
): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("pid", ethereum.Value.fromUnsignedBigInt(pid))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawEvent
}
