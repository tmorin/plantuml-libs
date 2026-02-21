# GlassWaterDroplet


```text
fontawesome/Solid/GlassWaterDroplet
```

```text
include('fontawesome/Solid/GlassWaterDroplet')
```



| Illustration | GlassWaterDroplet |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/GlassWaterDroplet.png) | ![illustration for GlassWaterDroplet](../../fontawesome/Solid/GlassWaterDroplet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GlassWaterDropletXs>`
- `<$GlassWaterDropletSm>`
- `<$GlassWaterDropletMd>`
- `<$GlassWaterDropletLg>`





## GlassWaterDroplet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GlassWaterDroplet
include('fontawesome/Solid/GlassWaterDroplet')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element GlassWaterDroplet
include('fontawesome/Solid/GlassWaterDroplet')

' renders the element
GlassWaterDroplet('GlassWaterDroplet', 'Glass Water Droplet', 'an optional tech label', 'an optional description')
@enduml
```

