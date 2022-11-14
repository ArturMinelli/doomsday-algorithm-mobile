import React, { createContext, ReactNode, useEffect, useReducer, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { createNewCycleAction, emptyCyclesAction, finishCurrentCycleAction, loadStoredCyclesAction, stopTimerAction } from "../reducers/cycles/actions"
import { cyclesReducer } from "../reducers/cycles/reducer"
import { getRandomDate, getWeekday, WeekdayAnswer } from "../utils/dateGenrator"
import { language } from '../utils/localize'
import { I18n } from "i18n-js/typings"

interface CyclesContextType {
  cycles: Cycle[];
  activeCycleId: string | null;
  activeCycle: Cycle | undefined;
  passedMilliseconds: number;
  randomDate: Date;
  weekday: WeekdayAnswer;
  language: I18n;
  stopTimer: (userGuess: number) => void;
  finishCurrentCycle: () => void
  loadStoredCycles: () => void;
  createNewCycle: () => void;
  updateMilliseconds: (milliseconds: number) => void;
  emptyCycles: () => void;
}

export interface Cycle {
  id: string;
  randomDate: Date;
  weekday: WeekdayAnswer;
  userGuess?: number;
  startDate: Date;
  duration?: number;
}

interface CyclesContextProviderProps {
  children: ReactNode;
}

export const CyclesContext = createContext({} as CyclesContextType)

const CYCLES_STORAGE_KEY = "DoomsdayAlgorithm:cyclesState"

export function CyclesContextProvider({ children }: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(cyclesReducer, {
    cycles: [],
    activeCycleId: null,
  })

  const { cycles, activeCycleId } = cyclesState

  const [passedMilliseconds, setPassedMilliseconds] = useState<number>(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)
  const randomDate = activeCycle && activeCycle.randomDate
  const weekday = activeCycle && activeCycle.weekday

  async function loadStoredCycles() {
    const storedCycles = await AsyncStorage.getItem(CYCLES_STORAGE_KEY)

    if(storedCycles) {
      dispatch(loadStoredCyclesAction(JSON.parse(storedCycles)))
    }
  }

  function createNewCycle() {
    const randomDate = getRandomDate()
    const weekday = getWeekday(randomDate)

    const newCycle = {
      id: randomDate.toISOString(),
      randomDate: randomDate,
      weekday: weekday,
      startDate: new Date(),
    }
    setPassedMilliseconds(0)
    dispatch(createNewCycleAction(newCycle))
  }

  function stopTimer(userGuess: number) {
    dispatch(stopTimerAction(userGuess))
  }

  function finishCurrentCycle() {
    dispatch(finishCurrentCycleAction())
  }

  function emptyCycles() {
    dispatch(emptyCyclesAction())
  }

  function updateMilliseconds(milliseconds: number) {
    setPassedMilliseconds(milliseconds)
  }

  useEffect(() => {
    async function storeCycles() {
      await AsyncStorage.setItem(CYCLES_STORAGE_KEY, JSON.stringify(cycles))
    }

    storeCycles()
  }, [activeCycleId])

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycleId,
        activeCycle,
        passedMilliseconds,
        randomDate,
        weekday,
        language,
        loadStoredCycles,
        createNewCycle,
        stopTimer,
        finishCurrentCycle,
        updateMilliseconds,
        emptyCycles,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
