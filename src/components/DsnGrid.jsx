import React from 'react';

export interface DsnGridProps {
    col?: number | 1,
    colTablet?: number | 1,
    colMobile?: number | 1,
    colGap?: number | string | 30,
    colGapTablet?: number | string | 30,
    colGapMobile?: number | string | 30,
    rowGap?: number | string | 30,
    rowGapTablet?: number | string | 30,
    rowGapMobile?: number | string | 30,
}

const  DsnGrid = React.forwardRef((props: DsnGridProps , ref)=> {

    const {
        className,
        col,
        colTablet,
        colMobile,
        colGap,
        colGapTablet,
        colGapMobile,
        rowGap,
        rowGapTablet,
        rowGapMobile,
        children
    } = props;

    const gapPx = ($param) => {
        if (!isNaN($param))
            return $param + "px";
        return $param;
    }



    return (
        <div

            style={{
                '--dsn-col-number': col,
                '--dsn-col-number-tablet': colTablet,
                '--dsn-col-number-mobile': colMobile,
                '--dsn-col-gap': gapPx(colGap),
                '--dsn-col-gap-tablet': gapPx(colGapTablet),
                '--dsn-col-gap-mobile': gapPx(colGapMobile),
                '--dsn-row-gap': gapPx(rowGap),
                '--dsn-row-gap-tablet': gapPx(rowGapTablet),
                '--dsn-row-gap-mobile': gapPx(rowGapMobile),
            }}
            className={`dsn-grid-layout ${className || ''}`}
            ref={ref}
        >
            {children}
        </div>
    );
});


DsnGrid.displayName = 'DsnGrid'

DsnGrid.defaultProps = {}

export default React.memo(DsnGrid);