# AmazonInspector


```text
aws-20210131/Architecture/SecurityIdentityCompliance/AmazonInspector
```

```text
include('aws-20210131/Architecture/SecurityIdentityCompliance/AmazonInspector')
```



| Illustration | AmazonInspector | AmazonInspectorCard | AmazonInspectorGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/SecurityIdentityCompliance/AmazonInspector.png) | ![illustration for AmazonInspector](../../../aws-20210131/Architecture/SecurityIdentityCompliance/AmazonInspector.Local.png) | ![illustration for AmazonInspectorCard](../../../aws-20210131/Architecture/SecurityIdentityCompliance/AmazonInspectorCard.Local.png) | ![illustration for AmazonInspectorGroup](../../../aws-20210131/Architecture/SecurityIdentityCompliance/AmazonInspectorGroup.Local.png) |




## AmazonInspector

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonInspector
include('aws-20210131/Architecture/SecurityIdentityCompliance/AmazonInspector')

' renders the element
AmazonInspector('AmazonInspector', 'Amazon Inspector', 'an optional tech label')
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

' loads the Item which embeds the element AmazonInspector
include('aws-20210131/Architecture/SecurityIdentityCompliance/AmazonInspector')

' renders the element
AmazonInspector('AmazonInspector', 'Amazon Inspector', 'an optional tech label')
@enduml
```

## AmazonInspectorCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonInspectorCard
include('aws-20210131/Architecture/SecurityIdentityCompliance/AmazonInspector')

' renders the element
AmazonInspectorCard('AmazonInspectorCard', 'Amazon Inspector Card', 'an optional description')
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

' loads the Item which embeds the element AmazonInspectorCard
include('aws-20210131/Architecture/SecurityIdentityCompliance/AmazonInspector')

' renders the element
AmazonInspectorCard('AmazonInspectorCard', 'Amazon Inspector Card', 'an optional description')
@enduml
```

## AmazonInspectorGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonInspectorGroup
include('aws-20210131/Architecture/SecurityIdentityCompliance/AmazonInspector')

' renders the element
AmazonInspectorGroup('AmazonInspectorGroup', 'Amazon Inspector Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonInspectorGroup
include('aws-20210131/Architecture/SecurityIdentityCompliance/AmazonInspector')

' renders the element
AmazonInspectorGroup('AmazonInspectorGroup', 'Amazon Inspector Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

