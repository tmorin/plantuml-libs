# HourglassDisabled


```text
material/Action/HourglassDisabled
```

```text
include('material/Action/HourglassDisabled')
```



| Illustration | HourglassDisabled |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/HourglassDisabled.png) | ![illustration for HourglassDisabled](../../material/Action/HourglassDisabled.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HourglassDisabledXs>`
- `<$HourglassDisabledSm>`
- `<$HourglassDisabledMd>`
- `<$HourglassDisabledLg>`





## HourglassDisabled

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element HourglassDisabled
include('material/Action/HourglassDisabled')

' renders the element
HourglassDisabled('HourglassDisabled', 'Hourglass Disabled', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HourglassDisabled
include('material/Action/HourglassDisabled')

' renders the element
HourglassDisabled('HourglassDisabled', 'Hourglass Disabled', 'an optional tech label', 'an optional description')
@enduml
```

