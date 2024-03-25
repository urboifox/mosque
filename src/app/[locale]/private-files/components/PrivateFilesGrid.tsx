import NoContent from "@/components/ui/NoContent";
import PrivateFileCard from "./PrivateFileCard";

export default function PrivateFilesGrid({
  privateFiles,
  locale,
}: {
  privateFiles: PrivateFileResponse[];
  locale: string;
}) {
  return (
    <section className="section">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-10">
        {privateFiles.length > 0 ? (
          privateFiles.map((file, i) => {
            return <PrivateFileCard key={i} data={file} locale={locale} />;
          })
        ) : (
          <div className="text-center py-10">
            <NoContent />
          </div>
        )}
      </div>
    </section>
  );
}
