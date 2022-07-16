# Ghostery


```text
simpleicons-7/G/Ghostery
```

```text
include('simpleicons-7/G/Ghostery')
```



| Illustration | Ghostery |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/G/Ghostery.png) | ![illustration for Ghostery](../../simpleicons-7/G/Ghostery.Local.png) |




## Ghostery

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Ghostery
include('simpleicons-7/G/Ghostery')

' renders the element
Ghostery('Ghostery', 'Ghostery', 'an optional tech label')
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

' loads the Item which embeds the element Ghostery
include('simpleicons-7/G/Ghostery')

' renders the element
Ghostery('Ghostery', 'Ghostery', 'an optional tech label')
@enduml
```

