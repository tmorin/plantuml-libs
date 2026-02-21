# Guitar


```text
fontawesome/Solid/Guitar
```

```text
include('fontawesome/Solid/Guitar')
```



| Illustration | Guitar |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Guitar.png) | ![illustration for Guitar](../../fontawesome/Solid/Guitar.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GuitarXs>`
- `<$GuitarSm>`
- `<$GuitarMd>`
- `<$GuitarLg>`





## Guitar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Guitar
include('fontawesome/Solid/Guitar')

' renders the element
Guitar('Guitar', 'Guitar', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Guitar
include('fontawesome/Solid/Guitar')

' renders the element
Guitar('Guitar', 'Guitar', 'an optional tech label', 'an optional description')
@enduml
```

