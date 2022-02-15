# Volkswagen


```text
simpleicons-6/V/Volkswagen
```

```text
include('simpleicons-6/V/Volkswagen')
```



| Illustration | Volkswagen |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/V/Volkswagen.png) | ![illustration for Volkswagen](../../simpleicons-6/V/Volkswagen.Local.png) |




## Volkswagen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Volkswagen
include('simpleicons-6/V/Volkswagen')

' renders the element
Volkswagen('Volkswagen', 'Volkswagen', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Volkswagen
include('simpleicons-6/V/Volkswagen')

' renders the element
Volkswagen('Volkswagen', 'Volkswagen', 'an optional tech label')
@enduml
```

