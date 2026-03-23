# Museum


```text
fontawesome/Solid/Museum
```

```text
include('fontawesome/Solid/Museum')
```



| Illustration | Museum |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Museum.png) | ![illustration for Museum](../../fontawesome/Solid/Museum.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MuseumXs>`
- `<$MuseumSm>`
- `<$MuseumMd>`
- `<$MuseumLg>`





## Museum

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Museum
include('fontawesome/Solid/Museum')

' renders the element
Museum('Museum', 'Museum', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Museum
include('fontawesome/Solid/Museum')

' renders the element
Museum('Museum', 'Museum', 'an optional tech label', 'an optional description')
@enduml
```

