# Mariadbfoundation


```text
simpleicons-5/M/Mariadbfoundation
```

```text
include('simpleicons-5/M/Mariadbfoundation')
```



| Illustration | Mariadbfoundation |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Mariadbfoundation.png) | ![illustration for Mariadbfoundation](../../simpleicons-5/M/Mariadbfoundation.Local.png) |




## Mariadbfoundation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Mariadbfoundation
include('simpleicons-5/M/Mariadbfoundation')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Mariadbfoundation
include('simpleicons-5/M/Mariadbfoundation')

' renders the element
Mariadbfoundation('Mariadbfoundation', 'Mariadbfoundation', 'an optional tech label')
@enduml
```

