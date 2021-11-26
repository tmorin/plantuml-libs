# NoStroller


```text
material-4/Places/NoStroller
```

```text
include('material-4/Places/NoStroller')
```



| Illustration | NoStroller |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/NoStroller.png) | ![illustration for NoStroller](../../material-4/Places/NoStroller.Local.png) |




## NoStroller

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element NoStroller
include('material-4/Places/NoStroller')

' renders the element
NoStroller('NoStroller', 'No Stroller', 'an optional tech label')
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

' loads the Item which embeds the element NoStroller
include('material-4/Places/NoStroller')

' renders the element
NoStroller('NoStroller', 'No Stroller', 'an optional tech label')
@enduml
```

