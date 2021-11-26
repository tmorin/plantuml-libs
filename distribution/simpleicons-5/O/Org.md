# Org


```text
simpleicons-5/O/Org
```

```text
include('simpleicons-5/O/Org')
```



| Illustration | Org |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/O/Org.png) | ![illustration for Org](../../simpleicons-5/O/Org.Local.png) |




## Org

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Org
include('simpleicons-5/O/Org')

' renders the element
Org('Org', 'Org', 'an optional tech label')
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

' loads the Item which embeds the element Org
include('simpleicons-5/O/Org')

' renders the element
Org('Org', 'Org', 'an optional tech label')
@enduml
```

