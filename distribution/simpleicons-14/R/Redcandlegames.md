# Redcandlegames


```text
simpleicons-14/R/Redcandlegames
```

```text
include('simpleicons-14/R/Redcandlegames')
```



| Illustration | Redcandlegames |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Redcandlegames.png) | ![illustration for Redcandlegames](../../simpleicons-14/R/Redcandlegames.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RedcandlegamesXs>`
- `<$RedcandlegamesSm>`
- `<$RedcandlegamesMd>`
- `<$RedcandlegamesLg>`





## Redcandlegames

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Redcandlegames
include('simpleicons-14/R/Redcandlegames')

' renders the element
Redcandlegames('Redcandlegames', 'Redcandlegames', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Redcandlegames
include('simpleicons-14/R/Redcandlegames')

' renders the element
Redcandlegames('Redcandlegames', 'Redcandlegames', 'an optional tech label', 'an optional description')
@enduml
```

