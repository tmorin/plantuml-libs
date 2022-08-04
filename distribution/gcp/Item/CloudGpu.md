# CloudGpu


```text
gcp/Item/CloudGpu
```

```text
include('gcp/Item/CloudGpu')
```



| Illustration | CloudGpu | CloudGpuCard | CloudGpuGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../gcp/Item/CloudGpu.png) | ![illustration for CloudGpu](../../gcp/Item/CloudGpu.Local.png) | ![illustration for CloudGpuCard](../../gcp/Item/CloudGpuCard.Local.png) | ![illustration for CloudGpuGroup](../../gcp/Item/CloudGpuGroup.Local.png) |




## CloudGpu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudGpu
include('gcp/Item/CloudGpu')

' renders the element
CloudGpu('CloudGpu', 'Cloud Gpu', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CloudGpu
include('gcp/Item/CloudGpu')

' renders the element
CloudGpu('CloudGpu', 'Cloud Gpu', 'an optional tech label', 'an optional description')
@enduml
```

## CloudGpuCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudGpuCard
include('gcp/Item/CloudGpu')

' renders the element
CloudGpuCard('CloudGpuCard', 'Cloud Gpu Card', 'an optional description')
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

' loads the Item which embeds the element CloudGpuCard
include('gcp/Item/CloudGpu')

' renders the element
CloudGpuCard('CloudGpuCard', 'Cloud Gpu Card', 'an optional description')
@enduml
```

## CloudGpuGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudGpuGroup
include('gcp/Item/CloudGpu')

' renders the element
CloudGpuGroup('CloudGpuGroup', 'Cloud Gpu Group', 'an optional tech label') {
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

' loads the Item which embeds the element CloudGpuGroup
include('gcp/Item/CloudGpu')

' renders the element
CloudGpuGroup('CloudGpuGroup', 'Cloud Gpu Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

