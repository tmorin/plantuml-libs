# Openapiinitiative


```text
simpleicons-6/O/Openapiinitiative
```

```text
include('simpleicons-6/O/Openapiinitiative')
```



| Illustration | Openapiinitiative |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/O/Openapiinitiative.png) | ![illustration for Openapiinitiative](../../simpleicons-6/O/Openapiinitiative.Local.png) |




## Openapiinitiative

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Openapiinitiative
include('simpleicons-6/O/Openapiinitiative')

' renders the element
Openapiinitiative('Openapiinitiative', 'Openapiinitiative', 'an optional tech label')
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

' loads the Item which embeds the element Openapiinitiative
include('simpleicons-6/O/Openapiinitiative')

' renders the element
Openapiinitiative('Openapiinitiative', 'Openapiinitiative', 'an optional tech label')
@enduml
```

