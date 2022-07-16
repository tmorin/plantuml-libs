# Openaccess


```text
simpleicons-7/O/Openaccess
```

```text
include('simpleicons-7/O/Openaccess')
```



| Illustration | Openaccess |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/O/Openaccess.png) | ![illustration for Openaccess](../../simpleicons-7/O/Openaccess.Local.png) |




## Openaccess

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Openaccess
include('simpleicons-7/O/Openaccess')

' renders the element
Openaccess('Openaccess', 'Openaccess', 'an optional tech label')
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

' loads the Item which embeds the element Openaccess
include('simpleicons-7/O/Openaccess')

' renders the element
Openaccess('Openaccess', 'Openaccess', 'an optional tech label')
@enduml
```

