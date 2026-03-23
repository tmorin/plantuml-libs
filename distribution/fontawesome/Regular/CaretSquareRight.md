# CaretSquareRight


```text
fontawesome/Regular/CaretSquareRight
```

```text
include('fontawesome/Regular/CaretSquareRight')
```



| Illustration | CaretSquareRight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/CaretSquareRight.png) | ![illustration for CaretSquareRight](../../fontawesome/Regular/CaretSquareRight.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CaretSquareRightXs>`
- `<$CaretSquareRightSm>`
- `<$CaretSquareRightMd>`
- `<$CaretSquareRightLg>`





## CaretSquareRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CaretSquareRight
include('fontawesome/Regular/CaretSquareRight')

' renders the element
CaretSquareRight('CaretSquareRight', 'Caret Square Right', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element CaretSquareRight
include('fontawesome/Regular/CaretSquareRight')

' renders the element
CaretSquareRight('CaretSquareRight', 'Caret Square Right', 'an optional tech label', 'an optional description')
@enduml
```

