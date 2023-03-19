# PersonRays


```text
fontawesome-6/Solid/PersonRays
```

```text
include('fontawesome-6/Solid/PersonRays')
```



| Illustration | PersonRays |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PersonRays.png) | ![illustration for PersonRays](../../fontawesome-6/Solid/PersonRays.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersonRaysXs>`
- `<$PersonRaysSm>`
- `<$PersonRaysMd>`
- `<$PersonRaysLg>`





## PersonRays

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PersonRays
include('fontawesome-6/Solid/PersonRays')

' renders the element
PersonRays('PersonRays', 'Person Rays', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonRays
include('fontawesome-6/Solid/PersonRays')

' renders the element
PersonRays('PersonRays', 'Person Rays', 'an optional tech label', 'an optional description')
@enduml
```

