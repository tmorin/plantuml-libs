# Hardware


```text
material-4/Maps/Hardware
```

```text
include('material-4/Maps/Hardware')
```



| Illustration | Hardware |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/Hardware.png) | ![illustration for Hardware](../../material-4/Maps/Hardware.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HardwareXs>`
- `<$HardwareSm>`
- `<$HardwareMd>`
- `<$HardwareLg>`





## Hardware

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Hardware
include('material-4/Maps/Hardware')

' renders the element
Hardware('Hardware', 'Hardware', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Hardware
include('material-4/Maps/Hardware')

' renders the element
Hardware('Hardware', 'Hardware', 'an optional tech label', 'an optional description')
@enduml
```

