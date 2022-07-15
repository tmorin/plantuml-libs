# Compute


```text
aws-q2-2022/Category/Compute
```

```text
include('aws-q2-2022/Category/Compute')
```



| Illustration | Compute | ComputeCard | ComputeGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../aws-q2-2022/Category/Compute.png) | ![illustration for Compute](../../aws-q2-2022/Category/Compute.Local.png) | ![illustration for ComputeCard](../../aws-q2-2022/Category/ComputeCard.Local.png) | ![illustration for ComputeGroup](../../aws-q2-2022/Category/ComputeGroup.Local.png) |




## Compute

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element Compute
include('aws-q2-2022/Category/Compute')

' renders the element
Compute('Compute', 'Compute', 'an optional tech label')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element Compute
include('aws-q2-2022/Category/Compute')

' renders the element
Compute('Compute', 'Compute', 'an optional tech label')
@enduml
```

## ComputeCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element ComputeCard
include('aws-q2-2022/Category/Compute')

' renders the element
ComputeCard('ComputeCard', 'Compute Card', 'an optional description')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element ComputeCard
include('aws-q2-2022/Category/Compute')

' renders the element
ComputeCard('ComputeCard', 'Compute Card', 'an optional description')
@enduml
```

## ComputeGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element ComputeGroup
include('aws-q2-2022/Category/Compute')

' renders the element
ComputeGroup('ComputeGroup', 'Compute Group', 'an optional tech label') {
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element ComputeGroup
include('aws-q2-2022/Category/Compute')

' renders the element
ComputeGroup('ComputeGroup', 'Compute Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

