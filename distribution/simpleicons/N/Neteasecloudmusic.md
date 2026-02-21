# Neteasecloudmusic


```text
simpleicons/N/Neteasecloudmusic
```

```text
include('simpleicons/N/Neteasecloudmusic')
```



| Illustration | Neteasecloudmusic |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Neteasecloudmusic.png) | ![illustration for Neteasecloudmusic](../../simpleicons/N/Neteasecloudmusic.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NeteasecloudmusicXs>`
- `<$NeteasecloudmusicSm>`
- `<$NeteasecloudmusicMd>`
- `<$NeteasecloudmusicLg>`





## Neteasecloudmusic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Neteasecloudmusic
include('simpleicons/N/Neteasecloudmusic')

' renders the element
Neteasecloudmusic('Neteasecloudmusic', 'Neteasecloudmusic', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Neteasecloudmusic
include('simpleicons/N/Neteasecloudmusic')

' renders the element
Neteasecloudmusic('Neteasecloudmusic', 'Neteasecloudmusic', 'an optional tech label', 'an optional description')
@enduml
```

