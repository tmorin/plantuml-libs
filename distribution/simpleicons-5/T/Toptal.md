# Toptal


```text
simpleicons-5/T/Toptal
```

```text
include('simpleicons-5/T/Toptal')
```



| Illustration | Toptal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Toptal.png) | ![illustration for Toptal](../../simpleicons-5/T/Toptal.Local.png) |




## Toptal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Toptal
include('simpleicons-5/T/Toptal')

' renders the element
Toptal('Toptal', 'Toptal', 'an optional tech label')
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

' loads the Item which embeds the element Toptal
include('simpleicons-5/T/Toptal')

' renders the element
Toptal('Toptal', 'Toptal', 'an optional tech label')
@enduml
```

