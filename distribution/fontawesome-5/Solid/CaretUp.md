# CaretUp


```text
fontawesome-5/Solid/CaretUp
```

```text
include('fontawesome-5/Solid/CaretUp')
```



| Illustration | CaretUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/CaretUp.png) | ![illustration for CaretUp](../../fontawesome-5/Solid/CaretUp.Local.png) |




## CaretUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CaretUp
include('fontawesome-5/Solid/CaretUp')

' renders the element
CaretUp('CaretUp', 'Caret Up', 'an optional tech label')
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

' loads the Item which embeds the element CaretUp
include('fontawesome-5/Solid/CaretUp')

' renders the element
CaretUp('CaretUp', 'Caret Up', 'an optional tech label')
@enduml
```

