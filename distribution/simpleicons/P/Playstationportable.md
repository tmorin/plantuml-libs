# Playstationportable


```text
simpleicons/P/Playstationportable
```

```text
include('simpleicons/P/Playstationportable')
```



| Illustration | Playstationportable |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Playstationportable.png) | ![illustration for Playstationportable](../../simpleicons/P/Playstationportable.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlaystationportableXs>`
- `<$PlaystationportableSm>`
- `<$PlaystationportableMd>`
- `<$PlaystationportableLg>`





## Playstationportable

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Playstationportable
include('simpleicons/P/Playstationportable')

' renders the element
Playstationportable('Playstationportable', 'Playstationportable', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Playstationportable
include('simpleicons/P/Playstationportable')

' renders the element
Playstationportable('Playstationportable', 'Playstationportable', 'an optional tech label', 'an optional description')
@enduml
```

