# CaretSquareRight


```text
fontawesome-5/Solid/CaretSquareRight
```

```text
include('fontawesome-5/Solid/CaretSquareRight')
```



| Illustration | CaretSquareRight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/CaretSquareRight.png) | ![illustration for CaretSquareRight](../../fontawesome-5/Solid/CaretSquareRight.Local.png) |




## CaretSquareRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CaretSquareRight
include('fontawesome-5/Solid/CaretSquareRight')

' renders the element
CaretSquareRight('CaretSquareRight', 'Caret Square Right', 'an optional tech label')
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

' loads the Item which embeds the element CaretSquareRight
include('fontawesome-5/Solid/CaretSquareRight')

' renders the element
CaretSquareRight('CaretSquareRight', 'Caret Square Right', 'an optional tech label')
@enduml
```

