# RiceBowl


```text
material-4/Places/RiceBowl
```

```text
include('material-4/Places/RiceBowl')
```



| Illustration | RiceBowl |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/RiceBowl.png) | ![illustration for RiceBowl](../../material-4/Places/RiceBowl.Local.png) |




## RiceBowl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element RiceBowl
include('material-4/Places/RiceBowl')

' renders the element
RiceBowl('RiceBowl', 'Rice Bowl', 'an optional tech label')
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

' loads the Item which embeds the element RiceBowl
include('material-4/Places/RiceBowl')

' renders the element
RiceBowl('RiceBowl', 'Rice Bowl', 'an optional tech label')
@enduml
```

