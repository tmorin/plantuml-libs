# Iveco


```text
simpleicons-5/I/Iveco
```

```text
include('simpleicons-5/I/Iveco')
```



| Illustration | Iveco |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/I/Iveco.png) | ![illustration for Iveco](../../simpleicons-5/I/Iveco.Local.png) |




## Iveco

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Iveco
include('simpleicons-5/I/Iveco')

' renders the element
Iveco('Iveco', 'Iveco', 'an optional tech label')
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

' loads the Item which embeds the element Iveco
include('simpleicons-5/I/Iveco')

' renders the element
Iveco('Iveco', 'Iveco', 'an optional tech label')
@enduml
```

