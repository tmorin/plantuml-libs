# DollyBox


```text
fontawesome/Solid/DollyBox
```

```text
include('fontawesome/Solid/DollyBox')
```



| Illustration | DollyBox |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/DollyBox.png) | ![illustration for DollyBox](../../fontawesome/Solid/DollyBox.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DollyBoxXs>`
- `<$DollyBoxSm>`
- `<$DollyBoxMd>`
- `<$DollyBoxLg>`





## DollyBox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element DollyBox
include('fontawesome/Solid/DollyBox')

' renders the element
DollyBox('DollyBox', 'Dolly Box', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DollyBox
include('fontawesome/Solid/DollyBox')

' renders the element
DollyBox('DollyBox', 'Dolly Box', 'an optional tech label', 'an optional description')
@enduml
```

