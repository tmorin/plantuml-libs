# GlassWaterDroplet


```text
fontawesome-6/Solid/GlassWaterDroplet
```

```text
include('fontawesome-6/Solid/GlassWaterDroplet')
```



| Illustration | GlassWaterDroplet |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/GlassWaterDroplet.png) | ![illustration for GlassWaterDroplet](../../fontawesome-6/Solid/GlassWaterDroplet.Local.png) |




## GlassWaterDroplet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element GlassWaterDroplet
include('fontawesome-6/Solid/GlassWaterDroplet')

' renders the element
GlassWaterDroplet('GlassWaterDroplet', 'Glass Water Droplet', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element GlassWaterDroplet
include('fontawesome-6/Solid/GlassWaterDroplet')

' renders the element
GlassWaterDroplet('GlassWaterDroplet', 'Glass Water Droplet', 'an optional tech label', 'an optional description')
@enduml
```

