# Katana


```text
simpleicons-5/K/Katana
```

```text
include('simpleicons-5/K/Katana')
```



| Illustration | Katana |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/K/Katana.png) | ![illustration for Katana](../../simpleicons-5/K/Katana.Local.png) |




## Katana

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Katana
include('simpleicons-5/K/Katana')

' renders the element
Katana('Katana', 'Katana', 'an optional tech label')
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

' loads the Item which embeds the element Katana
include('simpleicons-5/K/Katana')

' renders the element
Katana('Katana', 'Katana', 'an optional tech label')
@enduml
```

