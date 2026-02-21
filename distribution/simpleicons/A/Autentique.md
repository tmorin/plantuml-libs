# Autentique


```text
simpleicons/A/Autentique
```

```text
include('simpleicons/A/Autentique')
```



| Illustration | Autentique |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Autentique.png) | ![illustration for Autentique](../../simpleicons/A/Autentique.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AutentiqueXs>`
- `<$AutentiqueSm>`
- `<$AutentiqueMd>`
- `<$AutentiqueLg>`





## Autentique

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Autentique
include('simpleicons/A/Autentique')

' renders the element
Autentique('Autentique', 'Autentique', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Autentique
include('simpleicons/A/Autentique')

' renders the element
Autentique('Autentique', 'Autentique', 'an optional tech label', 'an optional description')
@enduml
```

