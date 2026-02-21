# Republicofgamers


```text
simpleicons/R/Republicofgamers
```

```text
include('simpleicons/R/Republicofgamers')
```



| Illustration | Republicofgamers |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Republicofgamers.png) | ![illustration for Republicofgamers](../../simpleicons/R/Republicofgamers.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RepublicofgamersXs>`
- `<$RepublicofgamersSm>`
- `<$RepublicofgamersMd>`
- `<$RepublicofgamersLg>`





## Republicofgamers

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Republicofgamers
include('simpleicons/R/Republicofgamers')

' renders the element
Republicofgamers('Republicofgamers', 'Republicofgamers', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Republicofgamers
include('simpleicons/R/Republicofgamers')

' renders the element
Republicofgamers('Republicofgamers', 'Republicofgamers', 'an optional tech label', 'an optional description')
@enduml
```

