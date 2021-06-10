# CaretSquareUp


```text
fontawesome-5/Solid/CaretSquareUp
```

```text
include('fontawesome-5/Solid/CaretSquareUp')
```



| Illustration | CaretSquareUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/CaretSquareUp.png) | ![illustration for CaretSquareUp](../../fontawesome-5/Solid/CaretSquareUp.Local.png) |




## CaretSquareUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CaretSquareUp
include('fontawesome-5/Solid/CaretSquareUp')

' renders the element
CaretSquareUp('CaretSquareUp', 'Caret Square Up', 'an optional tech label')
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

' loads the Item which embeds the element CaretSquareUp
include('fontawesome-5/Solid/CaretSquareUp')

' renders the element
CaretSquareUp('CaretSquareUp', 'Caret Square Up', 'an optional tech label')
@enduml
```

