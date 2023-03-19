# Ieee


```text
simpleicons-8/I/Ieee
```

```text
include('simpleicons-8/I/Ieee')
```



| Illustration | Ieee |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/I/Ieee.png) | ![illustration for Ieee](../../simpleicons-8/I/Ieee.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IeeeXs>`
- `<$IeeeSm>`
- `<$IeeeMd>`
- `<$IeeeLg>`





## Ieee

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Ieee
include('simpleicons-8/I/Ieee')

' renders the element
Ieee('Ieee', 'Ieee', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Ieee
include('simpleicons-8/I/Ieee')

' renders the element
Ieee('Ieee', 'Ieee', 'an optional tech label', 'an optional description')
@enduml
```

