# Photon


```text
simpleicons/P/Photon
```

```text
include('simpleicons/P/Photon')
```



| Illustration | Photon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Photon.png) | ![illustration for Photon](../../simpleicons/P/Photon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PhotonXs>`
- `<$PhotonSm>`
- `<$PhotonMd>`
- `<$PhotonLg>`





## Photon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Photon
include('simpleicons/P/Photon')

' renders the element
Photon('Photon', 'Photon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Photon
include('simpleicons/P/Photon')

' renders the element
Photon('Photon', 'Photon', 'an optional tech label', 'an optional description')
@enduml
```

