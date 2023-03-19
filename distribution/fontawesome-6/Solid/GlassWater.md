# GlassWater


```text
fontawesome-6/Solid/GlassWater
```

```text
include('fontawesome-6/Solid/GlassWater')
```



| Illustration | GlassWater |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/GlassWater.png) | ![illustration for GlassWater](../../fontawesome-6/Solid/GlassWater.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GlassWaterXs>`
- `<$GlassWaterSm>`
- `<$GlassWaterMd>`
- `<$GlassWaterLg>`





## GlassWater

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element GlassWater
include('fontawesome-6/Solid/GlassWater')

' renders the element
GlassWater('GlassWater', 'Glass Water', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GlassWater
include('fontawesome-6/Solid/GlassWater')

' renders the element
GlassWater('GlassWater', 'Glass Water', 'an optional tech label', 'an optional description')
@enduml
```

