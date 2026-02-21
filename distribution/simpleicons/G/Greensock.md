# Greensock


```text
simpleicons/G/Greensock
```

```text
include('simpleicons/G/Greensock')
```



| Illustration | Greensock |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Greensock.png) | ![illustration for Greensock](../../simpleicons/G/Greensock.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GreensockXs>`
- `<$GreensockSm>`
- `<$GreensockMd>`
- `<$GreensockLg>`





## Greensock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Greensock
include('simpleicons/G/Greensock')

' renders the element
Greensock('Greensock', 'Greensock', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Greensock
include('simpleicons/G/Greensock')

' renders the element
Greensock('Greensock', 'Greensock', 'an optional tech label', 'an optional description')
@enduml
```

