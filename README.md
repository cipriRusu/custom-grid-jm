# custom-grid-jm
Customizable React grid component for demo application.
Includes initial typescript uncompiled implementation (lib) and compiled usable component.
To compile or change locally, keep:
/lib folder, tsconfig.json,package.json, package-lock.json, readme, npmignore, gitignore

To use Grid, import "Grid" component from module, then add the required parameters:

>**data** : Object that implements the IDataSource interface. Used by the Grid component internally to fetch necessary data.(see below for more details)
>
>**headers** : Grid header sturcture (see below for more details)
>
>**pageSize** : Number of entries per page
>
>**pageCache** : Number of entries stored in cache

### Data Object ###

Local implementation for the IDataSource interface (usually to fetch data from a data repository). Exposes two methods: Get and GetTotal.
Get will be called each time there is a state set/change, with the new parameters : sort (ISortStats type), filter (IFilter[]), pageSize (number), page(number).
GetTotal will be called to get the total number of items which satisfy the current state

**ISortStats** contains the currently applied sort, which implements the following members: sort_type (asc/desc), field_id, field_type.
Use the received parameters in your API/Repository to get the sorted data.

**IFilter[]** contains a collection of currently applied filters. A single IFilter item implements the following members: name(field on which filtering is applied),
type (data type of the field), values[] (one or more values which the filter holds), operator(id of the applied operator from Grid).

### Notes ###
This Grid DataObject implementation does not support async/await calls inside the Get/GetTotal methods, only supports fetching synchronously. The repository
https://github.com/cipriRusu/jm-grid-implementation/tree/grid-backend-support contains a modified version of the Grid which does support such operations.
This implementation was kept sync on purpose to be used in the demo application.

### Header ###

The header object contains the local implementation for the IHeader[] interface, which contains all the resources needed to render the Grid header.
The headers parameter should contain at least a single IHeader element.

**IHeader** represents a single displayed whole page header which contains two members: name (not rendered) and an IGrouping implementation</p>
**IGrouping** represents a grouping nested inside the header which also contains two members: name (rendered) and an array of type IColumn[]</p>
**IColumn** repsesents a single column displayed inside the header, which contains all the necessary data to render a column properly.</p>

An example of an IColumn implementation:

```
let Email = {} as IColumn;
Email.name = "Email";
Email.size = ColumnSizes.StandardColumn;
Email.collapsable = ColumnCollapsable.collapsable;
Email.minVisibility = MinimumVisibility.SmallVisible;
```

**name** represents the column name, rendered onscreen.</p>
**size** represents the column size (in css fr unit), taken on screen.</p>
**collapsable** represents if the column will be collapsable in mobile screen size.</p>
**minVisibility** represents the minimum visibility threshold at which the column will be visible before will hide inside the extended row.</p>

The simplest header implementation would look something like this:
```
let columnToDisplay = {} as IColumn;
columnToDisplay.name = "ColumnNameRendered";
columnToDisplay.size = ColumnSizes.StandardColumn;
columnToDisplay.collapsable = ColumnCollapsable.collapsable;
columnToDisplay.minVisibility = MinimumVisibility.MaxVisible;

let headerGroupingToDisplay = {} as IGrouping;
headerGroupingToDisplay.name = "GroupingNameRendered"
headerGroupingToDisplay.columns = [columnToDisplay];

let headerToDisplay = {} as IHeader;
headerToDisplay.name = "nameOfHeader" // will not be displayed on screen, used for filtering purposes (in case we need to render multiple headers)
headerToDisplay.headers = [headerGroupingToDisplay]

export const HeaderToExportAndAssignToGrid;
```
