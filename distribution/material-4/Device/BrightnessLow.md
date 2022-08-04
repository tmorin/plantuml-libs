# BrightnessLow


```text
material-4/Device/BrightnessLow
```

```text
include('material-4/Device/BrightnessLow')
```



| Illustration | BrightnessLow |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/BrightnessLow.png) | ![illustration for BrightnessLow](../../material-4/Device/BrightnessLow.Local.png) |




## BrightnessLow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BrightnessLow
include('material-4/Device/BrightnessLow')

' renders the element
BrightnessLow('BrightnessLow', 'Brightness Low', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BrightnessLow
include('material-4/Device/BrightnessLow')

' renders the element
BrightnessLow('BrightnessLow', 'Brightness Low', 'an optional tech label', 'an optional description')
@enduml
```

