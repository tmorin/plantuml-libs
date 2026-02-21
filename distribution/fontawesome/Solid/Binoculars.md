# Binoculars


```text
fontawesome/Solid/Binoculars
```

```text
include('fontawesome/Solid/Binoculars')
```



| Illustration | Binoculars |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Binoculars.png) | ![illustration for Binoculars](../../fontawesome/Solid/Binoculars.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BinocularsXs>`
- `<$BinocularsSm>`
- `<$BinocularsMd>`
- `<$BinocularsLg>`





## Binoculars

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Binoculars
include('fontawesome/Solid/Binoculars')

' renders the element
Binoculars('Binoculars', 'Binoculars', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Binoculars
include('fontawesome/Solid/Binoculars')

' renders the element
Binoculars('Binoculars', 'Binoculars', 'an optional tech label', 'an optional description')
@enduml
```

