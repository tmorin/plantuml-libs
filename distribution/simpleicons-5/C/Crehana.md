# Crehana


```text
simpleicons-5/C/Crehana
```

```text
include('simpleicons-5/C/Crehana')
```



| Illustration | Crehana |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Crehana.png) | ![illustration for Crehana](../../simpleicons-5/C/Crehana.Local.png) |




## Crehana

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Crehana
include('simpleicons-5/C/Crehana')

' renders the element
Crehana('Crehana', 'Crehana', 'an optional tech label')
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

' loads the Item which embeds the element Crehana
include('simpleicons-5/C/Crehana')

' renders the element
Crehana('Crehana', 'Crehana', 'an optional tech label')
@enduml
```

