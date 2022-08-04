# DataLossPreventionApi


```text
gcp/Item/DataLossPreventionApi
```

```text
include('gcp/Item/DataLossPreventionApi')
```



| Illustration | DataLossPreventionApi | DataLossPreventionApiCard | DataLossPreventionApiGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../gcp/Item/DataLossPreventionApi.png) | ![illustration for DataLossPreventionApi](../../gcp/Item/DataLossPreventionApi.Local.png) | ![illustration for DataLossPreventionApiCard](../../gcp/Item/DataLossPreventionApiCard.Local.png) | ![illustration for DataLossPreventionApiGroup](../../gcp/Item/DataLossPreventionApiGroup.Local.png) |




## DataLossPreventionApi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element DataLossPreventionApi
include('gcp/Item/DataLossPreventionApi')

' renders the element
DataLossPreventionApi('DataLossPreventionApi', 'Data Loss Prevention Api', 'an optional tech label', 'an optional description')
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
include('gcp/bootstrap')

' loads the Item which embeds the element DataLossPreventionApi
include('gcp/Item/DataLossPreventionApi')

' renders the element
DataLossPreventionApi('DataLossPreventionApi', 'Data Loss Prevention Api', 'an optional tech label', 'an optional description')
@enduml
```

## DataLossPreventionApiCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element DataLossPreventionApiCard
include('gcp/Item/DataLossPreventionApi')

' renders the element
DataLossPreventionApiCard('DataLossPreventionApiCard', 'Data Loss Prevention Api Card', 'an optional description')
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
include('gcp/bootstrap')

' loads the Item which embeds the element DataLossPreventionApiCard
include('gcp/Item/DataLossPreventionApi')

' renders the element
DataLossPreventionApiCard('DataLossPreventionApiCard', 'Data Loss Prevention Api Card', 'an optional description')
@enduml
```

## DataLossPreventionApiGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element DataLossPreventionApiGroup
include('gcp/Item/DataLossPreventionApi')

' renders the element
DataLossPreventionApiGroup('DataLossPreventionApiGroup', 'Data Loss Prevention Api Group', 'an optional tech label') {
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
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element DataLossPreventionApiGroup
include('gcp/Item/DataLossPreventionApi')

' renders the element
DataLossPreventionApiGroup('DataLossPreventionApiGroup', 'Data Loss Prevention Api Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

