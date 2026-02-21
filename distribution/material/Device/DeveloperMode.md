# DeveloperMode


```text
material/Device/DeveloperMode
```

```text
include('material/Device/DeveloperMode')
```



| Illustration | DeveloperMode |
| :---: | :---: |
| ![illustration for Illustration](../../material/Device/DeveloperMode.png) | ![illustration for DeveloperMode](../../material/Device/DeveloperMode.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DeveloperModeXs>`
- `<$DeveloperModeSm>`
- `<$DeveloperModeMd>`
- `<$DeveloperModeLg>`





## DeveloperMode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element DeveloperMode
include('material/Device/DeveloperMode')

' renders the element
DeveloperMode('DeveloperMode', 'Developer Mode', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DeveloperMode
include('material/Device/DeveloperMode')

' renders the element
DeveloperMode('DeveloperMode', 'Developer Mode', 'an optional tech label', 'an optional description')
@enduml
```

