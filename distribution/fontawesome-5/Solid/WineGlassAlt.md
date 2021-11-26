# WineGlassAlt


```text
fontawesome-5/Solid/WineGlassAlt
```

```text
include('fontawesome-5/Solid/WineGlassAlt')
```



| Illustration | WineGlassAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/WineGlassAlt.png) | ![illustration for WineGlassAlt](../../fontawesome-5/Solid/WineGlassAlt.Local.png) |




## WineGlassAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element WineGlassAlt
include('fontawesome-5/Solid/WineGlassAlt')

' renders the element
WineGlassAlt('WineGlassAlt', 'Wine Glass Alt', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element WineGlassAlt
include('fontawesome-5/Solid/WineGlassAlt')

' renders the element
WineGlassAlt('WineGlassAlt', 'Wine Glass Alt', 'an optional tech label')
@enduml
```

