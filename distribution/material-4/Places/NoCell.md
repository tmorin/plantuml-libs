# NoCell


```text
material-4/Places/NoCell
```

```text
include('material-4/Places/NoCell')
```



| Illustration | NoCell |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/NoCell.png) | ![illustration for NoCell](../../material-4/Places/NoCell.Local.png) |




## NoCell

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element NoCell
include('material-4/Places/NoCell')

' renders the element
NoCell('NoCell', 'No Cell', 'an optional tech label')
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

' loads the Item which embeds the element NoCell
include('material-4/Places/NoCell')

' renders the element
NoCell('NoCell', 'No Cell', 'an optional tech label')
@enduml
```

