# custom-grid-jm
Customizable React grid component for demo application

Includes initial typescript uncompiled implementation (lib) and compiled usable component

To compile or change locally, keep:
/lib folder,
tsconfig.json, 
package.json, 
package-lock.json,
readme, 
npmignore 
gitignore

To use Grid, import "Grid" component from module, then add required parameters:

>data -> implemented data object (object that implements IDataSource, see below for more details)</p>
>headers -> set displayed headers into grid (hierarchically IHeader -> IGrouping -> IColumn)</p>
>pageSize -> size of single page (initial loaded and added on every scroll)</p>
>cacheSize -> size of internal Grid cache, total of items kept constantly after multiple loads</p>

To implement a custom header use an object of type IHeader:
>header.name = "HEADERNAME" (will not be rendered)</p>
>header.headers = contains an IGrouping object, a subheader which renders</p> 
>a subheader name and the adjacent nested columns.
