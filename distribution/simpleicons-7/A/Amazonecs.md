# Amazonecs


```text
simpleicons-7/A/Amazonecs
```

```text
include('simpleicons-7/A/Amazonecs')
```



| Illustration | Amazonecs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Amazonecs.png) | ![illustration for Amazonecs](../../simpleicons-7/A/Amazonecs.Local.png) |




## Amazonecs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Amazonecs
include('simpleicons-7/A/Amazonecs')

' renders the element
Amazonecs('Amazonecs', 'Amazonecs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Amazonecs
include('simpleicons-7/A/Amazonecs')

' renders the element
Amazonecs('Amazonecs', 'Amazonecs', 'an optional tech label', 'an optional description')
@enduml
```

