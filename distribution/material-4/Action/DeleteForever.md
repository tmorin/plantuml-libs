# DeleteForever


```text
material-4/Action/DeleteForever
```

```text
include('material-4/Action/DeleteForever')
```



| Illustration | DeleteForever |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/DeleteForever.png) | ![illustration for DeleteForever](../../material-4/Action/DeleteForever.Local.png) |




## DeleteForever

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element DeleteForever
include('material-4/Action/DeleteForever')

' renders the element
DeleteForever('DeleteForever', 'Delete Forever', 'an optional tech label')
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

' loads the Item which embeds the element DeleteForever
include('material-4/Action/DeleteForever')

' renders the element
DeleteForever('DeleteForever', 'Delete Forever', 'an optional tech label')
@enduml
```

