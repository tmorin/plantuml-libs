# Superuser


```text
simpleicons-8/S/Superuser
```

```text
include('simpleicons-8/S/Superuser')
```



| Illustration | Superuser |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Superuser.png) | ![illustration for Superuser](../../simpleicons-8/S/Superuser.Local.png) |




## Superuser

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Superuser
include('simpleicons-8/S/Superuser')

' renders the element
Superuser('Superuser', 'Superuser', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Superuser
include('simpleicons-8/S/Superuser')

' renders the element
Superuser('Superuser', 'Superuser', 'an optional tech label', 'an optional description')
@enduml
```

