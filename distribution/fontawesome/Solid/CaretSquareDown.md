# CaretSquareDown


```text
fontawesome/Solid/CaretSquareDown
```

```text
include('fontawesome/Solid/CaretSquareDown')
```



| Illustration | CaretSquareDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CaretSquareDown.png) | ![illustration for CaretSquareDown](../../fontawesome/Solid/CaretSquareDown.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CaretSquareDownXs>`
- `<$CaretSquareDownSm>`
- `<$CaretSquareDownMd>`
- `<$CaretSquareDownLg>`





## CaretSquareDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CaretSquareDown
include('fontawesome/Solid/CaretSquareDown')

' renders the element
CaretSquareDown('CaretSquareDown', 'Caret Square Down', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CaretSquareDown
include('fontawesome/Solid/CaretSquareDown')

' renders the element
CaretSquareDown('CaretSquareDown', 'Caret Square Down', 'an optional tech label', 'an optional description')
@enduml
```

