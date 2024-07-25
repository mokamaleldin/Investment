import { calculateInvestmentResults, formatter } from '../util/investment.js';
export default function Result({ userOutput }) {
    const resultData = calculateInvestmentResults(userOutput)
    const initialInvestment = resultData[0].valueEndOfYear - resultData[0].annualInvestment;

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total interest</th>
                    <th>Invested capital</th>
                </tr>
            </thead>
            <tbody>
                { resultData.map((data, index) => {
                    const totalInterest = data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment;
                    const totalAmountInvested = data.valueEndOfYear - totalInterest;
                    return (
                        <tr key={ index }>
                            <td>{ data.year }</td>
                            <td>{ formatter.format(data.valueEndOfYear) }</td>
                            <td>{ formatter.format(data.interest) }</td>
                            <td>{ formatter.format(totalInterest) }</td>
                            <td> { formatter.format(totalAmountInvested) }</td>
                        </tr>
                    );
                }) }
                {/* <tr>
                    <td>1</td>
                    <td>$100</td>
                    <td>January</td>
                    <td>$100</td>
                    <td>100E</td>
                </tr> */}
            </tbody>
        </table>
    );
}