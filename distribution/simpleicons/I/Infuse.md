# Infuse


```text
simpleicons/I/Infuse
```

```text
include('simpleicons/I/Infuse')
```



| Illustration | Infuse |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/I/Infuse.png) | ![illustration for Infuse](../../simpleicons/I/Infuse.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InfuseXs>`
- `<$InfuseSm>`
- `<$InfuseMd>`
- `<$InfuseLg>`





## Infuse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Infuse
include('simpleicons/I/Infuse')

' renders the element
Infuse('Infuse', 'Infuse', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Infuse
include('simpleicons/I/Infuse')

' renders the element
Infuse('Infuse', 'Infuse', 'an optional tech label', 'an optional description')
@enduml
```

