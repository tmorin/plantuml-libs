# AmazonWorkDocs


```text
aws-20210131/Architecture/EndUserComputing/AmazonWorkDocs
```

```text
include('aws-20210131/Architecture/EndUserComputing/AmazonWorkDocs')
```



| Illustration | AmazonWorkDocs | AmazonWorkDocsCard | AmazonWorkDocsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/EndUserComputing/AmazonWorkDocs.png) | ![illustration for AmazonWorkDocs](../../../aws-20210131/Architecture/EndUserComputing/AmazonWorkDocs.Local.png) | ![illustration for AmazonWorkDocsCard](../../../aws-20210131/Architecture/EndUserComputing/AmazonWorkDocsCard.Local.png) | ![illustration for AmazonWorkDocsGroup](../../../aws-20210131/Architecture/EndUserComputing/AmazonWorkDocsGroup.Local.png) |




## AmazonWorkDocs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonWorkDocs
include('aws-20210131/Architecture/EndUserComputing/AmazonWorkDocs')

' renders the element
AmazonWorkDocs('AmazonWorkDocs', 'Amazon Work Docs', 'an optional tech label')
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

' loads the Item which embeds the element AmazonWorkDocs
include('aws-20210131/Architecture/EndUserComputing/AmazonWorkDocs')

' renders the element
AmazonWorkDocs('AmazonWorkDocs', 'Amazon Work Docs', 'an optional tech label')
@enduml
```

## AmazonWorkDocsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonWorkDocsCard
include('aws-20210131/Architecture/EndUserComputing/AmazonWorkDocs')

' renders the element
AmazonWorkDocsCard('AmazonWorkDocsCard', 'Amazon Work Docs Card', 'an optional description')
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

' loads the Item which embeds the element AmazonWorkDocsCard
include('aws-20210131/Architecture/EndUserComputing/AmazonWorkDocs')

' renders the element
AmazonWorkDocsCard('AmazonWorkDocsCard', 'Amazon Work Docs Card', 'an optional description')
@enduml
```

## AmazonWorkDocsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonWorkDocsGroup
include('aws-20210131/Architecture/EndUserComputing/AmazonWorkDocs')

' renders the element
AmazonWorkDocsGroup('AmazonWorkDocsGroup', 'Amazon Work Docs Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonWorkDocsGroup
include('aws-20210131/Architecture/EndUserComputing/AmazonWorkDocs')

' renders the element
AmazonWorkDocsGroup('AmazonWorkDocsGroup', 'Amazon Work Docs Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

