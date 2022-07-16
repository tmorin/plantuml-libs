# Superuser


```text
simpleicons-7/S/Superuser
```

```text
include('simpleicons-7/S/Superuser')
```



| Illustration | Superuser |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Superuser.png) | ![illustration for Superuser](../../simpleicons-7/S/Superuser.Local.png) |




## Superuser

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Superuser
include('simpleicons-7/S/Superuser')

' renders the element
Superuser('Superuser', 'Superuser', 'an optional tech label')
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

' loads the Item which embeds the element Superuser
include('simpleicons-7/S/Superuser')

' renders the element
Superuser('Superuser', 'Superuser', 'an optional tech label')
@enduml
```

