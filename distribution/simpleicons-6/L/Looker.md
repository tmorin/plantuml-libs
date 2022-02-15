# Looker


```text
simpleicons-6/L/Looker
```

```text
include('simpleicons-6/L/Looker')
```



| Illustration | Looker |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/L/Looker.png) | ![illustration for Looker](../../simpleicons-6/L/Looker.Local.png) |




## Looker

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Looker
include('simpleicons-6/L/Looker')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Looker
include('simpleicons-6/L/Looker')

' renders the element
Looker('Looker', 'Looker', 'an optional tech label')
@enduml
```

