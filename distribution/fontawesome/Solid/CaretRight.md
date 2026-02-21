# CaretRight


```text
fontawesome/Solid/CaretRight
```

```text
include('fontawesome/Solid/CaretRight')
```



| Illustration | CaretRight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CaretRight.png) | ![illustration for CaretRight](../../fontawesome/Solid/CaretRight.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CaretRightXs>`
- `<$CaretRightSm>`
- `<$CaretRightMd>`
- `<$CaretRightLg>`





## CaretRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CaretRight
include('fontawesome/Solid/CaretRight')

' renders the element
CaretRight('CaretRight', 'Caret Right', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CaretRight
include('fontawesome/Solid/CaretRight')

' renders the element
CaretRight('CaretRight', 'Caret Right', 'an optional tech label', 'an optional description')
@enduml
```

