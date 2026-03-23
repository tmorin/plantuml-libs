# SortNumericDown


```text
fontawesome/Solid/SortNumericDown
```

```text
include('fontawesome/Solid/SortNumericDown')
```



| Illustration | SortNumericDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SortNumericDown.png) | ![illustration for SortNumericDown](../../fontawesome/Solid/SortNumericDown.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SortNumericDownXs>`
- `<$SortNumericDownSm>`
- `<$SortNumericDownMd>`
- `<$SortNumericDownLg>`





## SortNumericDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SortNumericDown
include('fontawesome/Solid/SortNumericDown')

' renders the element
SortNumericDown('SortNumericDown', 'Sort Numeric Down', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SortNumericDown
include('fontawesome/Solid/SortNumericDown')

' renders the element
SortNumericDown('SortNumericDown', 'Sort Numeric Down', 'an optional tech label', 'an optional description')
@enduml
```

