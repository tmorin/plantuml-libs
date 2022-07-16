# Instructables


```text
simpleicons-7/I/Instructables
```

```text
include('simpleicons-7/I/Instructables')
```



| Illustration | Instructables |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/I/Instructables.png) | ![illustration for Instructables](../../simpleicons-7/I/Instructables.Local.png) |




## Instructables

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Instructables
include('simpleicons-7/I/Instructables')

' renders the element
Instructables('Instructables', 'Instructables', 'an optional tech label')
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

' loads the Item which embeds the element Instructables
include('simpleicons-7/I/Instructables')

' renders the element
Instructables('Instructables', 'Instructables', 'an optional tech label')
@enduml
```

