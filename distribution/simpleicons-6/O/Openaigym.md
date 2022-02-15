# Openaigym


```text
simpleicons-6/O/Openaigym
```

```text
include('simpleicons-6/O/Openaigym')
```



| Illustration | Openaigym |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/O/Openaigym.png) | ![illustration for Openaigym](../../simpleicons-6/O/Openaigym.Local.png) |




## Openaigym

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Openaigym
include('simpleicons-6/O/Openaigym')

' renders the element
Openaigym('Openaigym', 'Openaigym', 'an optional tech label')
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

' loads the Item which embeds the element Openaigym
include('simpleicons-6/O/Openaigym')

' renders the element
Openaigym('Openaigym', 'Openaigym', 'an optional tech label')
@enduml
```

