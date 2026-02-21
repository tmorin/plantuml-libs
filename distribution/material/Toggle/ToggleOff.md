# ToggleOff


```text
material/Toggle/ToggleOff
```

```text
include('material/Toggle/ToggleOff')
```



| Illustration | ToggleOff |
| :---: | :---: |
| ![illustration for Illustration](../../material/Toggle/ToggleOff.png) | ![illustration for ToggleOff](../../material/Toggle/ToggleOff.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element ToggleOff
include('material/Toggle/ToggleOff')

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
include('material/bootstrap')

' loads the Item which embeds the element ToggleOff
include('material/Toggle/ToggleOff')

' renders the element
ToggleOff('ToggleOff', 'Toggle Off', 'an optional tech label', 'an optional description')
@enduml
```

