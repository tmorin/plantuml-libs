# Infiniti


```text
simpleicons-8/I/Infiniti
```

```text
include('simpleicons-8/I/Infiniti')
```



| Illustration | Infiniti |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/I/Infiniti.png) | ![illustration for Infiniti](../../simpleicons-8/I/Infiniti.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InfinitiXs>`
- `<$InfinitiSm>`
- `<$InfinitiMd>`
- `<$InfinitiLg>`





## Infiniti

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Infiniti
include('simpleicons-8/I/Infiniti')

' renders the element
Infiniti('Infiniti', 'Infiniti', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Infiniti
include('simpleicons-8/I/Infiniti')

' renders the element
Infiniti('Infiniti', 'Infiniti', 'an optional tech label', 'an optional description')
@enduml
```

