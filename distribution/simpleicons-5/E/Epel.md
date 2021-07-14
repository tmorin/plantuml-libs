# Epel


```text
simpleicons-5/E/Epel
```

```text
include('simpleicons-5/E/Epel')
```



| Illustration | Epel |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/E/Epel.png) | ![illustration for Epel](../../simpleicons-5/E/Epel.Local.png) |




## Epel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Epel
include('simpleicons-5/E/Epel')

' renders the element
Epel('Epel', 'Epel', 'an optional tech label')
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

' loads the Item which embeds the element Epel
include('simpleicons-5/E/Epel')

' renders the element
Epel('Epel', 'Epel', 'an optional tech label')
@enduml
```

