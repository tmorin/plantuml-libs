# CaretSquareDown


```text
fontawesome-5/Regular/CaretSquareDown
```

```text
include('fontawesome-5/Regular/CaretSquareDown')
```



| Illustration | CaretSquareDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/CaretSquareDown.png) | ![illustration for CaretSquareDown](../../fontawesome-5/Regular/CaretSquareDown.Local.png) |




## CaretSquareDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CaretSquareDown
include('fontawesome-5/Regular/CaretSquareDown')

' renders the element
CaretSquareDown('CaretSquareDown', 'Caret Square Down', 'an optional tech label')
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

' loads the Item which embeds the element CaretSquareDown
include('fontawesome-5/Regular/CaretSquareDown')

' renders the element
CaretSquareDown('CaretSquareDown', 'Caret Square Down', 'an optional tech label')
@enduml
```

