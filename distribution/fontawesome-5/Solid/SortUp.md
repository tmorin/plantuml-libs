# SortUp


```text
fontawesome-5/Solid/SortUp
```

```text
include('fontawesome-5/Solid/SortUp')
```



| Illustration | SortUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/SortUp.png) | ![illustration for SortUp](../../fontawesome-5/Solid/SortUp.Local.png) |




## SortUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element SortUp
include('fontawesome-5/Solid/SortUp')

' renders the element
SortUp('SortUp', 'Sort Up', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element SortUp
include('fontawesome-5/Solid/SortUp')

' renders the element
SortUp('SortUp', 'Sort Up', 'an optional tech label')
@enduml
```

