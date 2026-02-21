# Jeep


```text
simpleicons/J/Jeep
```

```text
include('simpleicons/J/Jeep')
```



| Illustration | Jeep |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/J/Jeep.png) | ![illustration for Jeep](../../simpleicons/J/Jeep.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JeepXs>`
- `<$JeepSm>`
- `<$JeepMd>`
- `<$JeepLg>`





## Jeep

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Jeep
include('simpleicons/J/Jeep')

' renders the element
Jeep('Jeep', 'Jeep', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Jeep
include('simpleicons/J/Jeep')

' renders the element
Jeep('Jeep', 'Jeep', 'an optional tech label', 'an optional description')
@enduml
```

