# Dwavesystems


```text
simpleicons/D/Dwavesystems
```

```text
include('simpleicons/D/Dwavesystems')
```



| Illustration | Dwavesystems |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Dwavesystems.png) | ![illustration for Dwavesystems](../../simpleicons/D/Dwavesystems.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DwavesystemsXs>`
- `<$DwavesystemsSm>`
- `<$DwavesystemsMd>`
- `<$DwavesystemsLg>`





## Dwavesystems

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Dwavesystems
include('simpleicons/D/Dwavesystems')

' renders the element
Dwavesystems('Dwavesystems', 'Dwavesystems', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dwavesystems
include('simpleicons/D/Dwavesystems')

' renders the element
Dwavesystems('Dwavesystems', 'Dwavesystems', 'an optional tech label', 'an optional description')
@enduml
```

