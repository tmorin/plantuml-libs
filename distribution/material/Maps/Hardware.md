# Hardware


```text
material/Maps/Hardware
```

```text
include('material/Maps/Hardware')
```



| Illustration | Hardware |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/Hardware.png) | ![illustration for Hardware](../../material/Maps/Hardware.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element Hardware
include('material/Maps/Hardware')

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
include('material/bootstrap')

' loads the Item which embeds the element Hardware
include('material/Maps/Hardware')

' renders the element
Hardware('Hardware', 'Hardware', 'an optional tech label', 'an optional description')
@enduml
```

