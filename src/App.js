import { useState } from "react";

function Square({ value, onSquareClick, possibleNodeValues }) {
  return (
    <button
      className={`square row ${possibleNodeValues[value]}`}
      onClick={onSquareClick}
    ></button>
  );
}

const possibleNodeValuesOnInput = ["null", "unallocated", "allocated"];

const possibleBranchValuesOnResult = ["null", "unallocated"];

const possibleNodeValuesOnResult = ["null", "donor", "target", "mutation"];

function getValue(oldValue, possibleNodeValues) {
  console.log(oldValue, possibleNodeValues);
  if (
    typeof oldValue === "undefined" ||
    oldValue === null ||
    possibleNodeValues.length - 1 === oldValue
  ) {
    return 0;
  } else {
    return oldValue + 1;
  }
}

function Board({
  tree,
  name,
  updateTree,
  possibleNodeValues,
  possibleBranchValues
}) {
  function handleSquareClick(col, row, posVals = possibleNodeValues) {
    console.log("clicking ", col, row);
    let newTree = tree.slice();
    let newCol = newTree[col].slice();
    const oldValue = newCol[row];
    const newValue = getValue(oldValue, posVals);
    newCol[row] = newValue;
    newTree[col] = newCol;
    updateTree(newTree);
  }

  return (
    <div className={`${name}`}>
      <div className="title">{name}</div>
      <div className="flextree">
        <div className="node">
          <Square
            possibleNodeValues={possibleNodeValues}
            value={tree[0][0]}
            onSquareClick={() => handleSquareClick(0, 0)}
          />
        </div>
        <div className="branch">
          <Square
            possibleNodeValues={possibleBranchValues}
            value={tree[1][0]}
            onSquareClick={() => handleSquareClick(1, 0, possibleBranchValues)}
          />
          <Square
            possibleNodeValues={possibleBranchValues}
            value={tree[1][1]}
            onSquareClick={() => handleSquareClick(1, 1, possibleBranchValues)}
          />
        </div>
        <div className="node">
          <Square
            possibleNodeValues={possibleNodeValues}
            value={tree[2][0]}
            onSquareClick={() => handleSquareClick(2, 0)}
          />
          <Square
            possibleNodeValues={possibleNodeValues}
            value={tree[2][1]}
            onSquareClick={() => handleSquareClick(2, 1)}
          />
        </div>
        <div className="branch">
          <Square
            possibleNodeValues={possibleBranchValues}
            value={tree[3][0]}
            onSquareClick={() => handleSquareClick(3, 0, possibleBranchValues)}
          />
          <Square
            possibleNodeValues={possibleBranchValues}
            value={tree[3][1]}
            onSquareClick={() => handleSquareClick(3, 1, possibleBranchValues)}
          />
          <Square
            possibleNodeValues={possibleBranchValues}
            value={tree[3][2]}
            onSquareClick={() => handleSquareClick(3, 2, possibleBranchValues)}
          />
          <Square
            possibleNodeValues={possibleBranchValues}
            value={tree[3][3]}
            onSquareClick={() => handleSquareClick(3, 3, possibleBranchValues)}
          />
        </div>
        <div className="node">
          <Square
            possibleNodeValues={possibleNodeValues}
            value={tree[4][0]}
            onSquareClick={() => handleSquareClick(4, 0)}
          />
          <Square
            possibleNodeValues={possibleNodeValues}
            value={tree[4][1]}
            onSquareClick={() => handleSquareClick(4, 1)}
          />
          <Square
            possibleNodeValues={possibleNodeValues}
            value={tree[4][2]}
            onSquareClick={() => handleSquareClick(4, 2)}
          />
        </div>
        <div className="branch">
          <Square
            possibleNodeValues={possibleBranchValues}
            value={tree[5][0]}
            onSquareClick={() => handleSquareClick(5, 0, possibleBranchValues)}
          />
          <Square
            possibleNodeValues={possibleBranchValues}
            value={tree[5][1]}
            onSquareClick={() => handleSquareClick(5, 1, possibleBranchValues)}
          />
          <Square
            possibleNodeValues={possibleBranchValues}
            value={tree[5][2]}
            onSquareClick={() => handleSquareClick(5, 2, possibleBranchValues)}
          />
          <Square
            possibleNodeValues={possibleBranchValues}
            value={tree[5][3]}
            onSquareClick={() => handleSquareClick(5, 3, possibleBranchValues)}
          />
          <Square
            possibleNodeValues={possibleBranchValues}
            value={tree[5][4]}
            onSquareClick={() => handleSquareClick(5, 4, possibleBranchValues)}
          />
          <Square
            possibleNodeValues={possibleBranchValues}
            value={tree[5][5]}
            onSquareClick={() => handleSquareClick(5, 5, possibleBranchValues)}
          />
        </div>
        <div className="node">
          <Square
            possibleNodeValues={possibleNodeValues}
            value={tree[6][0]}
            onSquareClick={() => handleSquareClick(6, 0)}
          />
          <Square
            possibleNodeValues={possibleNodeValues}
            value={tree[6][1]}
            onSquareClick={() => handleSquareClick(6, 1)}
          />
          <Square
            possibleNodeValues={possibleNodeValues}
            value={tree[6][2]}
            onSquareClick={() => handleSquareClick(6, 2)}
          />
          <Square
            possibleNodeValues={possibleNodeValues}
            value={tree[6][3]}
            onSquareClick={() => handleSquareClick(6, 3)}
          />
        </div>
        <div className="branch">
          <Square
            possibleNodeValues={possibleBranchValues}
            value={tree[7][0]}
            onSquareClick={() => handleSquareClick(7, 0, possibleBranchValues)}
          />
          <Square
            possibleNodeValues={possibleBranchValues}
            value={tree[7][1]}
            onSquareClick={() => handleSquareClick(7, 1, possibleBranchValues)}
          />
          <Square
            possibleNodeValues={possibleBranchValues}
            value={tree[7][2]}
            onSquareClick={() => handleSquareClick(7, 2, possibleBranchValues)}
          />
          <Square
            possibleNodeValues={possibleBranchValues}
            value={tree[7][3]}
            onSquareClick={() => handleSquareClick(7, 3, possibleBranchValues)}
          />
          <Square
            possibleNodeValues={possibleBranchValues}
            value={tree[7][4]}
            onSquareClick={() => handleSquareClick(7, 4, possibleBranchValues)}
          />
          <Square
            possibleNodeValues={possibleBranchValues}
            value={tree[7][5]}
            onSquareClick={() => handleSquareClick(7, 5, possibleBranchValues)}
          />
          <Square
            possibleNodeValues={possibleBranchValues}
            value={tree[7][6]}
            onSquareClick={() => handleSquareClick(7, 6, possibleBranchValues)}
          />
          <Square
            possibleNodeValues={possibleBranchValues}
            value={tree[7][7]}
            onSquareClick={() => handleSquareClick(7, 7, possibleBranchValues)}
          />
        </div>
        <div className="node">
          <Square
            possibleNodeValues={possibleNodeValues}
            value={tree[8][0]}
            onSquareClick={() => handleSquareClick(8, 0)}
          />
          <Square
            possibleNodeValues={possibleNodeValues}
            value={tree[8][1]}
            onSquareClick={() => handleSquareClick(8, 1)}
          />
          <Square
            possibleNodeValues={possibleNodeValues}
            value={tree[8][2]}
            onSquareClick={() => handleSquareClick(8, 2)}
          />
          <Square
            possibleNodeValues={possibleNodeValues}
            value={tree[8][3]}
            onSquareClick={() => handleSquareClick(8, 3)}
          />
          <Square
            possibleNodeValues={possibleNodeValues}
            value={tree[8][4]}
            onSquareClick={() => handleSquareClick(8, 4)}
          />
        </div>
      </div>
    </div>
  );
}

export default function Game() {
  const [tree, setTree] = useState(
    Array(3).fill(Array(9).fill(Array(8).fill(0)))
  );

  function handleUpdateTree(treeNumber, newTree) {
    let treeClone = tree.slice();
    treeClone[treeNumber] = newTree;
    setTree(treeClone);
  }

  return (
    <>
      <div className="inputs">
        <Board
          tree={tree[0]}
          updateTree={(newTree) => handleUpdateTree(0, newTree)}
          name="donorTree"
          possibleNodeValues={possibleNodeValuesOnInput}
          possibleBranchValues={possibleNodeValuesOnInput}
        />
        <Board
          tree={tree[1]}
          updateTree={(newTree) => handleUpdateTree(1, newTree)}
          name="targetTree"
          possibleNodeValues={possibleNodeValuesOnInput}
          possibleBranchValues={possibleNodeValuesOnInput}
        />
      </div>
      <div className="result">
        <Board
          tree={tree[2]}
          updateTree={(newTree) => handleUpdateTree(2, newTree)}
          name="resultTree"
          possibleNodeValues={possibleNodeValuesOnResult}
          possibleBranchValues={possibleBranchValuesOnResult}
        />
        <pre>{`${JSON.stringify(tree)}`}</pre>
      </div>
    </>
  );
}
