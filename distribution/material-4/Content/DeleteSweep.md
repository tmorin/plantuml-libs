# DeleteSweep


```text
material-4/Content/DeleteSweep
```

```text
include('material-4/Content/DeleteSweep')
```



| Illustration | DeleteSweep |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/DeleteSweep.png) | ![illustration for DeleteSweep](../../material-4/Content/DeleteSweep.Local.png) |




## DeleteSweep

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element DeleteSweep
include('material-4/Content/DeleteSweep')

' renders the element
DeleteSweep('DeleteSweep', 'Delete Sweep', 'an optional tech label')
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

' loads the Item which embeds the element DeleteSweep
include('material-4/Content/DeleteSweep')

' renders the element
DeleteSweep('DeleteSweep', 'Delete Sweep', 'an optional tech label')
@enduml
```

