# Compute


```text
aws-q1-2024/Category/Compute
```

```text
include('aws-q1-2024/Category/Compute')
```



| Illustration | Compute | ComputeCard | ComputeGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../aws-q1-2024/Category/Compute.png) | ![illustration for Compute](../../aws-q1-2024/Category/Compute.Local.png) | ![illustration for ComputeCard](../../aws-q1-2024/Category/ComputeCard.Local.png) | ![illustration for ComputeGroup](../../aws-q1-2024/Category/ComputeGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ComputeXs>`
- `<$ComputeSm>`
- `<$ComputeMd>`
- `<$ComputeLg>`





## Compute

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element Compute
include('aws-q1-2024/Category/Compute')

' renders the element
Compute('Compute', 'Compute', 'an optional tech label', 'an optional description')
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element Compute
include('aws-q1-2024/Category/Compute')

' renders the element
Compute('Compute', 'Compute', 'an optional tech label', 'an optional description')
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element ComputeCard
include('aws-q1-2024/Category/Compute')

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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element ComputeCard
include('aws-q1-2024/Category/Compute')

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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element ComputeGroup
include('aws-q1-2024/Category/Compute')

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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element ComputeGroup
include('aws-q1-2024/Category/Compute')

' renders the element
ComputeGroup('ComputeGroup', 'Compute Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

