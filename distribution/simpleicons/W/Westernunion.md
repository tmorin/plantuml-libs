# Westernunion


```text
simpleicons/W/Westernunion
```

```text
include('simpleicons/W/Westernunion')
```



| Illustration | Westernunion |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/Westernunion.png) | ![illustration for Westernunion](../../simpleicons/W/Westernunion.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WesternunionXs>`
- `<$WesternunionSm>`
- `<$WesternunionMd>`
- `<$WesternunionLg>`





## Westernunion

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Westernunion
include('simpleicons/W/Westernunion')

' renders the element
Westernunion('Westernunion', 'Westernunion', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Westernunion
include('simpleicons/W/Westernunion')

' renders the element
Westernunion('Westernunion', 'Westernunion', 'an optional tech label', 'an optional description')
@enduml
```

