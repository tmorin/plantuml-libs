# Oneplus


```text
simpleicons-5/O/Oneplus
```

```text
include('simpleicons-5/O/Oneplus')
```



| Illustration | Oneplus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/O/Oneplus.png) | ![illustration for Oneplus](../../simpleicons-5/O/Oneplus.Local.png) |




## Oneplus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Oneplus
include('simpleicons-5/O/Oneplus')

' renders the element
Oneplus('Oneplus', 'Oneplus', 'an optional tech label')
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

' loads the Item which embeds the element Oneplus
include('simpleicons-5/O/Oneplus')

' renders the element
Oneplus('Oneplus', 'Oneplus', 'an optional tech label')
@enduml
```

