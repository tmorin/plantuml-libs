# Oneplus


```text
simpleicons-8/O/Oneplus
```

```text
include('simpleicons-8/O/Oneplus')
```



| Illustration | Oneplus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/O/Oneplus.png) | ![illustration for Oneplus](../../simpleicons-8/O/Oneplus.Local.png) |




## Oneplus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Oneplus
include('simpleicons-8/O/Oneplus')

' renders the element
Oneplus('Oneplus', 'Oneplus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Oneplus
include('simpleicons-8/O/Oneplus')

' renders the element
Oneplus('Oneplus', 'Oneplus', 'an optional tech label', 'an optional description')
@enduml
```

