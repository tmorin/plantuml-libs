# Nxp


```text
simpleicons/N/Nxp
```

```text
include('simpleicons/N/Nxp')
```



| Illustration | Nxp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Nxp.png) | ![illustration for Nxp](../../simpleicons/N/Nxp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NxpXs>`
- `<$NxpSm>`
- `<$NxpMd>`
- `<$NxpLg>`





## Nxp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Nxp
include('simpleicons/N/Nxp')

' renders the element
Nxp('Nxp', 'Nxp', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nxp
include('simpleicons/N/Nxp')

' renders the element
Nxp('Nxp', 'Nxp', 'an optional tech label', 'an optional description')
@enduml
```

