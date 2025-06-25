"use client"

import { useState } from "react"
import star from "/star.svg"
import locationIcon from "/location.svg"
import deleteIcon from "/delete.svg"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { CheckCircle, Trash2 } from "lucide-react"


const FavoritesItem = ({ picture, name, location, ratings, onDelete }) => {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)

  const handleDeleteClick = () => {
    setShowConfirmDialog(true)
  }

  const handleConfirmDelete = () => {
    setShowConfirmDialog(false)
    // Simulate delete action
    setTimeout(() => {
      setShowSuccessDialog(true)
      // Call the onDelete callback if provided
      onDelete?.()
    }, 300)
  }

  const handleCancelDelete = () => {
    setShowConfirmDialog(false)
  }

  const handleSuccessClose = () => {
    setShowSuccessDialog(false)
  }

  return (
    <>
      <div className="bg-white w-full rounded-md shadow-lg flex mb-2 justify-between p-4">
        <div className="flex items-center gap-4">
          <img src={picture || "/placeholder.svg"} alt={name} className="rounded-md w-16 h-16 object-cover" />
          <div className="flex flex-col gap-3">
            <p className="text-black font-semibold">{name}</p>
            <p className="text-black text-xs flex gap-2 items-center">
              <img src={locationIcon || "/placeholder.svg"} alt="Location" className="w-4 h-4" />
              {location}
            </p>
            <p className="text-black text-xs flex gap-2 items-center">
              <img src={star || "/placeholder.svg"} alt="Rating" className="w-4 h-4" />
              {ratings.toFixed(1)} Ratings
            </p>
          </div>
        </div>
        <img
          src={deleteIcon || "/placeholder.svg"}
          alt="Delete"
          className="cursor-pointer w-5 h-5 hover:opacity-70 transition-opacity"
          onClick={handleDeleteClick}
        />
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className={"flex flex-col items-start gap-4"}>
            <DialogTitle className="flex text-primary items-center gap-2">
              <Trash2 className="w-5 h-5" />
              Confirm Delete
            </DialogTitle>
            <DialogDescription>
              Are you sure you want to remove <strong className="text-primary">{name}</strong> from your favorites? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-4 sm:gap-5">
            <Button
              variant="outline"
              onClick={handleCancelDelete}
              className="bg-white text-primary px-4 py-2 rounded-lg border border-primary hover:bg-gray-50"
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleConfirmDelete} className="bg-primary px-4 py-2 rounded-lg text-white hover:bg-primary/90">
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className={"flex flex-col items-start gap-4"}>
            <DialogTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Successfully Deleted
            </DialogTitle>
            <DialogDescription>
              <strong className="text-primary">{name}</strong> has been removed from your favorites.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={handleSuccessClose} className="bg-primary p-2 rounded-lg hover:bg-primary/90 text-white">
              OK
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default FavoritesItem
