# Squareenix


```text
simpleicons/S/Squareenix
```

```text
include('simpleicons/S/Squareenix')
```



| Illustration | Squareenix |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Squareenix.png) | ![illustration for Squareenix](../../simpleicons/S/Squareenix.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareenixXs>`
- `<$SquareenixSm>`
- `<$SquareenixMd>`
- `<$SquareenixLg>`





## Squareenix

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Squareenix
include('simpleicons/S/Squareenix')

' renders the element
Squareenix('Squareenix', 'Squareenix', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Squareenix
include('simpleicons/S/Squareenix')

' renders the element
Squareenix('Squareenix', 'Squareenix', 'an optional tech label', 'an optional description')
@enduml
```

