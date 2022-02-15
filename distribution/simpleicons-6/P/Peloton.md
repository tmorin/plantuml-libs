# Peloton


```text
simpleicons-6/P/Peloton
```

```text
include('simpleicons-6/P/Peloton')
```



| Illustration | Peloton |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Peloton.png) | ![illustration for Peloton](../../simpleicons-6/P/Peloton.Local.png) |




## Peloton

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Peloton
include('simpleicons-6/P/Peloton')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Peloton
include('simpleicons-6/P/Peloton')

' renders the element
Peloton('Peloton', 'Peloton', 'an optional tech label')
@enduml
```

