# Wondershare


```text
simpleicons/W/Wondershare
```

```text
include('simpleicons/W/Wondershare')
```



| Illustration | Wondershare |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/Wondershare.png) | ![illustration for Wondershare](../../simpleicons/W/Wondershare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WondershareXs>`
- `<$WondershareSm>`
- `<$WondershareMd>`
- `<$WondershareLg>`





## Wondershare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Wondershare
include('simpleicons/W/Wondershare')

' renders the element
Wondershare('Wondershare', 'Wondershare', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wondershare
include('simpleicons/W/Wondershare')

' renders the element
Wondershare('Wondershare', 'Wondershare', 'an optional tech label', 'an optional description')
@enduml
```

