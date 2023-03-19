# Cloudscale


```text
fontawesome-6/Brands/Cloudscale
```

```text
include('fontawesome-6/Brands/Cloudscale')
```



| Illustration | Cloudscale |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Cloudscale.png) | ![illustration for Cloudscale](../../fontawesome-6/Brands/Cloudscale.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloudscaleXs>`
- `<$CloudscaleSm>`
- `<$CloudscaleMd>`
- `<$CloudscaleLg>`





## Cloudscale

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Cloudscale
include('fontawesome-6/Brands/Cloudscale')

' renders the element
Cloudscale('Cloudscale', 'Cloudscale', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cloudscale
include('fontawesome-6/Brands/Cloudscale')

' renders the element
Cloudscale('Cloudscale', 'Cloudscale', 'an optional tech label', 'an optional description')
@enduml
```

