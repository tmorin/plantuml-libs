# BrightnessLow


```text
material/Device/BrightnessLow
```

```text
include('material/Device/BrightnessLow')
```



| Illustration | BrightnessLow |
| :---: | :---: |
| ![illustration for Illustration](../../material/Device/BrightnessLow.png) | ![illustration for BrightnessLow](../../material/Device/BrightnessLow.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BrightnessLowXs>`
- `<$BrightnessLowSm>`
- `<$BrightnessLowMd>`
- `<$BrightnessLowLg>`





## BrightnessLow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element BrightnessLow
include('material/Device/BrightnessLow')

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
include('material/bootstrap')

' loads the Item which embeds the element BrightnessLow
include('material/Device/BrightnessLow')

' renders the element
BrightnessLow('BrightnessLow', 'Brightness Low', 'an optional tech label', 'an optional description')
@enduml
```

