# Peloton


```text
simpleicons-5/P/Peloton
```

```text
include('simpleicons-5/P/Peloton')
```



| Illustration | Peloton |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Peloton.png) | ![illustration for Peloton](../../simpleicons-5/P/Peloton.Local.png) |




## Peloton

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Peloton
include('simpleicons-5/P/Peloton')

' renders the element
Peloton('Peloton', 'Peloton', 'an optional tech label')
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

' loads the Item which embeds the element Peloton
include('simpleicons-5/P/Peloton')

' renders the element
Peloton('Peloton', 'Peloton', 'an optional tech label')
@enduml
```

