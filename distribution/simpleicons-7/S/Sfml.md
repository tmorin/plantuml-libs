# Sfml


```text
simpleicons-7/S/Sfml
```

```text
include('simpleicons-7/S/Sfml')
```



| Illustration | Sfml |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Sfml.png) | ![illustration for Sfml](../../simpleicons-7/S/Sfml.Local.png) |




## Sfml

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Sfml
include('simpleicons-7/S/Sfml')

' renders the element
Sfml('Sfml', 'Sfml', 'an optional tech label')
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

' loads the Item which embeds the element Sfml
include('simpleicons-7/S/Sfml')

' renders the element
Sfml('Sfml', 'Sfml', 'an optional tech label')
@enduml
```

