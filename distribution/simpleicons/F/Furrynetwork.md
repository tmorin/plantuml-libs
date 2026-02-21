# Furrynetwork


```text
simpleicons/F/Furrynetwork
```

```text
include('simpleicons/F/Furrynetwork')
```



| Illustration | Furrynetwork |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Furrynetwork.png) | ![illustration for Furrynetwork](../../simpleicons/F/Furrynetwork.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FurrynetworkXs>`
- `<$FurrynetworkSm>`
- `<$FurrynetworkMd>`
- `<$FurrynetworkLg>`





## Furrynetwork

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Furrynetwork
include('simpleicons/F/Furrynetwork')

' renders the element
Furrynetwork('Furrynetwork', 'Furrynetwork', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Furrynetwork
include('simpleicons/F/Furrynetwork')

' renders the element
Furrynetwork('Furrynetwork', 'Furrynetwork', 'an optional tech label', 'an optional description')
@enduml
```

