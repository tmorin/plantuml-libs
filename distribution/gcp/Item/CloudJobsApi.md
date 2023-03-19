# CloudJobsApi


```text
gcp/Item/CloudJobsApi
```

```text
include('gcp/Item/CloudJobsApi')
```



| Illustration | CloudJobsApi | CloudJobsApiCard | CloudJobsApiGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../gcp/Item/CloudJobsApi.png) | ![illustration for CloudJobsApi](../../gcp/Item/CloudJobsApi.Local.png) | ![illustration for CloudJobsApiCard](../../gcp/Item/CloudJobsApiCard.Local.png) | ![illustration for CloudJobsApiGroup](../../gcp/Item/CloudJobsApiGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloudJobsApiXs>`
- `<$CloudJobsApiSm>`
- `<$CloudJobsApiMd>`
- `<$CloudJobsApiLg>`





## CloudJobsApi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudJobsApi
include('gcp/Item/CloudJobsApi')

' renders the element
CloudJobsApi('CloudJobsApi', 'Cloud Jobs Api', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CloudJobsApi
include('gcp/Item/CloudJobsApi')

' renders the element
CloudJobsApi('CloudJobsApi', 'Cloud Jobs Api', 'an optional tech label', 'an optional description')
@enduml
```

## CloudJobsApiCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudJobsApiCard
include('gcp/Item/CloudJobsApi')

' renders the element
CloudJobsApiCard('CloudJobsApiCard', 'Cloud Jobs Api Card', 'an optional description')
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

' loads the Item which embeds the element CloudJobsApiCard
include('gcp/Item/CloudJobsApi')

' renders the element
CloudJobsApiCard('CloudJobsApiCard', 'Cloud Jobs Api Card', 'an optional description')
@enduml
```

## CloudJobsApiGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudJobsApiGroup
include('gcp/Item/CloudJobsApi')

' renders the element
CloudJobsApiGroup('CloudJobsApiGroup', 'Cloud Jobs Api Group', 'an optional tech label') {
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

' loads the Item which embeds the element CloudJobsApiGroup
include('gcp/Item/CloudJobsApi')

' renders the element
CloudJobsApiGroup('CloudJobsApiGroup', 'Cloud Jobs Api Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

