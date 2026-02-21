# Authelia


```text
simpleicons/A/Authelia
```

```text
include('simpleicons/A/Authelia')
```



| Illustration | Authelia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Authelia.png) | ![illustration for Authelia](../../simpleicons/A/Authelia.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AutheliaXs>`
- `<$AutheliaSm>`
- `<$AutheliaMd>`
- `<$AutheliaLg>`





## Authelia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Authelia
include('simpleicons/A/Authelia')

' renders the element
Authelia('Authelia', 'Authelia', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Authelia
include('simpleicons/A/Authelia')

' renders the element
Authelia('Authelia', 'Authelia', 'an optional tech label', 'an optional description')
@enduml
```

