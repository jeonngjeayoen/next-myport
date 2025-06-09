import { useEffect } from 'react';

export function usePathFollower(
    pathRef: React.RefObject<SVGPathElement>,
    targetRef: React.RefObject<HTMLElement>,
    duration = 6000
) {
    useEffect(() => {
        const path = pathRef.current;
        const target = targetRef.current;

        if (!path || !target) return;

        const totalLength = path.getTotalLength();

        let start: number | null = null;

        function animate(timestamp: number) {
            if (!start) start = timestamp;
            const elapsed = (timestamp - start) % duration;
            const progress = elapsed / duration;

            const currentLength = progress * totalLength;
            const point = path.getPointAtLength(currentLength);
            const nextPoint = path.getPointAtLength(currentLength + 1);

            const angleRad = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x);
            const angleDeg = angleRad * (180 / Math.PI);

            const svg = path.ownerSVGElement;
            if (!svg) return;

            const svgRect = svg.getBoundingClientRect();
            const pathBBox = path.getBBox();

            const scaleX = svgRect.width / pathBBox.width;
            const scaleY = svgRect.height / pathBBox.height;

            const x = point.x * scaleX;
            const y = point.y * scaleY;

            target.style.transform = `translate(${x}px, ${y}px) rotate(${angleDeg}deg)`;

            requestAnimationFrame(animate);
        }

        requestAnimationFrame(animate);
    }, [pathRef, targetRef, duration]);
}
