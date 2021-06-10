# Bottlerocket


```text
aws-20210131/Architecture/Compute/Bottlerocket
```

```text
include('aws-20210131/Architecture/Compute/Bottlerocket')
```



| Illustration | Bottlerocket | BottlerocketCard | BottlerocketGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/Compute/Bottlerocket.png) | ![illustration for Bottlerocket](../../../aws-20210131/Architecture/Compute/Bottlerocket.Local.png) | ![illustration for BottlerocketCard](../../../aws-20210131/Architecture/Compute/BottlerocketCard.Local.png) | ![illustration for BottlerocketGroup](../../../aws-20210131/Architecture/Compute/BottlerocketGroup.Local.png) |




## Bottlerocket

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element Bottlerocket
include('aws-20210131/Architecture/Compute/Bottlerocket')

' renders the element
Bottlerocket('Bottlerocket', 'Bottlerocket', 'an optional tech label')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element Bottlerocket
include('aws-20210131/Architecture/Compute/Bottlerocket')

' renders the element
Bottlerocket('Bottlerocket', 'Bottlerocket', 'an optional tech label')
@enduml
```

## BottlerocketCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element BottlerocketCard
include('aws-20210131/Architecture/Compute/Bottlerocket')

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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element BottlerocketCard
include('aws-20210131/Architecture/Compute/Bottlerocket')

' renders the element
BottlerocketCard('BottlerocketCard', 'Bottlerocket Card', 'an optional description')
@enduml
```

## BottlerocketGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element BottlerocketGroup
include('aws-20210131/Architecture/Compute/Bottlerocket')

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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element BottlerocketGroup
include('aws-20210131/Architecture/Compute/Bottlerocket')

' renders the element
BottlerocketGroup('BottlerocketGroup', 'Bottlerocket Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

