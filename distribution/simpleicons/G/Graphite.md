# Graphite


```text
simpleicons/G/Graphite
```

```text
include('simpleicons/G/Graphite')
```



| Illustration | Graphite |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Graphite.png) | ![illustration for Graphite](../../simpleicons/G/Graphite.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GraphiteXs>`
- `<$GraphiteSm>`
- `<$GraphiteMd>`
- `<$GraphiteLg>`





## Graphite

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Graphite
include('simpleicons/G/Graphite')

' renders the element
Graphite('Graphite', 'Graphite', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Graphite
include('simpleicons/G/Graphite')

' renders the element
Graphite('Graphite', 'Graphite', 'an optional tech label', 'an optional description')
@enduml
```

