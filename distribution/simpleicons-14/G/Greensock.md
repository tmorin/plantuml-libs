# Greensock


```text
simpleicons-14/G/Greensock
```

```text
include('simpleicons-14/G/Greensock')
```



| Illustration | Greensock |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Greensock.png) | ![illustration for Greensock](../../simpleicons-14/G/Greensock.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Greensock
include('simpleicons-14/G/Greensock')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Greensock
include('simpleicons-14/G/Greensock')

' renders the element
Greensock('Greensock', 'Greensock', 'an optional tech label', 'an optional description')
@enduml
```

