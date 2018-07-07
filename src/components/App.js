import React, {Component} from 'react';
import './App.css';
import {DragDropContext} from "react-beautiful-dnd";
import CustomTextInput from "./RefExamples/CustomTextInput";
import PersonVsDivBoi from "./RefExamples/HTMLRefVsReactRef";

class App extends Component {

    // Optional function
    // start: Dragstart (draggableId, type, source (droppableId and index)
    // index tells where the Draggable was on start of
    /**
     * Optional function
     *
     * Hock called when drag starts.
     *
     * start: DragStart {
     *  draggableId: DraggableId -- id of Draggable that now dragging
     *  type: TypeId -- type of Draggable now dragging
     *  source: DraggableLocation -- combo of droppableId and index (index of where dragging item started
     *  within a dropppable)
     * }
     *
     * Foresight: Highly recommended that you use this function to block
     * updates to all Draggable and Droppable components during a drag.
     */
    onDragStart = () => {
      return '';
    };

    /**
     * Optional function
     * Hook called when:
     * 1-position of Draggable changes
     * 2-Draggable is now over a different Droppable
     * 3-Draggable is now over NO droppable
     *
     * update: DragUpdate {
     *  ...DragStart,
     *  destination: ?DraggableLocation (may not have a destinateion, i.e. drag to nowhere == null)
     * }
     *
     * Foresight: May have performance issues if you add a lot to this method.
     */
    onDragUpdate = () => {

    };

    /**
     * REQUIRED! Must result in a synchronous reordering of a list of Draggables
     *
     * result: DropResult {
     *  ...DragUpdate,      -- destination property from upadate: location of where Draggable ended or null
     *  reason: DropReason  -- reason drop occured, useful in creating messagin in HookProvided > announce
     * }
     */
    onDragEnd = () => {
        return '';
    };

    // Recommended by docs that DragDropContext wraps your entire application (similar to Redux)
    render() {
        return (
            <DragDropContext
                onDragStart={this.onDragStart}
                onDragUpdate={this.onDragUpdate}
                onDragEnd={this.onDragEnd}
            >
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Welcome to React Beautiful DND</h1>
                    </header>
                </div>


                <CustomTextInput/>
                <PersonVsDivBoi/>
            </DragDropContext>


        );
    }
}

export default App;
