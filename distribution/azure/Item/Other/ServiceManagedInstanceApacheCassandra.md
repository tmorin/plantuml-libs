# ServiceManagedInstanceApacheCassandra


```text
azure/Item/Other/ServiceManagedInstanceApacheCassandra
```

```text
include('azure/Item/Other/ServiceManagedInstanceApacheCassandra')
```



| Illustration | ServiceManagedInstanceApacheCassandra | ServiceManagedInstanceApacheCassandraCard | ServiceManagedInstanceApacheCassandraGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Other/ServiceManagedInstanceApacheCassandra.png) | ![illustration for ServiceManagedInstanceApacheCassandra](../../../azure/Item/Other/ServiceManagedInstanceApacheCassandra.Local.png) | ![illustration for ServiceManagedInstanceApacheCassandraCard](../../../azure/Item/Other/ServiceManagedInstanceApacheCassandraCard.Local.png) | ![illustration for ServiceManagedInstanceApacheCassandraGroup](../../../azure/Item/Other/ServiceManagedInstanceApacheCassandraGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceManagedInstanceApacheCassandraXs>`
- `<$ServiceManagedInstanceApacheCassandraSm>`
- `<$ServiceManagedInstanceApacheCassandraMd>`
- `<$ServiceManagedInstanceApacheCassandraLg>`





## ServiceManagedInstanceApacheCassandra

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceManagedInstanceApacheCassandra
include('azure/Item/Other/ServiceManagedInstanceApacheCassandra')

' renders the element
ServiceManagedInstanceApacheCassandra('ServiceManagedInstanceApacheCassandra', 'Service Managed Instance Apache Cassandra', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceManagedInstanceApacheCassandra
include('azure/Item/Other/ServiceManagedInstanceApacheCassandra')

' renders the element
ServiceManagedInstanceApacheCassandra('ServiceManagedInstanceApacheCassandra', 'Service Managed Instance Apache Cassandra', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceManagedInstanceApacheCassandraCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceManagedInstanceApacheCassandraCard
include('azure/Item/Other/ServiceManagedInstanceApacheCassandra')

' renders the element
ServiceManagedInstanceApacheCassandraCard('ServiceManagedInstanceApacheCassandraCard', 'Service Managed Instance Apache Cassandra Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceManagedInstanceApacheCassandraCard
include('azure/Item/Other/ServiceManagedInstanceApacheCassandra')

' renders the element
ServiceManagedInstanceApacheCassandraCard('ServiceManagedInstanceApacheCassandraCard', 'Service Managed Instance Apache Cassandra Card', 'an optional description')
@enduml
```

## ServiceManagedInstanceApacheCassandraGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceManagedInstanceApacheCassandraGroup
include('azure/Item/Other/ServiceManagedInstanceApacheCassandra')

' renders the element
ServiceManagedInstanceApacheCassandraGroup('ServiceManagedInstanceApacheCassandraGroup', 'Service Managed Instance Apache Cassandra Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceManagedInstanceApacheCassandraGroup
include('azure/Item/Other/ServiceManagedInstanceApacheCassandra')

' renders the element
ServiceManagedInstanceApacheCassandraGroup('ServiceManagedInstanceApacheCassandraGroup', 'Service Managed Instance Apache Cassandra Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

