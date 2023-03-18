# AmazonWorkDocs


```text
aws-q1-2023/Architecture/BusinessApplications/AmazonWorkDocs
```

```text
include('aws-q1-2023/Architecture/BusinessApplications/AmazonWorkDocs')
```



| Illustration | AmazonWorkDocs | AmazonWorkDocsCard | AmazonWorkDocsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Architecture/BusinessApplications/AmazonWorkDocs.png) | ![illustration for AmazonWorkDocs](../../../aws-q1-2023/Architecture/BusinessApplications/AmazonWorkDocs.Local.png) | ![illustration for AmazonWorkDocsCard](../../../aws-q1-2023/Architecture/BusinessApplications/AmazonWorkDocsCard.Local.png) | ![illustration for AmazonWorkDocsGroup](../../../aws-q1-2023/Architecture/BusinessApplications/AmazonWorkDocsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonWorkDocsXs>`
- `<$AmazonWorkDocsSm>`
- `<$AmazonWorkDocsMd>`
- `<$AmazonWorkDocsLg>`





## AmazonWorkDocs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonWorkDocs
include('aws-q1-2023/Architecture/BusinessApplications/AmazonWorkDocs')

' renders the element
AmazonWorkDocs('AmazonWorkDocs', 'Amazon Work Docs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonWorkDocs
include('aws-q1-2023/Architecture/BusinessApplications/AmazonWorkDocs')

' renders the element
AmazonWorkDocs('AmazonWorkDocs', 'Amazon Work Docs', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonWorkDocsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonWorkDocsCard
include('aws-q1-2023/Architecture/BusinessApplications/AmazonWorkDocs')

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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonWorkDocsCard
include('aws-q1-2023/Architecture/BusinessApplications/AmazonWorkDocs')

' renders the element
AmazonWorkDocsCard('AmazonWorkDocsCard', 'Amazon Work Docs Card', 'an optional description')
@enduml
```

## AmazonWorkDocsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonWorkDocsGroup
include('aws-q1-2023/Architecture/BusinessApplications/AmazonWorkDocs')

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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonWorkDocsGroup
include('aws-q1-2023/Architecture/BusinessApplications/AmazonWorkDocs')

' renders the element
AmazonWorkDocsGroup('AmazonWorkDocsGroup', 'Amazon Work Docs Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

