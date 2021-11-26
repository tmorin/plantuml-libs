# Cloudscale


```text
fontawesome-5/Brands/Cloudscale
```

```text
include('fontawesome-5/Brands/Cloudscale')
```



| Illustration | Cloudscale |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Cloudscale.png) | ![illustration for Cloudscale](../../fontawesome-5/Brands/Cloudscale.Local.png) |




## Cloudscale

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Cloudscale
include('fontawesome-5/Brands/Cloudscale')

' renders the element
Cloudscale('Cloudscale', 'Cloudscale', 'an optional tech label')
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

' loads the Item which embeds the element Cloudscale
include('fontawesome-5/Brands/Cloudscale')

' renders the element
Cloudscale('Cloudscale', 'Cloudscale', 'an optional tech label')
@enduml
```

