# Microsoftvisio


```text
simpleicons-5/M/Microsoftvisio
```

```text
include('simpleicons-5/M/Microsoftvisio')
```



| Illustration | Microsoftvisio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Microsoftvisio.png) | ![illustration for Microsoftvisio](../../simpleicons-5/M/Microsoftvisio.Local.png) |




## Microsoftvisio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Microsoftvisio
include('simpleicons-5/M/Microsoftvisio')

' renders the element
Microsoftvisio('Microsoftvisio', 'Microsoftvisio', 'an optional tech label')
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

' loads the Item which embeds the element Microsoftvisio
include('simpleicons-5/M/Microsoftvisio')

' renders the element
Microsoftvisio('Microsoftvisio', 'Microsoftvisio', 'an optional tech label')
@enduml
```

