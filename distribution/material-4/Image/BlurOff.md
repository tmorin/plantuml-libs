# BlurOff


```text
material-4/Image/BlurOff
```

```text
include('material-4/Image/BlurOff')
```



| Illustration | BlurOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/BlurOff.png) | ![illustration for BlurOff](../../material-4/Image/BlurOff.Local.png) |




## BlurOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BlurOff
include('material-4/Image/BlurOff')

' renders the element
BlurOff('BlurOff', 'Blur Off', 'an optional tech label')
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

' loads the Item which embeds the element BlurOff
include('material-4/Image/BlurOff')

' renders the element
BlurOff('BlurOff', 'Blur Off', 'an optional tech label')
@enduml
```

