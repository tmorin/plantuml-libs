# SortAlphaUp


```text
fontawesome-5/Solid/SortAlphaUp
```

```text
include('fontawesome-5/Solid/SortAlphaUp')
```



| Illustration | SortAlphaUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/SortAlphaUp.png) | ![illustration for SortAlphaUp](../../fontawesome-5/Solid/SortAlphaUp.Local.png) |




## SortAlphaUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element SortAlphaUp
include('fontawesome-5/Solid/SortAlphaUp')

' renders the element
SortAlphaUp('SortAlphaUp', 'Sort Alpha Up', 'an optional tech label')
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

' loads the Item which embeds the element SortAlphaUp
include('fontawesome-5/Solid/SortAlphaUp')

' renders the element
SortAlphaUp('SortAlphaUp', 'Sort Alpha Up', 'an optional tech label')
@enduml
```

