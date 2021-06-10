# AwsElementalMediaConnect


```text
aws-20210131/Architecture/MediaServices/AwsElementalMediaConnect
```

```text
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaConnect')
```



| Illustration | AwsElementalMediaConnect | AwsElementalMediaConnectCard | AwsElementalMediaConnectGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/MediaServices/AwsElementalMediaConnect.png) | ![illustration for AwsElementalMediaConnect](../../../aws-20210131/Architecture/MediaServices/AwsElementalMediaConnect.Local.png) | ![illustration for AwsElementalMediaConnectCard](../../../aws-20210131/Architecture/MediaServices/AwsElementalMediaConnectCard.Local.png) | ![illustration for AwsElementalMediaConnectGroup](../../../aws-20210131/Architecture/MediaServices/AwsElementalMediaConnectGroup.Local.png) |




## AwsElementalMediaConnect

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsElementalMediaConnect
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaConnect')

' renders the element
AwsElementalMediaConnect('AwsElementalMediaConnect', 'Aws Elemental Media Connect', 'an optional tech label')
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

' loads the Item which embeds the element AwsElementalMediaConnect
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaConnect')

' renders the element
AwsElementalMediaConnect('AwsElementalMediaConnect', 'Aws Elemental Media Connect', 'an optional tech label')
@enduml
```

## AwsElementalMediaConnectCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsElementalMediaConnectCard
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaConnect')

' renders the element
AwsElementalMediaConnectCard('AwsElementalMediaConnectCard', 'Aws Elemental Media Connect Card', 'an optional description')
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

' loads the Item which embeds the element AwsElementalMediaConnectCard
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaConnect')

' renders the element
AwsElementalMediaConnectCard('AwsElementalMediaConnectCard', 'Aws Elemental Media Connect Card', 'an optional description')
@enduml
```

## AwsElementalMediaConnectGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsElementalMediaConnectGroup
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaConnect')

' renders the element
AwsElementalMediaConnectGroup('AwsElementalMediaConnectGroup', 'Aws Elemental Media Connect Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsElementalMediaConnectGroup
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaConnect')

' renders the element
AwsElementalMediaConnectGroup('AwsElementalMediaConnectGroup', 'Aws Elemental Media Connect Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

