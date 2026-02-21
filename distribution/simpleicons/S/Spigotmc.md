# Spigotmc


```text
simpleicons/S/Spigotmc
```

```text
include('simpleicons/S/Spigotmc')
```



| Illustration | Spigotmc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Spigotmc.png) | ![illustration for Spigotmc](../../simpleicons/S/Spigotmc.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SpigotmcXs>`
- `<$SpigotmcSm>`
- `<$SpigotmcMd>`
- `<$SpigotmcLg>`





## Spigotmc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Spigotmc
include('simpleicons/S/Spigotmc')

' renders the element
Spigotmc('Spigotmc', 'Spigotmc', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Spigotmc
include('simpleicons/S/Spigotmc')

' renders the element
Spigotmc('Spigotmc', 'Spigotmc', 'an optional tech label', 'an optional description')
@enduml
```

