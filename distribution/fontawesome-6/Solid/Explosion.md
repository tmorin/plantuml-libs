# Explosion


```text
fontawesome-6/Solid/Explosion
```

```text
include('fontawesome-6/Solid/Explosion')
```



| Illustration | Explosion |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Explosion.png) | ![illustration for Explosion](../../fontawesome-6/Solid/Explosion.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Explosion
include('fontawesome-6/Solid/Explosion')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Explosion
include('fontawesome-6/Solid/Explosion')

' renders the element
Explosion('Explosion', 'Explosion', 'an optional tech label', 'an optional description')
@enduml
```

