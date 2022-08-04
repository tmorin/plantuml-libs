# NoBackpack


```text
material-4/Places/NoBackpack
```

```text
include('material-4/Places/NoBackpack')
```



| Illustration | NoBackpack |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/NoBackpack.png) | ![illustration for NoBackpack](../../material-4/Places/NoBackpack.Local.png) |




## NoBackpack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element NoBackpack
include('material-4/Places/NoBackpack')

' renders the element
NoBackpack('NoBackpack', 'No Backpack', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element NoBackpack
include('material-4/Places/NoBackpack')

' renders the element
NoBackpack('NoBackpack', 'No Backpack', 'an optional tech label', 'an optional description')
@enduml
```

