# MicOff


```text
material-4/Av/MicOff
```

```text
include('material-4/Av/MicOff')
```



| Illustration | MicOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/MicOff.png) | ![illustration for MicOff](../../material-4/Av/MicOff.Local.png) |




## MicOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element MicOff
include('material-4/Av/MicOff')

' renders the element
MicOff('MicOff', 'Mic Off', 'an optional tech label')
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

' loads the Item which embeds the element MicOff
include('material-4/Av/MicOff')

' renders the element
MicOff('MicOff', 'Mic Off', 'an optional tech label')
@enduml
```

