# Aerospike


```text
simpleicons-7/A/Aerospike
```

```text
include('simpleicons-7/A/Aerospike')
```



| Illustration | Aerospike |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Aerospike.png) | ![illustration for Aerospike](../../simpleicons-7/A/Aerospike.Local.png) |




## Aerospike

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Aerospike
include('simpleicons-7/A/Aerospike')

' renders the element
Aerospike('Aerospike', 'Aerospike', 'an optional tech label')
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

' loads the Item which embeds the element Aerospike
include('simpleicons-7/A/Aerospike')

' renders the element
Aerospike('Aerospike', 'Aerospike', 'an optional tech label')
@enduml
```

