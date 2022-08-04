# HdrOff


```text
material-4/Image/HdrOff
```

```text
include('material-4/Image/HdrOff')
```



| Illustration | HdrOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/HdrOff.png) | ![illustration for HdrOff](../../material-4/Image/HdrOff.Local.png) |




## HdrOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element HdrOff
include('material-4/Image/HdrOff')

' renders the element
HdrOff('HdrOff', 'Hdr Off', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HdrOff
include('material-4/Image/HdrOff')

' renders the element
HdrOff('HdrOff', 'Hdr Off', 'an optional tech label', 'an optional description')
@enduml
```

