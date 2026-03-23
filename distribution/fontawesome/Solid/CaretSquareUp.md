# CaretSquareUp


```text
fontawesome/Solid/CaretSquareUp
```

```text
include('fontawesome/Solid/CaretSquareUp')
```



| Illustration | CaretSquareUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CaretSquareUp.png) | ![illustration for CaretSquareUp](../../fontawesome/Solid/CaretSquareUp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CaretSquareUpXs>`
- `<$CaretSquareUpSm>`
- `<$CaretSquareUpMd>`
- `<$CaretSquareUpLg>`





## CaretSquareUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CaretSquareUp
include('fontawesome/Solid/CaretSquareUp')

' renders the element
CaretSquareUp('CaretSquareUp', 'Caret Square Up', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CaretSquareUp
include('fontawesome/Solid/CaretSquareUp')

' renders the element
CaretSquareUp('CaretSquareUp', 'Caret Square Up', 'an optional tech label', 'an optional description')
@enduml
```

