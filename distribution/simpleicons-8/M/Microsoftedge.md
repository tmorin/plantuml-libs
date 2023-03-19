# Microsoftedge


```text
simpleicons-8/M/Microsoftedge
```

```text
include('simpleicons-8/M/Microsoftedge')
```



| Illustration | Microsoftedge |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/M/Microsoftedge.png) | ![illustration for Microsoftedge](../../simpleicons-8/M/Microsoftedge.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MicrosoftedgeXs>`
- `<$MicrosoftedgeSm>`
- `<$MicrosoftedgeMd>`
- `<$MicrosoftedgeLg>`





## Microsoftedge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Microsoftedge
include('simpleicons-8/M/Microsoftedge')

' renders the element
Microsoftedge('Microsoftedge', 'Microsoftedge', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Microsoftedge
include('simpleicons-8/M/Microsoftedge')

' renders the element
Microsoftedge('Microsoftedge', 'Microsoftedge', 'an optional tech label', 'an optional description')
@enduml
```

