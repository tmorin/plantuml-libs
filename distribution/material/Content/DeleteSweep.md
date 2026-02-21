# DeleteSweep


```text
material/Content/DeleteSweep
```

```text
include('material/Content/DeleteSweep')
```



| Illustration | DeleteSweep |
| :---: | :---: |
| ![illustration for Illustration](../../material/Content/DeleteSweep.png) | ![illustration for DeleteSweep](../../material/Content/DeleteSweep.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DeleteSweepXs>`
- `<$DeleteSweepSm>`
- `<$DeleteSweepMd>`
- `<$DeleteSweepLg>`





## DeleteSweep

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element DeleteSweep
include('material/Content/DeleteSweep')

' renders the element
DeleteSweep('DeleteSweep', 'Delete Sweep', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element DeleteSweep
include('material/Content/DeleteSweep')

' renders the element
DeleteSweep('DeleteSweep', 'Delete Sweep', 'an optional tech label', 'an optional description')
@enduml
```

