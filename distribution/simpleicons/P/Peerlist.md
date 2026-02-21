# Peerlist


```text
simpleicons/P/Peerlist
```

```text
include('simpleicons/P/Peerlist')
```



| Illustration | Peerlist |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Peerlist.png) | ![illustration for Peerlist](../../simpleicons/P/Peerlist.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PeerlistXs>`
- `<$PeerlistSm>`
- `<$PeerlistMd>`
- `<$PeerlistLg>`





## Peerlist

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Peerlist
include('simpleicons/P/Peerlist')

' renders the element
Peerlist('Peerlist', 'Peerlist', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Peerlist
include('simpleicons/P/Peerlist')

' renders the element
Peerlist('Peerlist', 'Peerlist', 'an optional tech label', 'an optional description')
@enduml
```

