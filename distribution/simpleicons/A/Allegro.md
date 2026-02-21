# Allegro


```text
simpleicons/A/Allegro
```

```text
include('simpleicons/A/Allegro')
```



| Illustration | Allegro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Allegro.png) | ![illustration for Allegro](../../simpleicons/A/Allegro.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AllegroXs>`
- `<$AllegroSm>`
- `<$AllegroMd>`
- `<$AllegroLg>`





## Allegro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Allegro
include('simpleicons/A/Allegro')

' renders the element
Allegro('Allegro', 'Allegro', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Allegro
include('simpleicons/A/Allegro')

' renders the element
Allegro('Allegro', 'Allegro', 'an optional tech label', 'an optional description')
@enduml
```

