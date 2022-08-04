# Openaigym


```text
simpleicons-7/O/Openaigym
```

```text
include('simpleicons-7/O/Openaigym')
```



| Illustration | Openaigym |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/O/Openaigym.png) | ![illustration for Openaigym](../../simpleicons-7/O/Openaigym.Local.png) |




## Openaigym

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Openaigym
include('simpleicons-7/O/Openaigym')

' renders the element
Openaigym('Openaigym', 'Openaigym', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Openaigym
include('simpleicons-7/O/Openaigym')

' renders the element
Openaigym('Openaigym', 'Openaigym', 'an optional tech label', 'an optional description')
@enduml
```

