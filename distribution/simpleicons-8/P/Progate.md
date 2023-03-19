# Progate


```text
simpleicons-8/P/Progate
```

```text
include('simpleicons-8/P/Progate')
```



| Illustration | Progate |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Progate.png) | ![illustration for Progate](../../simpleicons-8/P/Progate.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Progate
include('simpleicons-8/P/Progate')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Progate
include('simpleicons-8/P/Progate')

' renders the element
Progate('Progate', 'Progate', 'an optional tech label', 'an optional description')
@enduml
```

