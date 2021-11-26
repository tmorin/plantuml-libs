# Apachecloudstack


```text
simpleicons-5/A/Apachecloudstack
```

```text
include('simpleicons-5/A/Apachecloudstack')
```



| Illustration | Apachecloudstack |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Apachecloudstack.png) | ![illustration for Apachecloudstack](../../simpleicons-5/A/Apachecloudstack.Local.png) |




## Apachecloudstack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Apachecloudstack
include('simpleicons-5/A/Apachecloudstack')

' renders the element
Apachecloudstack('Apachecloudstack', 'Apachecloudstack', 'an optional tech label')
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

' loads the Item which embeds the element Apachecloudstack
include('simpleicons-5/A/Apachecloudstack')

' renders the element
Apachecloudstack('Apachecloudstack', 'Apachecloudstack', 'an optional tech label')
@enduml
```

