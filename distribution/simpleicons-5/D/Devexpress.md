# Devexpress


```text
simpleicons-5/D/Devexpress
```

```text
include('simpleicons-5/D/Devexpress')
```



| Illustration | Devexpress |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Devexpress.png) | ![illustration for Devexpress](../../simpleicons-5/D/Devexpress.Local.png) |




## Devexpress

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Devexpress
include('simpleicons-5/D/Devexpress')

' renders the element
Devexpress('Devexpress', 'Devexpress', 'an optional tech label')
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

' loads the Item which embeds the element Devexpress
include('simpleicons-5/D/Devexpress')

' renders the element
Devexpress('Devexpress', 'Devexpress', 'an optional tech label')
@enduml
```

