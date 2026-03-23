# Pandora


```text
fontawesome/Brands/Pandora
```

```text
include('fontawesome/Brands/Pandora')
```



| Illustration | Pandora |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Pandora.png) | ![illustration for Pandora](../../fontawesome/Brands/Pandora.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PandoraXs>`
- `<$PandoraSm>`
- `<$PandoraMd>`
- `<$PandoraLg>`





## Pandora

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Pandora
include('fontawesome/Brands/Pandora')

' renders the element
Pandora('Pandora', 'Pandora', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pandora
include('fontawesome/Brands/Pandora')

' renders the element
Pandora('Pandora', 'Pandora', 'an optional tech label', 'an optional description')
@enduml
```

