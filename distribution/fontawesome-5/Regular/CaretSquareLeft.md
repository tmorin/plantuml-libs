# CaretSquareLeft


```text
fontawesome-5/Regular/CaretSquareLeft
```

```text
include('fontawesome-5/Regular/CaretSquareLeft')
```



| Illustration | CaretSquareLeft |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/CaretSquareLeft.png) | ![illustration for CaretSquareLeft](../../fontawesome-5/Regular/CaretSquareLeft.Local.png) |




## CaretSquareLeft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CaretSquareLeft
include('fontawesome-5/Regular/CaretSquareLeft')

' renders the element
CaretSquareLeft('CaretSquareLeft', 'Caret Square Left', 'an optional tech label')
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

' loads the Item which embeds the element CaretSquareLeft
include('fontawesome-5/Regular/CaretSquareLeft')

' renders the element
CaretSquareLeft('CaretSquareLeft', 'Caret Square Left', 'an optional tech label')
@enduml
```

