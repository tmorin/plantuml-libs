# MicExternalOn


```text
material-4/Image/MicExternalOn
```

```text
include('material-4/Image/MicExternalOn')
```



| Illustration | MicExternalOn |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/MicExternalOn.png) | ![illustration for MicExternalOn](../../material-4/Image/MicExternalOn.Local.png) |




## MicExternalOn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element MicExternalOn
include('material-4/Image/MicExternalOn')

' renders the element
MicExternalOn('MicExternalOn', 'Mic External On', 'an optional tech label')
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

' loads the Item which embeds the element MicExternalOn
include('material-4/Image/MicExternalOn')

' renders the element
MicExternalOn('MicExternalOn', 'Mic External On', 'an optional tech label')
@enduml
```

