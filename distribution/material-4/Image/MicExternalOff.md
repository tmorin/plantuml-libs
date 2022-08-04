# MicExternalOff


```text
material-4/Image/MicExternalOff
```

```text
include('material-4/Image/MicExternalOff')
```



| Illustration | MicExternalOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/MicExternalOff.png) | ![illustration for MicExternalOff](../../material-4/Image/MicExternalOff.Local.png) |




## MicExternalOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element MicExternalOff
include('material-4/Image/MicExternalOff')

' renders the element
MicExternalOff('MicExternalOff', 'Mic External Off', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MicExternalOff
include('material-4/Image/MicExternalOff')

' renders the element
MicExternalOff('MicExternalOff', 'Mic External Off', 'an optional tech label', 'an optional description')
@enduml
```

