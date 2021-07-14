# BrightnessHigh


```text
material-4/Device/BrightnessHigh
```

```text
include('material-4/Device/BrightnessHigh')
```



| Illustration | BrightnessHigh |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/BrightnessHigh.png) | ![illustration for BrightnessHigh](../../material-4/Device/BrightnessHigh.Local.png) |




## BrightnessHigh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BrightnessHigh
include('material-4/Device/BrightnessHigh')

' renders the element
BrightnessHigh('BrightnessHigh', 'Brightness High', 'an optional tech label')
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

' loads the Item which embeds the element BrightnessHigh
include('material-4/Device/BrightnessHigh')

' renders the element
BrightnessHigh('BrightnessHigh', 'Brightness High', 'an optional tech label')
@enduml
```

