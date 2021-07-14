# Elasticstack


```text
simpleicons-5/E/Elasticstack
```

```text
include('simpleicons-5/E/Elasticstack')
```



| Illustration | Elasticstack |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/E/Elasticstack.png) | ![illustration for Elasticstack](../../simpleicons-5/E/Elasticstack.Local.png) |




## Elasticstack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Elasticstack
include('simpleicons-5/E/Elasticstack')

' renders the element
Elasticstack('Elasticstack', 'Elasticstack', 'an optional tech label')
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

' loads the Item which embeds the element Elasticstack
include('simpleicons-5/E/Elasticstack')

' renders the element
Elasticstack('Elasticstack', 'Elasticstack', 'an optional tech label')
@enduml
```

