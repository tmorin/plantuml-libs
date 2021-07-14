# Siemens


```text
simpleicons-5/S/Siemens
```

```text
include('simpleicons-5/S/Siemens')
```



| Illustration | Siemens |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Siemens.png) | ![illustration for Siemens](../../simpleicons-5/S/Siemens.Local.png) |




## Siemens

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Siemens
include('simpleicons-5/S/Siemens')

' renders the element
Siemens('Siemens', 'Siemens', 'an optional tech label')
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

' loads the Item which embeds the element Siemens
include('simpleicons-5/S/Siemens')

' renders the element
Siemens('Siemens', 'Siemens', 'an optional tech label')
@enduml
```

