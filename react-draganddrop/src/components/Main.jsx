import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { useState } from 'react'
import dummyData from '../dammyData'
import Card from './Card'

function Main() {
  const [data,setData] = useState(dummyData)

  // source:dragの開始 destination:dropの終了
  // ⇒ 二つの位置を入れ替え
  const onDragEnd = (result) => {
    // resultの中のsourceとdestinationの情報を格納
    // console.log(result)
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
    // TODO カラム間の移動
    const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
    console.log(sourceColIndex);
    //動かし終わったcolumnの配列の番号を取得()
    const destinationColIndex = data.findIndex(
      (e) => e.id === destination.droppableId
    );
    console.log(destinationColIndex);
    const sourseCol = data[sourceColIndex];
    const destinationCol = data[destinationColIndex];
    //動かし始めたタスクに属していたカラムの中のタスクを全て取得
    //後でsplice関数でその動かし始めたタスクを削除するため
    //sourceTaskに配列をコピーしておく(破壊操作を後でするため)
    const sourceTask = [...sourseCol.tasks];
    console.log(sourceTask);
    //動かし終わったタスクに属していたカラムの中のタスクを全て取得
    //後でsplice関数でその動かし始めたタスクを追加するため
    const destinationTask = [...destinationCol.tasks];
    console.log(destinationTask);
    //前のカラムから削除
    const [removed] = sourceTask.splice(source.index, 1);
    //後のカラムに追加
    destinationTask.splice(destination.index, 0, removed);
    data[sourceColIndex].tasks = sourceTask;
    data[destinationColIndex].tasks = destinationTask;
    setData(data);
  } else {
    // TODO 同じカラム内での移動
    // どのセクションでドラッグされたかを特定 ex)今からやること=>index:0
    const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
    // console.log(sourceColIndex)
    const sourceCol = data[sourceColIndex];
    // 削除前に配列をコピーする
    const sourceTask = [...sourceCol.tasks];
    // spliceの引数が2つの場合、第一引数のindexから第二引数の数だけ要素を削除する
    // []無かったら[{}]の形のためobjectとして認識される⇒[]で配列として認識させる
    const [removed] = sourceTask.splice(source.index, 1);
    // 削除した要素をdestinationのindexに挿入 0は削除しないという意味 ⇒追加
    sourceTask.splice(destination.index, 0, removed);
    // console.log(sourceTask)
    data[sourceColIndex].tasks = sourceTask;

    setData(data);
    }
  };



  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='trello'>
        {data.map((section)=>(
          <Droppable key={section.id} droppableId={section.id}>
            {(provided)=>(
              <div 
              className='trello-section'
              ref={provided.innerRef}
              {...provided.droppableProps}
              >
                <div className='trello-section-title'>{section.title}</div>
                <div className="trello-section-context">
                  {/* index: map関数を回す度に0,1,2とインクリメント */}
                  {section.tasks.map((task,index)=>(
                    <Draggable 
                      draggableId={task.id} 
                      index={index}
                      key={task.id}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            // スプレッド構文にすることでドラッグ中のスタイルを維持
                            ...provided.draggableProps.style,
                            opacity: snapshot.isDragging ? "0.5" : "1",
                          }}
                        >
                        {/* Cardコンポーネントで挟んでる要素がCard.jsxのchiledrenに渡される*/}
                        <Card>{task.title}</Card>
                      </div>
                      )}
                    </Draggable>
                  ))}
                  {/* 移動と共に箱の大きさが変化してしまうのを避ける */}
                  {provided.placeholder}
                </div>

              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>

  )
}

export default Main
