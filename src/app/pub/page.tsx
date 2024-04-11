"use client";

import { Card } from "@/components/ui/card";
import GraphFeedbacksPerMonth from "@/components/ui/components-pub/graph-feedbacks-per-month";
import GraphPercentRecommendProduct from "@/components/ui/components-pub/graph-percent-recommend-product";
import GraphPercentSatisfaction from "@/components/ui/components-pub/graph-percent-satisfaction";

export default function Pub() {
  return (
    <div>
      <h1>Nike</h1>
      <div className="grid grid-cols-3 grid-rows-2 gap-5 w-4/5">
        <Card className="h-64 w-64">
          <GraphFeedbacksPerMonth />
        </Card>
        <Card className="h-64 w-64">
          <GraphPercentRecommendProduct />
        </Card>
        <Card className="h-64 w-64">
          <GraphPercentSatisfaction />
        </Card>
        <Card className="col-span-2">
          <table>
            <thead>
              <tr>
                <th>Email</th>
                <th>Feedbacks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Email 1</td>
                <td>Feedback 1</td>
              </tr>
              <tr>
                <td>Email 2</td>
                <td>Feedback 2</td>
              </tr>
              <tr>
                <td>Email 3</td>
                <td>Feedback 3</td>
              </tr>
              <tr>
                <td>Email 4</td>
                <td>Feedback 4</td>
              </tr>
              <tr>
                <td>Email 5</td>
                <td>Feedback 5</td>
              </tr>
            </tbody>
          </table>
        </Card>
        <Card>
        <table>
            <thead>
              <tr>
                <th>Email</th>
                <th>Commentaires</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Email 1</td>
                <td>Commentaire 1</td>
              </tr>
              <tr>
                <td>Email 2</td>
                <td>Commentaire 2</td>
              </tr>
              <tr>
                <td>Email 3</td>
                <td>Commentaire 3</td>
              </tr>
              <tr>
                <td>Email 4</td>
                <td>Commentaire 4</td>
              </tr>
              <tr>
                <td>Email 5</td>
                <td>Commentaire 5</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
}

/* 
    - Tableau avec tous les retours feedbacks ✔️
    - Pourcentage de satisfaction ✔️
    - Pourcentage de recommandation du produit ✔️
    - Commentaires ✔️
    - Nombre de feedbacks submit par mois ✔️
*/
