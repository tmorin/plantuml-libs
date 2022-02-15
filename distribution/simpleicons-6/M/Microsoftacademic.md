# Microsoftacademic


```text
simpleicons-6/M/Microsoftacademic
```

```text
include('simpleicons-6/M/Microsoftacademic')
```



| Illustration | Microsoftacademic |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Microsoftacademic.png) | ![illustration for Microsoftacademic](../../simpleicons-6/M/Microsoftacademic.Local.png) |




## Microsoftacademic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Microsoftacademic
include('simpleicons-6/M/Microsoftacademic')

' renders the element
Microsoftacademic('Microsoftacademic', 'Microsoftacademic', 'an optional tech label')
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

' loads the Item which embeds the element Microsoftacademic
include('simpleicons-6/M/Microsoftacademic')

' renders the element
Microsoftacademic('Microsoftacademic', 'Microsoftacademic', 'an optional tech label')
@enduml
```

