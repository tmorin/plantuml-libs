# Pterodactyl


```text
simpleicons/P/Pterodactyl
```

```text
include('simpleicons/P/Pterodactyl')
```



| Illustration | Pterodactyl |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Pterodactyl.png) | ![illustration for Pterodactyl](../../simpleicons/P/Pterodactyl.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PterodactylXs>`
- `<$PterodactylSm>`
- `<$PterodactylMd>`
- `<$PterodactylLg>`





## Pterodactyl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Pterodactyl
include('simpleicons/P/Pterodactyl')

' renders the element
Pterodactyl('Pterodactyl', 'Pterodactyl', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pterodactyl
include('simpleicons/P/Pterodactyl')

' renders the element
Pterodactyl('Pterodactyl', 'Pterodactyl', 'an optional tech label', 'an optional description')
@enduml
```

