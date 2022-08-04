# NorthWest


```text
material-4/Navigation/NorthWest
```

```text
include('material-4/Navigation/NorthWest')
```



| Illustration | NorthWest |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Navigation/NorthWest.png) | ![illustration for NorthWest](../../material-4/Navigation/NorthWest.Local.png) |




## NorthWest

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element NorthWest
include('material-4/Navigation/NorthWest')

' renders the element
NorthWest('NorthWest', 'North West', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element NorthWest
include('material-4/Navigation/NorthWest')

' renders the element
NorthWest('NorthWest', 'North West', 'an optional tech label', 'an optional description')
@enduml
```

