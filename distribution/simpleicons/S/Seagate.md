# Seagate


```text
simpleicons/S/Seagate
```

```text
include('simpleicons/S/Seagate')
```



| Illustration | Seagate |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Seagate.png) | ![illustration for Seagate](../../simpleicons/S/Seagate.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Seagate
include('simpleicons/S/Seagate')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Seagate
include('simpleicons/S/Seagate')

' renders the element
Seagate('Seagate', 'Seagate', 'an optional tech label', 'an optional description')
@enduml
```

