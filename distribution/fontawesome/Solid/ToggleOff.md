# ToggleOff


```text
fontawesome/Solid/ToggleOff
```

```text
include('fontawesome/Solid/ToggleOff')
```



| Illustration | ToggleOff |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ToggleOff.png) | ![illustration for ToggleOff](../../fontawesome/Solid/ToggleOff.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ToggleOffXs>`
- `<$ToggleOffSm>`
- `<$ToggleOffMd>`
- `<$ToggleOffLg>`





## ToggleOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ToggleOff
include('fontawesome/Solid/ToggleOff')

' renders the element
ToggleOff('ToggleOff', 'Toggle Off', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ToggleOff
include('fontawesome/Solid/ToggleOff')

' renders the element
ToggleOff('ToggleOff', 'Toggle Off', 'an optional tech label', 'an optional description')
@enduml
```

