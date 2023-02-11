# Bottlerocket


```text
aws-q1-2023/Architecture/Compute/Bottlerocket
```

```text
include('aws-q1-2023/Architecture/Compute/Bottlerocket')
```



| Illustration | Bottlerocket | BottlerocketCard | BottlerocketGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Architecture/Compute/Bottlerocket.png) | ![illustration for Bottlerocket](../../../aws-q1-2023/Architecture/Compute/Bottlerocket.Local.png) | ![illustration for BottlerocketCard](../../../aws-q1-2023/Architecture/Compute/BottlerocketCard.Local.png) | ![illustration for BottlerocketGroup](../../../aws-q1-2023/Architecture/Compute/BottlerocketGroup.Local.png) |




## Bottlerocket

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element Bottlerocket
include('aws-q1-2023/Architecture/Compute/Bottlerocket')

' renders the element
Bottlerocket('Bottlerocket', 'Bottlerocket', 'an optional tech label', 'an optional description')
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element Bottlerocket
include('aws-q1-2023/Architecture/Compute/Bottlerocket')

' renders the element
Bottlerocket('Bottlerocket', 'Bottlerocket', 'an optional tech label', 'an optional description')
@enduml
```

## BottlerocketCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element BottlerocketCard
include('aws-q1-2023/Architecture/Compute/Bottlerocket')

' renders the element
BottlerocketCard('BottlerocketCard', 'Bottlerocket Card', 'an optional description')
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element BottlerocketCard
include('aws-q1-2023/Architecture/Compute/Bottlerocket')

' renders the element
BottlerocketCard('BottlerocketCard', 'Bottlerocket Card', 'an optional description')
@enduml
```

## BottlerocketGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element BottlerocketGroup
include('aws-q1-2023/Architecture/Compute/Bottlerocket')

' renders the element
BottlerocketGroup('BottlerocketGroup', 'Bottlerocket Group', 'an optional tech label') {
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element BottlerocketGroup
include('aws-q1-2023/Architecture/Compute/Bottlerocket')

' renders the element
BottlerocketGroup('BottlerocketGroup', 'Bottlerocket Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

