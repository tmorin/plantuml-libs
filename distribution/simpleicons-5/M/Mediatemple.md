# Mediatemple


```text
simpleicons-5/M/Mediatemple
```

```text
include('simpleicons-5/M/Mediatemple')
```



| Illustration | Mediatemple |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Mediatemple.png) | ![illustration for Mediatemple](../../simpleicons-5/M/Mediatemple.Local.png) |




## Mediatemple

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Mediatemple
include('simpleicons-5/M/Mediatemple')

' renders the element
Mediatemple('Mediatemple', 'Mediatemple', 'an optional tech label')
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

' loads the Item which embeds the element Mediatemple
include('simpleicons-5/M/Mediatemple')

' renders the element
Mediatemple('Mediatemple', 'Mediatemple', 'an optional tech label')
@enduml
```

