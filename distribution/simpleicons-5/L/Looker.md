# Looker


```text
simpleicons-5/L/Looker
```

```text
include('simpleicons-5/L/Looker')
```



| Illustration | Looker |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/L/Looker.png) | ![illustration for Looker](../../simpleicons-5/L/Looker.Local.png) |




## Looker

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Looker
include('simpleicons-5/L/Looker')

' renders the element
Looker('Looker', 'Looker', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Looker
include('simpleicons-5/L/Looker')

' renders the element
Looker('Looker', 'Looker', 'an optional tech label')
@enduml
```

