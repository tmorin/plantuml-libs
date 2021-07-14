# CloudRoutes


```text
gcp/Item/Networking/CloudRoutes
```

```text
include('gcp/Item/Networking/CloudRoutes')
```



| Illustration | CloudRoutes | CloudRoutesCard | CloudRoutesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../gcp/Item/Networking/CloudRoutes.png) | ![illustration for CloudRoutes](../../../gcp/Item/Networking/CloudRoutes.Local.png) | ![illustration for CloudRoutesCard](../../../gcp/Item/Networking/CloudRoutesCard.Local.png) | ![illustration for CloudRoutesGroup](../../../gcp/Item/Networking/CloudRoutesGroup.Local.png) |




## CloudRoutes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudRoutes
include('gcp/Item/Networking/CloudRoutes')

' renders the element
CloudRoutes('CloudRoutes', 'Cloud Routes', 'an optional tech label')
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
include('gcp/bootstrap')

' loads the Item which embeds the element CloudRoutes
include('gcp/Item/Networking/CloudRoutes')

' renders the element
CloudRoutes('CloudRoutes', 'Cloud Routes', 'an optional tech label')
@enduml
```

## CloudRoutesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudRoutesCard
include('gcp/Item/Networking/CloudRoutes')

' renders the element
CloudRoutesCard('CloudRoutesCard', 'Cloud Routes Card', 'an optional description')
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
include('gcp/bootstrap')

' loads the Item which embeds the element CloudRoutesCard
include('gcp/Item/Networking/CloudRoutes')

' renders the element
CloudRoutesCard('CloudRoutesCard', 'Cloud Routes Card', 'an optional description')
@enduml
```

## CloudRoutesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudRoutesGroup
include('gcp/Item/Networking/CloudRoutes')

' renders the element
CloudRoutesGroup('CloudRoutesGroup', 'Cloud Routes Group', 'an optional tech label') {
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
include('gcp/bootstrap')

' loads the Item which embeds the element CloudRoutesGroup
include('gcp/Item/Networking/CloudRoutes')

' renders the element
CloudRoutesGroup('CloudRoutesGroup', 'Cloud Routes Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

