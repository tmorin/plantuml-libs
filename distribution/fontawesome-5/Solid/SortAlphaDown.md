# SortAlphaDown


```text
fontawesome-5/Solid/SortAlphaDown
```

```text
include('fontawesome-5/Solid/SortAlphaDown')
```



| Illustration | SortAlphaDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/SortAlphaDown.png) | ![illustration for SortAlphaDown](../../fontawesome-5/Solid/SortAlphaDown.Local.png) |




## SortAlphaDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element SortAlphaDown
include('fontawesome-5/Solid/SortAlphaDown')

' renders the element
SortAlphaDown('SortAlphaDown', 'Sort Alpha Down', 'an optional tech label')
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

' loads the Item which embeds the element SortAlphaDown
include('fontawesome-5/Solid/SortAlphaDown')

' renders the element
SortAlphaDown('SortAlphaDown', 'Sort Alpha Down', 'an optional tech label')
@enduml
```

