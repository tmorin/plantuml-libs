# Seagate


```text
simpleicons-14/S/Seagate
```

```text
include('simpleicons-14/S/Seagate')
```



| Illustration | Seagate |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Seagate.png) | ![illustration for Seagate](../../simpleicons-14/S/Seagate.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SeagateXs>`
- `<$SeagateSm>`
- `<$SeagateMd>`
- `<$SeagateLg>`





## Seagate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Seagate
include('simpleicons-14/S/Seagate')

' renders the element
Seagate('Seagate', 'Seagate', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Seagate
include('simpleicons-14/S/Seagate')

' renders the element
Seagate('Seagate', 'Seagate', 'an optional tech label', 'an optional description')
@enduml
```

