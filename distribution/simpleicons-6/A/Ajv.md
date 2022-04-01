# Ajv


```text
simpleicons-6/A/Ajv
```

```text
include('simpleicons-6/A/Ajv')
```



| Illustration | Ajv |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Ajv.png) | ![illustration for Ajv](../../simpleicons-6/A/Ajv.Local.png) |




## Ajv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Ajv
include('simpleicons-6/A/Ajv')

' renders the element
Ajv('Ajv', 'Ajv', 'an optional tech label')
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

' loads the Item which embeds the element Ajv
include('simpleicons-6/A/Ajv')

' renders the element
Ajv('Ajv', 'Ajv', 'an optional tech label')
@enduml
```

