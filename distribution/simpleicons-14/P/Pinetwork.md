# Pinetwork


```text
simpleicons-14/P/Pinetwork
```

```text
include('simpleicons-14/P/Pinetwork')
```



| Illustration | Pinetwork |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Pinetwork.png) | ![illustration for Pinetwork](../../simpleicons-14/P/Pinetwork.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PinetworkXs>`
- `<$PinetworkSm>`
- `<$PinetworkMd>`
- `<$PinetworkLg>`





## Pinetwork

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Pinetwork
include('simpleicons-14/P/Pinetwork')

' renders the element
Pinetwork('Pinetwork', 'Pinetwork', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pinetwork
include('simpleicons-14/P/Pinetwork')

' renders the element
Pinetwork('Pinetwork', 'Pinetwork', 'an optional tech label', 'an optional description')
@enduml
```

