# Indiehackers


```text
simpleicons/I/Indiehackers
```

```text
include('simpleicons/I/Indiehackers')
```



| Illustration | Indiehackers |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/I/Indiehackers.png) | ![illustration for Indiehackers](../../simpleicons/I/Indiehackers.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IndiehackersXs>`
- `<$IndiehackersSm>`
- `<$IndiehackersMd>`
- `<$IndiehackersLg>`





## Indiehackers

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Indiehackers
include('simpleicons/I/Indiehackers')

' renders the element
Indiehackers('Indiehackers', 'Indiehackers', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Indiehackers
include('simpleicons/I/Indiehackers')

' renders the element
Indiehackers('Indiehackers', 'Indiehackers', 'an optional tech label', 'an optional description')
@enduml
```

