# Planetscale


```text
simpleicons-8/P/Planetscale
```

```text
include('simpleicons-8/P/Planetscale')
```



| Illustration | Planetscale |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Planetscale.png) | ![illustration for Planetscale](../../simpleicons-8/P/Planetscale.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlanetscaleXs>`
- `<$PlanetscaleSm>`
- `<$PlanetscaleMd>`
- `<$PlanetscaleLg>`





## Planetscale

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Planetscale
include('simpleicons-8/P/Planetscale')

' renders the element
Planetscale('Planetscale', 'Planetscale', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Planetscale
include('simpleicons-8/P/Planetscale')

' renders the element
Planetscale('Planetscale', 'Planetscale', 'an optional tech label', 'an optional description')
@enduml
```

