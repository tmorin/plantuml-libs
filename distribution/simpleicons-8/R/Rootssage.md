# Rootssage


```text
simpleicons-8/R/Rootssage
```

```text
include('simpleicons-8/R/Rootssage')
```



| Illustration | Rootssage |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/R/Rootssage.png) | ![illustration for Rootssage](../../simpleicons-8/R/Rootssage.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RootssageXs>`
- `<$RootssageSm>`
- `<$RootssageMd>`
- `<$RootssageLg>`





## Rootssage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Rootssage
include('simpleicons-8/R/Rootssage')

' renders the element
Rootssage('Rootssage', 'Rootssage', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rootssage
include('simpleicons-8/R/Rootssage')

' renders the element
Rootssage('Rootssage', 'Rootssage', 'an optional tech label', 'an optional description')
@enduml
```

