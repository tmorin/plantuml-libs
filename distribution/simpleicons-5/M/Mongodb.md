# Mongodb


```text
simpleicons-5/M/Mongodb
```

```text
include('simpleicons-5/M/Mongodb')
```



| Illustration | Mongodb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Mongodb.png) | ![illustration for Mongodb](../../simpleicons-5/M/Mongodb.Local.png) |




## Mongodb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Mongodb
include('simpleicons-5/M/Mongodb')

' renders the element
Mongodb('Mongodb', 'Mongodb', 'an optional tech label')
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

' loads the Item which embeds the element Mongodb
include('simpleicons-5/M/Mongodb')

' renders the element
Mongodb('Mongodb', 'Mongodb', 'an optional tech label')
@enduml
```

