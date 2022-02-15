# Iveco


```text
simpleicons-6/I/Iveco
```

```text
include('simpleicons-6/I/Iveco')
```



| Illustration | Iveco |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/I/Iveco.png) | ![illustration for Iveco](../../simpleicons-6/I/Iveco.Local.png) |




## Iveco

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Iveco
include('simpleicons-6/I/Iveco')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Iveco
include('simpleicons-6/I/Iveco')

' renders the element
Iveco('Iveco', 'Iveco', 'an optional tech label')
@enduml
```

