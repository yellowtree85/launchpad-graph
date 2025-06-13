import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { CompoundedEarnings } from "../generated/schema"
import { CompoundedEarnings as CompoundedEarningsEvent } from "../generated/AllocationStaking/AllocationStaking"
import { handleCompoundedEarnings } from "../src/allocation-staking"
import { createCompoundedEarningsEvent } from "./allocation-staking-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let user = Address.fromString("0x0000000000000000000000000000000000000001")
    let pid = BigInt.fromI32(234)
    let amountAdded = BigInt.fromI32(234)
    let totalDeposited = BigInt.fromI32(234)
    let newCompoundedEarningsEvent = createCompoundedEarningsEvent(
      user,
      pid,
      amountAdded,
      totalDeposited
    )
    handleCompoundedEarnings(newCompoundedEarningsEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CompoundedEarnings created and stored", () => {
    assert.entityCount("CompoundedEarnings", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CompoundedEarnings",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "user",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CompoundedEarnings",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "pid",
      "234"
    )
    assert.fieldEquals(
      "CompoundedEarnings",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amountAdded",
      "234"
    )
    assert.fieldEquals(
      "CompoundedEarnings",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "totalDeposited",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
