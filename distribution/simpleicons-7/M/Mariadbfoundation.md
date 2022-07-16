# Mariadbfoundation


```text
simpleicons-7/M/Mariadbfoundation
```

```text
include('simpleicons-7/M/Mariadbfoundation')
```



| Illustration | Mariadbfoundation |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/M/Mariadbfoundation.png) | ![illustration for Mariadbfoundation](../../simpleicons-7/M/Mariadbfoundation.Local.png) |




## Mariadbfoundation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Mariadbfoundation
include('simpleicons-7/M/Mariadbfoundation')

' renders the element
Mariadbfoundation('Mariadbfoundation', 'Mariadbfoundation', 'an optional tech label')
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

' loads the Item which embeds the element Mariadbfoundation
include('simpleicons-7/M/Mariadbfoundation')

' renders the element
Mariadbfoundation('Mariadbfoundation', 'Mariadbfoundation', 'an optional tech label')
@enduml
```

