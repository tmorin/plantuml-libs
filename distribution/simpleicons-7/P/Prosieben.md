# Prosieben


```text
simpleicons-7/P/Prosieben
```

```text
include('simpleicons-7/P/Prosieben')
```



| Illustration | Prosieben |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Prosieben.png) | ![illustration for Prosieben](../../simpleicons-7/P/Prosieben.Local.png) |




## Prosieben

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Prosieben
include('simpleicons-7/P/Prosieben')

' renders the element
Prosieben('Prosieben', 'Prosieben', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Prosieben
include('simpleicons-7/P/Prosieben')

' renders the element
Prosieben('Prosieben', 'Prosieben', 'an optional tech label')
@enduml
```

