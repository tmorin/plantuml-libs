# AmazonVpcLattice


```text
aws-q1-2023/Architecture/NetworkingContentDelivery/AmazonVpcLattice
```

```text
include('aws-q1-2023/Architecture/NetworkingContentDelivery/AmazonVpcLattice')
```



| Illustration | AmazonVpcLattice | AmazonVpcLatticeCard | AmazonVpcLatticeGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Architecture/NetworkingContentDelivery/AmazonVpcLattice.png) | ![illustration for AmazonVpcLattice](../../../aws-q1-2023/Architecture/NetworkingContentDelivery/AmazonVpcLattice.Local.png) | ![illustration for AmazonVpcLatticeCard](../../../aws-q1-2023/Architecture/NetworkingContentDelivery/AmazonVpcLatticeCard.Local.png) | ![illustration for AmazonVpcLatticeGroup](../../../aws-q1-2023/Architecture/NetworkingContentDelivery/AmazonVpcLatticeGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonVpcLatticeXs>`
- `<$AmazonVpcLatticeSm>`
- `<$AmazonVpcLatticeMd>`
- `<$AmazonVpcLatticeLg>`





## AmazonVpcLattice

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonVpcLattice
include('aws-q1-2023/Architecture/NetworkingContentDelivery/AmazonVpcLattice')

' renders the element
AmazonVpcLattice('AmazonVpcLattice', 'Amazon Vpc Lattice', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonVpcLattice
include('aws-q1-2023/Architecture/NetworkingContentDelivery/AmazonVpcLattice')

' renders the element
AmazonVpcLattice('AmazonVpcLattice', 'Amazon Vpc Lattice', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonVpcLatticeCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonVpcLatticeCard
include('aws-q1-2023/Architecture/NetworkingContentDelivery/AmazonVpcLattice')

' renders the element
AmazonVpcLatticeCard('AmazonVpcLatticeCard', 'Amazon Vpc Lattice Card', 'an optional description')
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

' loads the Item which embeds the element AmazonVpcLatticeCard
include('aws-q1-2023/Architecture/NetworkingContentDelivery/AmazonVpcLattice')

' renders the element
AmazonVpcLatticeCard('AmazonVpcLatticeCard', 'Amazon Vpc Lattice Card', 'an optional description')
@enduml
```

## AmazonVpcLatticeGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonVpcLatticeGroup
include('aws-q1-2023/Architecture/NetworkingContentDelivery/AmazonVpcLattice')

' renders the element
AmazonVpcLatticeGroup('AmazonVpcLatticeGroup', 'Amazon Vpc Lattice Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonVpcLatticeGroup
include('aws-q1-2023/Architecture/NetworkingContentDelivery/AmazonVpcLattice')

' renders the element
AmazonVpcLatticeGroup('AmazonVpcLatticeGroup', 'Amazon Vpc Lattice Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

