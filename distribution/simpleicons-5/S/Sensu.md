# Sensu


```text
simpleicons-5/S/Sensu
```

```text
include('simpleicons-5/S/Sensu')
```



| Illustration | Sensu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Sensu.png) | ![illustration for Sensu](../../simpleicons-5/S/Sensu.Local.png) |




## Sensu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Sensu
include('simpleicons-5/S/Sensu')

' renders the element
Sensu('Sensu', 'Sensu', 'an optional tech label')
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

' loads the Item which embeds the element Sensu
include('simpleicons-5/S/Sensu')

' renders the element
Sensu('Sensu', 'Sensu', 'an optional tech label')
@enduml
```

