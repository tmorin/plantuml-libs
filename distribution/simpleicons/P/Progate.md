# Progate


```text
simpleicons/P/Progate
```

```text
include('simpleicons/P/Progate')
```



| Illustration | Progate |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Progate.png) | ![illustration for Progate](../../simpleicons/P/Progate.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ProgateXs>`
- `<$ProgateSm>`
- `<$ProgateMd>`
- `<$ProgateLg>`





## Progate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Progate
include('simpleicons/P/Progate')

' renders the element
Progate('Progate', 'Progate', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Progate
include('simpleicons/P/Progate')

' renders the element
Progate('Progate', 'Progate', 'an optional tech label', 'an optional description')
@enduml
```

