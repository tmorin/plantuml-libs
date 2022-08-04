# LocalGroceryStore


```text
material-4/Maps/LocalGroceryStore
```

```text
include('material-4/Maps/LocalGroceryStore')
```



| Illustration | LocalGroceryStore |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/LocalGroceryStore.png) | ![illustration for LocalGroceryStore](../../material-4/Maps/LocalGroceryStore.Local.png) |




## LocalGroceryStore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LocalGroceryStore
include('material-4/Maps/LocalGroceryStore')

' renders the element
LocalGroceryStore('LocalGroceryStore', 'Local Grocery Store', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LocalGroceryStore
include('material-4/Maps/LocalGroceryStore')

' renders the element
LocalGroceryStore('LocalGroceryStore', 'Local Grocery Store', 'an optional tech label', 'an optional description')
@enduml
```

