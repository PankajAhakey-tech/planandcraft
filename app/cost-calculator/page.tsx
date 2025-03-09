"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"
import Link from "next/link"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function CostCalculator() {
  const [location, setLocation] = useState("")
  const [houseType, setHouseType] = useState("")
  const [area, setArea] = useState("")
  const [costs, setCosts] = useState({
    planningCost: 0,
    finishingCost: 0,
    fittingCost: 0,
    maxCost: 0,
  })

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (!houseType || isNaN(Number(area)) || Number(area) < 100 || Number(area) > 10000) {
      alert("Please enter valid inputs")
      return
    }

    const baseCostPerSqFt = {
      Premium: 2000,
      Basic: 1500,
    }

    const finishingCostMultiplier = 1.0
    const fittingCostMultiplier = 1.1
    const maxCostMultiplier = 1.1

    const baseEstimation = baseCostPerSqFt[houseType as keyof typeof baseCostPerSqFt] * Number(area)
    const finishingCost = baseEstimation * finishingCostMultiplier
    const fittingCost = baseEstimation * fittingCostMultiplier
    const maxCost = baseEstimation * maxCostMultiplier

    setCosts({
      planningCost: baseEstimation,
      finishingCost,
      fittingCost,
      maxCost,
    })
  }

  const chartData = {
    labels: ["Planning", "Finishing", "Fitting", "Maximum"],
    datasets: [
      {
        label: "Cost in ₹",
        data: [costs.planningCost, costs.finishingCost, costs.fittingCost, costs.maxCost],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Construction Cost Breakdown",
      },
    },
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4 text-center">House Construction Cost Calculator</h1>
      <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
        Plan your construction budget with our easy-to-use calculator. Enter your details below to get an estimate of
        your construction costs.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Enter Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="location">Location (City)</Label>
                <Input
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter city name"
                />
              </div>
              <div>
                <Label htmlFor="housetype">House Type</Label>
                <Select value={houseType} onValueChange={setHouseType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select house type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Basic">Basic</SelectItem>
                    <SelectItem value="Premium">Premium</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="area">Area (in sq ft)</Label>
                <Input
                  id="area"
                  type="number"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder="Enter area in sq ft"
                  min="100"
                  max="10000"
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 transition-colors">
                Calculate Cost
              </Button>
            </form>
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Cost Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p>
                Planning Cost: <span className="font-bold planningcost">₹{costs.planningCost.toLocaleString()}</span>
              </p>
              <p>
                Finishing Cost: <span className="font-bold finishingcost">₹{costs.finishingCost.toLocaleString()}</span>
              </p>
              <p>
                Fitting Cost: <span className="font-bold fittingcost">₹{costs.fittingCost.toLocaleString()}</span>
              </p>
              <p>
                Maximum Cost: <span className="font-bold maxcost">₹{costs.maxCost.toLocaleString()}</span>
              </p>
            </div>
            <div className="mt-8">
              <Bar data={chartData} options={chartOptions} />
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-12 text-center text-sm text-gray-500">
        <p>
          Note: This calculator provides an estimate based on average construction costs. Actual costs may vary based on
          specific requirements, materials, and local factors.
        </p>
        <p className="mt-2">
          For a detailed and accurate quote, please{" "}
          <Link href="/contact" className="text-blue-600 hover:underline">
            contact us
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

