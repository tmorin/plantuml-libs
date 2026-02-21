# Menorah


```text
fontawesome/Solid/Menorah
```

```text
include('fontawesome/Solid/Menorah')
```



| Illustration | Menorah |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Menorah.png) | ![illustration for Menorah](../../fontawesome/Solid/Menorah.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MenorahXs>`
- `<$MenorahSm>`
- `<$MenorahMd>`
- `<$MenorahLg>`





## Menorah

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Menorah
include('fontawesome/Solid/Menorah')

' renders the element
Menorah('Menorah', 'Menorah', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Menorah
include('fontawesome/Solid/Menorah')

' renders the element
Menorah('Menorah', 'Menorah', 'an optional tech label', 'an optional description')
@enduml
```

