# Checkmarx


```text
simpleicons-5/C/Checkmarx
```

```text
include('simpleicons-5/C/Checkmarx')
```



| Illustration | Checkmarx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Checkmarx.png) | ![illustration for Checkmarx](../../simpleicons-5/C/Checkmarx.Local.png) |




## Checkmarx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Checkmarx
include('simpleicons-5/C/Checkmarx')

' renders the element
Checkmarx('Checkmarx', 'Checkmarx', 'an optional tech label')
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

' loads the Item which embeds the element Checkmarx
include('simpleicons-5/C/Checkmarx')

' renders the element
Checkmarx('Checkmarx', 'Checkmarx', 'an optional tech label')
@enduml
```

