# TachometerFast


```text
fontawesome/Solid/TachometerFast
```

```text
include('fontawesome/Solid/TachometerFast')
```



| Illustration | TachometerFast |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TachometerFast.png) | ![illustration for TachometerFast](../../fontawesome/Solid/TachometerFast.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TachometerFastXs>`
- `<$TachometerFastSm>`
- `<$TachometerFastMd>`
- `<$TachometerFastLg>`





## TachometerFast

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TachometerFast
include('fontawesome/Solid/TachometerFast')

' renders the element
TachometerFast('TachometerFast', 'Tachometer Fast', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TachometerFast
include('fontawesome/Solid/TachometerFast')

' renders the element
TachometerFast('TachometerFast', 'Tachometer Fast', 'an optional tech label', 'an optional description')
@enduml
```

