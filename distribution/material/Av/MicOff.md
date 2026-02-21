# MicOff


```text
material/Av/MicOff
```

```text
include('material/Av/MicOff')
```



| Illustration | MicOff |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/MicOff.png) | ![illustration for MicOff](../../material/Av/MicOff.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MicOffXs>`
- `<$MicOffSm>`
- `<$MicOffMd>`
- `<$MicOffLg>`





## MicOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element MicOff
include('material/Av/MicOff')

' renders the element
MicOff('MicOff', 'Mic Off', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MicOff
include('material/Av/MicOff')

' renders the element
MicOff('MicOff', 'Mic Off', 'an optional tech label', 'an optional description')
@enduml
```

