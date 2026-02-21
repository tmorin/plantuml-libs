# Smog


```text
fontawesome/Solid/Smog
```

```text
include('fontawesome/Solid/Smog')
```



| Illustration | Smog |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Smog.png) | ![illustration for Smog](../../fontawesome/Solid/Smog.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SmogXs>`
- `<$SmogSm>`
- `<$SmogMd>`
- `<$SmogLg>`





## Smog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Smog
include('fontawesome/Solid/Smog')

' renders the element
Smog('Smog', 'Smog', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Smog
include('fontawesome/Solid/Smog')

' renders the element
Smog('Smog', 'Smog', 'an optional tech label', 'an optional description')
@enduml
```

