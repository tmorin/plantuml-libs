# DeveloperMode


```text
material-4/Device/DeveloperMode
```

```text
include('material-4/Device/DeveloperMode')
```



| Illustration | DeveloperMode |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/DeveloperMode.png) | ![illustration for DeveloperMode](../../material-4/Device/DeveloperMode.Local.png) |



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
include('material-4/bootstrap')

' loads the Item which embeds the element DeveloperMode
include('material-4/Device/DeveloperMode')

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
include('material-4/bootstrap')

' loads the Item which embeds the element DeveloperMode
include('material-4/Device/DeveloperMode')

' renders the element
DeveloperMode('DeveloperMode', 'Developer Mode', 'an optional tech label', 'an optional description')
@enduml
```

