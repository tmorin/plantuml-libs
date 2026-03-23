# Rendact


```text
fontawesome/Brands/Rendact
```

```text
include('fontawesome/Brands/Rendact')
```



| Illustration | Rendact |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Rendact.png) | ![illustration for Rendact](../../fontawesome/Brands/Rendact.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RendactXs>`
- `<$RendactSm>`
- `<$RendactMd>`
- `<$RendactLg>`





## Rendact

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Rendact
include('fontawesome/Brands/Rendact')

' renders the element
Rendact('Rendact', 'Rendact', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rendact
include('fontawesome/Brands/Rendact')

' renders the element
Rendact('Rendact', 'Rendact', 'an optional tech label', 'an optional description')
@enduml
```

