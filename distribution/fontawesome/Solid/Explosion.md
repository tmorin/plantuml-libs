# Explosion


```text
fontawesome/Solid/Explosion
```

```text
include('fontawesome/Solid/Explosion')
```



| Illustration | Explosion |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Explosion.png) | ![illustration for Explosion](../../fontawesome/Solid/Explosion.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ExplosionXs>`
- `<$ExplosionSm>`
- `<$ExplosionMd>`
- `<$ExplosionLg>`





## Explosion

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Explosion
include('fontawesome/Solid/Explosion')

' renders the element
Explosion('Explosion', 'Explosion', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Explosion
include('fontawesome/Solid/Explosion')

' renders the element
Explosion('Explosion', 'Explosion', 'an optional tech label', 'an optional description')
@enduml
```

