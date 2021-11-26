# Walkman


```text
simpleicons-5/W/Walkman
```

```text
include('simpleicons-5/W/Walkman')
```



| Illustration | Walkman |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/W/Walkman.png) | ![illustration for Walkman](../../simpleicons-5/W/Walkman.Local.png) |




## Walkman

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Walkman
include('simpleicons-5/W/Walkman')

' renders the element
Walkman('Walkman', 'Walkman', 'an optional tech label')
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

' loads the Item which embeds the element Walkman
include('simpleicons-5/W/Walkman')

' renders the element
Walkman('Walkman', 'Walkman', 'an optional tech label')
@enduml
```

