# Opennebula


```text
simpleicons-5/O/Opennebula
```

```text
include('simpleicons-5/O/Opennebula')
```



| Illustration | Opennebula |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/O/Opennebula.png) | ![illustration for Opennebula](../../simpleicons-5/O/Opennebula.Local.png) |




## Opennebula

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Opennebula
include('simpleicons-5/O/Opennebula')

' renders the element
Opennebula('Opennebula', 'Opennebula', 'an optional tech label')
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

' loads the Item which embeds the element Opennebula
include('simpleicons-5/O/Opennebula')

' renders the element
Opennebula('Opennebula', 'Opennebula', 'an optional tech label')
@enduml
```

