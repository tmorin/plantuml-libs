# ArrowsUpDown


```text
fontawesome/Solid/ArrowsUpDown
```

```text
include('fontawesome/Solid/ArrowsUpDown')
```



| Illustration | ArrowsUpDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ArrowsUpDown.png) | ![illustration for ArrowsUpDown](../../fontawesome/Solid/ArrowsUpDown.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArrowsUpDownXs>`
- `<$ArrowsUpDownSm>`
- `<$ArrowsUpDownMd>`
- `<$ArrowsUpDownLg>`





## ArrowsUpDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ArrowsUpDown
include('fontawesome/Solid/ArrowsUpDown')

' renders the element
ArrowsUpDown('ArrowsUpDown', 'Arrows Up Down', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ArrowsUpDown
include('fontawesome/Solid/ArrowsUpDown')

' renders the element
ArrowsUpDown('ArrowsUpDown', 'Arrows Up Down', 'an optional tech label', 'an optional description')
@enduml
```

