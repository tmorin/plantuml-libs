# CaretLeft


```text
fontawesome-6/Solid/CaretLeft
```

```text
include('fontawesome-6/Solid/CaretLeft')
```



| Illustration | CaretLeft |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CaretLeft.png) | ![illustration for CaretLeft](../../fontawesome-6/Solid/CaretLeft.Local.png) |




## CaretLeft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CaretLeft
include('fontawesome-6/Solid/CaretLeft')

' renders the element
CaretLeft('CaretLeft', 'Caret Left', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CaretLeft
include('fontawesome-6/Solid/CaretLeft')

' renders the element
CaretLeft('CaretLeft', 'Caret Left', 'an optional tech label', 'an optional description')
@enduml
```

