# Nhost


```text
simpleicons/N/Nhost
```

```text
include('simpleicons/N/Nhost')
```



| Illustration | Nhost |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Nhost.png) | ![illustration for Nhost](../../simpleicons/N/Nhost.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NhostXs>`
- `<$NhostSm>`
- `<$NhostMd>`
- `<$NhostLg>`





## Nhost

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Nhost
include('simpleicons/N/Nhost')

' renders the element
Nhost('Nhost', 'Nhost', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nhost
include('simpleicons/N/Nhost')

' renders the element
Nhost('Nhost', 'Nhost', 'an optional tech label', 'an optional description')
@enduml
```

