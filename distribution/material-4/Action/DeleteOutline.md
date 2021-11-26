# DeleteOutline


```text
material-4/Action/DeleteOutline
```

```text
include('material-4/Action/DeleteOutline')
```



| Illustration | DeleteOutline |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/DeleteOutline.png) | ![illustration for DeleteOutline](../../material-4/Action/DeleteOutline.Local.png) |




## DeleteOutline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element DeleteOutline
include('material-4/Action/DeleteOutline')

' renders the element
DeleteOutline('DeleteOutline', 'Delete Outline', 'an optional tech label')
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

' loads the Item which embeds the element DeleteOutline
include('material-4/Action/DeleteOutline')

' renders the element
DeleteOutline('DeleteOutline', 'Delete Outline', 'an optional tech label')
@enduml
```

