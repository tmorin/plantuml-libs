# Cbs


```text
simpleicons-7/C/Cbs
```

```text
include('simpleicons-7/C/Cbs')
```



| Illustration | Cbs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Cbs.png) | ![illustration for Cbs](../../simpleicons-7/C/Cbs.Local.png) |




## Cbs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Cbs
include('simpleicons-7/C/Cbs')

' renders the element
Cbs('Cbs', 'Cbs', 'an optional tech label')
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

' loads the Item which embeds the element Cbs
include('simpleicons-7/C/Cbs')

' renders the element
Cbs('Cbs', 'Cbs', 'an optional tech label')
@enduml
```

