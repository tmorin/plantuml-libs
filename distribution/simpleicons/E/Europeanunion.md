# Europeanunion


```text
simpleicons/E/Europeanunion
```

```text
include('simpleicons/E/Europeanunion')
```



| Illustration | Europeanunion |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/E/Europeanunion.png) | ![illustration for Europeanunion](../../simpleicons/E/Europeanunion.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EuropeanunionXs>`
- `<$EuropeanunionSm>`
- `<$EuropeanunionMd>`
- `<$EuropeanunionLg>`





## Europeanunion

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Europeanunion
include('simpleicons/E/Europeanunion')

' renders the element
Europeanunion('Europeanunion', 'Europeanunion', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Europeanunion
include('simpleicons/E/Europeanunion')

' renders the element
Europeanunion('Europeanunion', 'Europeanunion', 'an optional tech label', 'an optional description')
@enduml
```

