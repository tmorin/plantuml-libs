# Mainwp


```text
simpleicons-14/M/Mainwp
```

```text
include('simpleicons-14/M/Mainwp')
```



| Illustration | Mainwp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Mainwp.png) | ![illustration for Mainwp](../../simpleicons-14/M/Mainwp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MainwpXs>`
- `<$MainwpSm>`
- `<$MainwpMd>`
- `<$MainwpLg>`





## Mainwp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mainwp
include('simpleicons-14/M/Mainwp')

' renders the element
Mainwp('Mainwp', 'Mainwp', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mainwp
include('simpleicons-14/M/Mainwp')

' renders the element
Mainwp('Mainwp', 'Mainwp', 'an optional tech label', 'an optional description')
@enduml
```

