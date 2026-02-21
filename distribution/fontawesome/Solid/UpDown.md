# UpDown


```text
fontawesome/Solid/UpDown
```

```text
include('fontawesome/Solid/UpDown')
```



| Illustration | UpDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/UpDown.png) | ![illustration for UpDown](../../fontawesome/Solid/UpDown.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UpDownXs>`
- `<$UpDownSm>`
- `<$UpDownMd>`
- `<$UpDownLg>`





## UpDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element UpDown
include('fontawesome/Solid/UpDown')

' renders the element
UpDown('UpDown', 'Up Down', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UpDown
include('fontawesome/Solid/UpDown')

' renders the element
UpDown('UpDown', 'Up Down', 'an optional tech label', 'an optional description')
@enduml
```

