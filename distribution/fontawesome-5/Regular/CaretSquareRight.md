# CaretSquareRight


```text
fontawesome-5/Regular/CaretSquareRight
```

```text
include('fontawesome-5/Regular/CaretSquareRight')
```



| Illustration | CaretSquareRight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/CaretSquareRight.png) | ![illustration for CaretSquareRight](../../fontawesome-5/Regular/CaretSquareRight.Local.png) |




## CaretSquareRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CaretSquareRight
include('fontawesome-5/Regular/CaretSquareRight')

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
include('fontawesome-5/Regular/CaretSquareRight')

' renders the element
CaretSquareRight('CaretSquareRight', 'Caret Square Right', 'an optional tech label')
@enduml
```

