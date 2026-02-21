# Saudia


```text
simpleicons/S/Saudia
```

```text
include('simpleicons/S/Saudia')
```



| Illustration | Saudia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Saudia.png) | ![illustration for Saudia](../../simpleicons/S/Saudia.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SaudiaXs>`
- `<$SaudiaSm>`
- `<$SaudiaMd>`
- `<$SaudiaLg>`





## Saudia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Saudia
include('simpleicons/S/Saudia')

' renders the element
Saudia('Saudia', 'Saudia', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Saudia
include('simpleicons/S/Saudia')

' renders the element
Saudia('Saudia', 'Saudia', 'an optional tech label', 'an optional description')
@enduml
```

