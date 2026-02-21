# Cdprojekt


```text
simpleicons/C/Cdprojekt
```

```text
include('simpleicons/C/Cdprojekt')
```



| Illustration | Cdprojekt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Cdprojekt.png) | ![illustration for Cdprojekt](../../simpleicons/C/Cdprojekt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CdprojektXs>`
- `<$CdprojektSm>`
- `<$CdprojektMd>`
- `<$CdprojektLg>`





## Cdprojekt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Cdprojekt
include('simpleicons/C/Cdprojekt')

' renders the element
Cdprojekt('Cdprojekt', 'Cdprojekt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cdprojekt
include('simpleicons/C/Cdprojekt')

' renders the element
Cdprojekt('Cdprojekt', 'Cdprojekt', 'an optional tech label', 'an optional description')
@enduml
```

