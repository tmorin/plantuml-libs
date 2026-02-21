# Ory


```text
simpleicons/O/Ory
```

```text
include('simpleicons/O/Ory')
```



| Illustration | Ory |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Ory.png) | ![illustration for Ory](../../simpleicons/O/Ory.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OryXs>`
- `<$OrySm>`
- `<$OryMd>`
- `<$OryLg>`





## Ory

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Ory
include('simpleicons/O/Ory')

' renders the element
Ory('Ory', 'Ory', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ory
include('simpleicons/O/Ory')

' renders the element
Ory('Ory', 'Ory', 'an optional tech label', 'an optional description')
@enduml
```

