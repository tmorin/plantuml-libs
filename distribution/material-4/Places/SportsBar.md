# SportsBar


```text
material-4/Places/SportsBar
```

```text
include('material-4/Places/SportsBar')
```



| Illustration | SportsBar |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/SportsBar.png) | ![illustration for SportsBar](../../material-4/Places/SportsBar.Local.png) |




## SportsBar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SportsBar
include('material-4/Places/SportsBar')

' renders the element
SportsBar('SportsBar', 'Sports Bar', 'an optional tech label')
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

' loads the Item which embeds the element SportsBar
include('material-4/Places/SportsBar')

' renders the element
SportsBar('SportsBar', 'Sports Bar', 'an optional tech label')
@enduml
```

