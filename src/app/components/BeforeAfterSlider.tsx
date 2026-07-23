import Image from 'next/image';

/**
 * Side-by-side Before / After comparison.
 *
 * Flex-grow values are derived from each image's aspect ratio so that both
 * images always render at the same height regardless of container width:
 *   Before (1906×913) → grow: 2088  (≈ 1906/913 × 1000)
 *   After  (1272×904) → grow: 1407  (≈ 1272/904 × 1000)
 */
export default function BeforeAfterSlider({
  before,
  after,
}: {
  before: string;
  after: string;
}) {
  return (
    <div className="flex items-start overflow-hidden rounded-xl mb-6">
      {/* Before */}
      <div className="relative min-w-0 flex-1">
        <Image
          src={before}
          alt="Before redesign"
          width={1906}
          height={913}
          unoptimized
          loading="eager"
          className="block w-full h-auto"
          draggable={false}
        />
        <span className="absolute top-2 left-2 z-10 text-[10px] font-semibold text-white bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded-full">
          Before
        </span>
      </div>

      {/* Divider */}
      <div
        className="flex-none self-stretch w-[3px]"
        style={{
          background: 'linear-gradient(to bottom, #c084fc, #9333ea)',
          boxShadow: '0 0 0 1px #fff',
        }}
      />

      {/* After */}
      <div className="relative min-w-0 flex-1">
        <Image
          src={after}
          alt="After redesign"
          width={1272}
          height={904}
          unoptimized
          loading="eager"
          className="block w-full h-auto"
          draggable={false}
        />
        <span className="absolute top-2 right-2 z-10 text-[10px] font-semibold text-white bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded-full">
          After
        </span>
      </div>
    </div>
  );
}


