# MicNone


```text
material-4/Av/MicNone
```

```text
include('material-4/Av/MicNone')
```



| Illustration | MicNone |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/MicNone.png) | ![illustration for MicNone](../../material-4/Av/MicNone.Local.png) |




## MicNone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element MicNone
include('material-4/Av/MicNone')

' renders the element
MicNone('MicNone', 'Mic None', 'an optional tech label')
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

' loads the Item which embeds the element MicNone
include('material-4/Av/MicNone')

' renders the element
MicNone('MicNone', 'Mic None', 'an optional tech label')
@enduml
```

