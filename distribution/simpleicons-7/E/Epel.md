# Epel


```text
simpleicons-7/E/Epel
```

```text
include('simpleicons-7/E/Epel')
```



| Illustration | Epel |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/E/Epel.png) | ![illustration for Epel](../../simpleicons-7/E/Epel.Local.png) |




## Epel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Epel
include('simpleicons-7/E/Epel')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Epel
include('simpleicons-7/E/Epel')

' renders the element
Epel('Epel', 'Epel', 'an optional tech label')
@enduml
```

