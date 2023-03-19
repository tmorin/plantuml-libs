# CaretDown


```text
fontawesome-6/Solid/CaretDown
```

```text
include('fontawesome-6/Solid/CaretDown')
```



| Illustration | CaretDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CaretDown.png) | ![illustration for CaretDown](../../fontawesome-6/Solid/CaretDown.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CaretDownXs>`
- `<$CaretDownSm>`
- `<$CaretDownMd>`
- `<$CaretDownLg>`





## CaretDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CaretDown
include('fontawesome-6/Solid/CaretDown')

' renders the element
CaretDown('CaretDown', 'Caret Down', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CaretDown
include('fontawesome-6/Solid/CaretDown')

' renders the element
CaretDown('CaretDown', 'Caret Down', 'an optional tech label', 'an optional description')
@enduml
```

