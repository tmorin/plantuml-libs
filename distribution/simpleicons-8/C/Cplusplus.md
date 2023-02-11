# Cplusplus


```text
simpleicons-8/C/Cplusplus
```

```text
include('simpleicons-8/C/Cplusplus')
```



| Illustration | Cplusplus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Cplusplus.png) | ![illustration for Cplusplus](../../simpleicons-8/C/Cplusplus.Local.png) |




## Cplusplus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Cplusplus
include('simpleicons-8/C/Cplusplus')

' renders the element
Cplusplus('Cplusplus', 'Cplusplus', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Cplusplus
include('simpleicons-8/C/Cplusplus')

' renders the element
Cplusplus('Cplusplus', 'Cplusplus', 'an optional tech label', 'an optional description')
@enduml
```

