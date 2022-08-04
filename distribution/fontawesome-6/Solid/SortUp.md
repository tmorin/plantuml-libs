# SortUp


```text
fontawesome-6/Solid/SortUp
```

```text
include('fontawesome-6/Solid/SortUp')
```



| Illustration | SortUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/SortUp.png) | ![illustration for SortUp](../../fontawesome-6/Solid/SortUp.Local.png) |




## SortUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SortUp
include('fontawesome-6/Solid/SortUp')

' renders the element
SortUp('SortUp', 'Sort Up', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SortUp
include('fontawesome-6/Solid/SortUp')

' renders the element
SortUp('SortUp', 'Sort Up', 'an optional tech label', 'an optional description')
@enduml
```

