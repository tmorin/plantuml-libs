# Steelseries


```text
simpleicons/S/Steelseries
```

```text
include('simpleicons/S/Steelseries')
```



| Illustration | Steelseries |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Steelseries.png) | ![illustration for Steelseries](../../simpleicons/S/Steelseries.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SteelseriesXs>`
- `<$SteelseriesSm>`
- `<$SteelseriesMd>`
- `<$SteelseriesLg>`





## Steelseries

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Steelseries
include('simpleicons/S/Steelseries')

' renders the element
Steelseries('Steelseries', 'Steelseries', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Steelseries
include('simpleicons/S/Steelseries')

' renders the element
Steelseries('Steelseries', 'Steelseries', 'an optional tech label', 'an optional description')
@enduml
```

