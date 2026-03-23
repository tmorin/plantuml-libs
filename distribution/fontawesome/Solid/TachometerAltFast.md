# TachometerAltFast


```text
fontawesome/Solid/TachometerAltFast
```

```text
include('fontawesome/Solid/TachometerAltFast')
```



| Illustration | TachometerAltFast |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TachometerAltFast.png) | ![illustration for TachometerAltFast](../../fontawesome/Solid/TachometerAltFast.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TachometerAltFastXs>`
- `<$TachometerAltFastSm>`
- `<$TachometerAltFastMd>`
- `<$TachometerAltFastLg>`





## TachometerAltFast

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TachometerAltFast
include('fontawesome/Solid/TachometerAltFast')

' renders the element
TachometerAltFast('TachometerAltFast', 'Tachometer Alt Fast', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TachometerAltFast
include('fontawesome/Solid/TachometerAltFast')

' renders the element
TachometerAltFast('TachometerAltFast', 'Tachometer Alt Fast', 'an optional tech label', 'an optional description')
@enduml
```

