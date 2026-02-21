# Hermes


```text
simpleicons/H/Hermes
```

```text
include('simpleicons/H/Hermes')
```



| Illustration | Hermes |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Hermes.png) | ![illustration for Hermes](../../simpleicons/H/Hermes.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HermesXs>`
- `<$HermesSm>`
- `<$HermesMd>`
- `<$HermesLg>`





## Hermes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Hermes
include('simpleicons/H/Hermes')

' renders the element
Hermes('Hermes', 'Hermes', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hermes
include('simpleicons/H/Hermes')

' renders the element
Hermes('Hermes', 'Hermes', 'an optional tech label', 'an optional description')
@enduml
```

