# Asana


```text
simpleicons-5/A/Asana
```

```text
include('simpleicons-5/A/Asana')
```



| Illustration | Asana |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Asana.png) | ![illustration for Asana](../../simpleicons-5/A/Asana.Local.png) |




## Asana

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Asana
include('simpleicons-5/A/Asana')

' renders the element
Asana('Asana', 'Asana', 'an optional tech label')
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

' loads the Item which embeds the element Asana
include('simpleicons-5/A/Asana')

' renders the element
Asana('Asana', 'Asana', 'an optional tech label')
@enduml
```

