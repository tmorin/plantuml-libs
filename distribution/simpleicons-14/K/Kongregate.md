# Kongregate


```text
simpleicons-14/K/Kongregate
```

```text
include('simpleicons-14/K/Kongregate')
```



| Illustration | Kongregate |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/K/Kongregate.png) | ![illustration for Kongregate](../../simpleicons-14/K/Kongregate.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KongregateXs>`
- `<$KongregateSm>`
- `<$KongregateMd>`
- `<$KongregateLg>`





## Kongregate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Kongregate
include('simpleicons-14/K/Kongregate')

' renders the element
Kongregate('Kongregate', 'Kongregate', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kongregate
include('simpleicons-14/K/Kongregate')

' renders the element
Kongregate('Kongregate', 'Kongregate', 'an optional tech label', 'an optional description')
@enduml
```

