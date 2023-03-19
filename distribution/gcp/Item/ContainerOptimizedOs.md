# ContainerOptimizedOs


```text
gcp/Item/ContainerOptimizedOs
```

```text
include('gcp/Item/ContainerOptimizedOs')
```



| Illustration | ContainerOptimizedOs | ContainerOptimizedOsCard | ContainerOptimizedOsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../gcp/Item/ContainerOptimizedOs.png) | ![illustration for ContainerOptimizedOs](../../gcp/Item/ContainerOptimizedOs.Local.png) | ![illustration for ContainerOptimizedOsCard](../../gcp/Item/ContainerOptimizedOsCard.Local.png) | ![illustration for ContainerOptimizedOsGroup](../../gcp/Item/ContainerOptimizedOsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ContainerOptimizedOsXs>`
- `<$ContainerOptimizedOsSm>`
- `<$ContainerOptimizedOsMd>`
- `<$ContainerOptimizedOsLg>`





## ContainerOptimizedOs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element ContainerOptimizedOs
include('gcp/Item/ContainerOptimizedOs')

' renders the element
ContainerOptimizedOs('ContainerOptimizedOs', 'Container Optimized Os', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ContainerOptimizedOs
include('gcp/Item/ContainerOptimizedOs')

' renders the element
ContainerOptimizedOs('ContainerOptimizedOs', 'Container Optimized Os', 'an optional tech label', 'an optional description')
@enduml
```

## ContainerOptimizedOsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element ContainerOptimizedOsCard
include('gcp/Item/ContainerOptimizedOs')

' renders the element
ContainerOptimizedOsCard('ContainerOptimizedOsCard', 'Container Optimized Os Card', 'an optional description')
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

' loads the Item which embeds the element ContainerOptimizedOsCard
include('gcp/Item/ContainerOptimizedOs')

' renders the element
ContainerOptimizedOsCard('ContainerOptimizedOsCard', 'Container Optimized Os Card', 'an optional description')
@enduml
```

## ContainerOptimizedOsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element ContainerOptimizedOsGroup
include('gcp/Item/ContainerOptimizedOs')

' renders the element
ContainerOptimizedOsGroup('ContainerOptimizedOsGroup', 'Container Optimized Os Group', 'an optional tech label') {
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

' loads the Item which embeds the element ContainerOptimizedOsGroup
include('gcp/Item/ContainerOptimizedOs')

' renders the element
ContainerOptimizedOsGroup('ContainerOptimizedOsGroup', 'Container Optimized Os Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

