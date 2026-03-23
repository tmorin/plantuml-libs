# WineGlassAlt


```text
fontawesome/Solid/WineGlassAlt
```

```text
include('fontawesome/Solid/WineGlassAlt')
```



| Illustration | WineGlassAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/WineGlassAlt.png) | ![illustration for WineGlassAlt](../../fontawesome/Solid/WineGlassAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WineGlassAltXs>`
- `<$WineGlassAltSm>`
- `<$WineGlassAltMd>`
- `<$WineGlassAltLg>`





## WineGlassAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element WineGlassAlt
include('fontawesome/Solid/WineGlassAlt')

' renders the element
WineGlassAlt('WineGlassAlt', 'Wine Glass Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WineGlassAlt
include('fontawesome/Solid/WineGlassAlt')

' renders the element
WineGlassAlt('WineGlassAlt', 'Wine Glass Alt', 'an optional tech label', 'an optional description')
@enduml
```

