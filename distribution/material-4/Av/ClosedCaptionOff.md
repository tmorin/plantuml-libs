# ClosedCaptionOff


```text
material-4/Av/ClosedCaptionOff
```

```text
include('material-4/Av/ClosedCaptionOff')
```



| Illustration | ClosedCaptionOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/ClosedCaptionOff.png) | ![illustration for ClosedCaptionOff](../../material-4/Av/ClosedCaptionOff.Local.png) |




## ClosedCaptionOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ClosedCaptionOff
include('material-4/Av/ClosedCaptionOff')

' renders the element
ClosedCaptionOff('ClosedCaptionOff', 'Closed Caption Off', 'an optional tech label')
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

' loads the Item which embeds the element ClosedCaptionOff
include('material-4/Av/ClosedCaptionOff')

' renders the element
ClosedCaptionOff('ClosedCaptionOff', 'Closed Caption Off', 'an optional tech label')
@enduml
```

