import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/button";

interface InviteGuestStepProps {
  openGuestModal: () => void;
  openConfirmTripModal: () => void;
  emailsToInvite: string[];
}
export function InviteGuestStep({
  emailsToInvite,
  openConfirmTripModal,
  openGuestModal,
}: InviteGuestStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <button
        type="button"
        onClick={openGuestModal}
        className="flex items-center gap-2 flex-1"
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length > 0 ? (
          <span className="text-zinc-100 text-lg flex-1 text-left">
            {emailsToInvite.length} pessoa(s) convidada(s)
          </span>
        ) : (
          <span className="text-zinc-400 text-lg flex-1 text-left">
            Quem estará na viajem?
          </span>
        )}
      </button>

      <div className="w-px h-6 bg-zinc-800" />
      <Button onClick={openConfirmTripModal} variant="primary">
        Confirmar viajem
        <ArrowRight className="size-5" />
      </Button>
    </div>
  );
}