# TemperatureLow


```text
fontawesome/Solid/TemperatureLow
```

```text
include('fontawesome/Solid/TemperatureLow')
```



| Illustration | TemperatureLow |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TemperatureLow.png) | ![illustration for TemperatureLow](../../fontawesome/Solid/TemperatureLow.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TemperatureLowXs>`
- `<$TemperatureLowSm>`
- `<$TemperatureLowMd>`
- `<$TemperatureLowLg>`





## TemperatureLow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TemperatureLow
include('fontawesome/Solid/TemperatureLow')

' renders the element
TemperatureLow('TemperatureLow', 'Temperature Low', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element TemperatureLow
include('fontawesome/Solid/TemperatureLow')

' renders the element
TemperatureLow('TemperatureLow', 'Temperature Low', 'an optional tech label', 'an optional description')
@enduml
```

