# TachometerAlt


```text
fontawesome/Solid/TachometerAlt
```

```text
include('fontawesome/Solid/TachometerAlt')
```



| Illustration | TachometerAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TachometerAlt.png) | ![illustration for TachometerAlt](../../fontawesome/Solid/TachometerAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TachometerAltXs>`
- `<$TachometerAltSm>`
- `<$TachometerAltMd>`
- `<$TachometerAltLg>`





## TachometerAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TachometerAlt
include('fontawesome/Solid/TachometerAlt')

' renders the element
TachometerAlt('TachometerAlt', 'Tachometer Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TachometerAlt
include('fontawesome/Solid/TachometerAlt')

' renders the element
TachometerAlt('TachometerAlt', 'Tachometer Alt', 'an optional tech label', 'an optional description')
@enduml
```

