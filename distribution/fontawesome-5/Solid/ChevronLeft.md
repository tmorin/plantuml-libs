# ChevronLeft


```text
fontawesome-5/Solid/ChevronLeft
```

```text
include('fontawesome-5/Solid/ChevronLeft')
```



| Illustration | ChevronLeft |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ChevronLeft.png) | ![illustration for ChevronLeft](../../fontawesome-5/Solid/ChevronLeft.Local.png) |




## ChevronLeft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ChevronLeft
include('fontawesome-5/Solid/ChevronLeft')

' renders the element
ChevronLeft('ChevronLeft', 'Chevron Left', 'an optional tech label')
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

' loads the Item which embeds the element ChevronLeft
include('fontawesome-5/Solid/ChevronLeft')

' renders the element
ChevronLeft('ChevronLeft', 'Chevron Left', 'an optional tech label')
@enduml
```

