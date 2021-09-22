import React, { useState } from "react";
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBCard, MDBCardBody, MDBCardHeader, MDBCardText } from "mdbreact";
import { Link } from "react-router-dom";
import { ResponsiveLine } from '@nivo/line';


export default function Dashboard(props: any) {
    const data = [        
        {
            "id": "Performance Chart",
            "color": "hsl(349, 70%, 50%)",
            "data": [
                {
                    "x": "Story 1",
                    "y": 70
                },
                {
                    "x": "Story 2",
                    "y": 50
                },
                {
                    "x": "Story 3",
                    "y": 70
                },
                {
                    "x": "Story 4",
                    "y": 40
                },
                {
                    "x": "Story 5",
                    "y": 60
                },
                {
                    "x": "Story 6",
                    "y": 40
                },
                {
                    "x": "Story 7",
                    "y": 80
                },
                {
                    "x": "Story 8",
                    "y": 60
                },
                
            ]
        }
    ];
    return (
        <div className="container" style={{ height: "500px", }}>
            <MDBContainer>
                <MDBCard style={{ width: "100%", marginTop: "1rem" }}>
                    <MDBCardHeader color="primary-color deep-orange lighten-1">Dashboard</MDBCardHeader>
                    <MDBCardBody>
                        {/* <MDBCardTitle>Special title treatment</MDBCardTitle> */}
                        <MDBCardText>
                        </MDBCardText>
                        <div style={{ height: "500px" }}>
                            <MyResponsiveLine data={data} />
                        </div>
                    </MDBCardBody>
                </MDBCard>

            </MDBContainer>
        </div>
    );
}

export const MyResponsiveLine = ({ data }: any) => (
    <ResponsiveLine
        data={data}
        //margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        margin={{ top: 50, right: 200, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        //yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        yScale={{ type: 'linear', min: 0, max: 100, stacked: true, reverse: false }}
        //yFormat=" >-.2f"
        // yFormat={value =>
        //     `${Number(value).toLocaleString('ru-RU', {
        //         minimumFractionDigits: 2,
        //     })} ₽`}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Stories',
            legendOffset: 36,
            legendPosition: 'middle'
        } as any}
        axisLeft={{
            format: (value: any) =>
                `${value}%`,
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Points Percentage',
            legendOffset: -50,
            legendPosition: 'middle'
        } as any}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        enableArea={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
);