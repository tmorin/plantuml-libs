# Elasticcloud


```text
simpleicons-5/E/Elasticcloud
```

```text
include('simpleicons-5/E/Elasticcloud')
```



| Illustration | Elasticcloud |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/E/Elasticcloud.png) | ![illustration for Elasticcloud](../../simpleicons-5/E/Elasticcloud.Local.png) |




## Elasticcloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Elasticcloud
include('simpleicons-5/E/Elasticcloud')

' renders the element
Elasticcloud('Elasticcloud', 'Elasticcloud', 'an optional tech label')
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

' loads the Item which embeds the element Elasticcloud
include('simpleicons-5/E/Elasticcloud')

' renders the element
Elasticcloud('Elasticcloud', 'Elasticcloud', 'an optional tech label')
@enduml
```

