import { RoleCardProps } from "@/types";
import Modal from "@/components/Modal";

export default function RoleCard({ onSelectRole, onClose }: RoleCardProps) {
  return (
    <Modal onClose={onClose} className="mx-4 flex w-full max-w-sm flex-col gap-4 rounded-lg border border-purple-200 bg-white p-8 shadow-xl dark:border-purple-800 dark:bg-gray-900">
      <h2 className="text-center text-xl font-semibold text-purple-700 dark:text-purple-400">
        Log in as
      </h2>
      <button
        onClick={() => onSelectRole("mentor")}
        className="w-full rounded-lg bg-purple-600 py-2 font-semibold text-white transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      >
        Mentor
      </button>
      <button
        onClick={() => onSelectRole("mentee")}
        className="w-full rounded-lg bg-purple-600 py-2 font-semibold text-white transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      >
        Mentee
      </button>
    </Modal>
  );
}
