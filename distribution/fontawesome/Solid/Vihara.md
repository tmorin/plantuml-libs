# Vihara


```text
fontawesome/Solid/Vihara
```

```text
include('fontawesome/Solid/Vihara')
```



| Illustration | Vihara |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Vihara.png) | ![illustration for Vihara](../../fontawesome/Solid/Vihara.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ViharaXs>`
- `<$ViharaSm>`
- `<$ViharaMd>`
- `<$ViharaLg>`





## Vihara

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Vihara
include('fontawesome/Solid/Vihara')

' renders the element
Vihara('Vihara', 'Vihara', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vihara
include('fontawesome/Solid/Vihara')

' renders the element
Vihara('Vihara', 'Vihara', 'an optional tech label', 'an optional description')
@enduml
```

