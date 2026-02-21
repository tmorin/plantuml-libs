# Chianetwork


```text
simpleicons-14/C/Chianetwork
```

```text
include('simpleicons-14/C/Chianetwork')
```



| Illustration | Chianetwork |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Chianetwork.png) | ![illustration for Chianetwork](../../simpleicons-14/C/Chianetwork.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChianetworkXs>`
- `<$ChianetworkSm>`
- `<$ChianetworkMd>`
- `<$ChianetworkLg>`





## Chianetwork

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Chianetwork
include('simpleicons-14/C/Chianetwork')

' renders the element
Chianetwork('Chianetwork', 'Chianetwork', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Chianetwork
include('simpleicons-14/C/Chianetwork')

' renders the element
Chianetwork('Chianetwork', 'Chianetwork', 'an optional tech label', 'an optional description')
@enduml
```

