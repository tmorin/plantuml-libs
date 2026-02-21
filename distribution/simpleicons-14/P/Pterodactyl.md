# Pterodactyl


```text
simpleicons-14/P/Pterodactyl
```

```text
include('simpleicons-14/P/Pterodactyl')
```



| Illustration | Pterodactyl |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Pterodactyl.png) | ![illustration for Pterodactyl](../../simpleicons-14/P/Pterodactyl.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Pterodactyl
include('simpleicons-14/P/Pterodactyl')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Pterodactyl
include('simpleicons-14/P/Pterodactyl')

' renders the element
Pterodactyl('Pterodactyl', 'Pterodactyl', 'an optional tech label', 'an optional description')
@enduml
```

