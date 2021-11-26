# CaretDown


```text
fontawesome-5/Solid/CaretDown
```

```text
include('fontawesome-5/Solid/CaretDown')
```



| Illustration | CaretDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/CaretDown.png) | ![illustration for CaretDown](../../fontawesome-5/Solid/CaretDown.Local.png) |




## CaretDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CaretDown
include('fontawesome-5/Solid/CaretDown')

' renders the element
CaretDown('CaretDown', 'Caret Down', 'an optional tech label')
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

' loads the Item which embeds the element CaretDown
include('fontawesome-5/Solid/CaretDown')

' renders the element
CaretDown('CaretDown', 'Caret Down', 'an optional tech label')
@enduml
```

