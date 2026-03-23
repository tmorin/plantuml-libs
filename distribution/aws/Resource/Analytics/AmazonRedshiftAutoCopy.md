# AmazonRedshiftAutoCopy


```text
aws/Resource/Analytics/AmazonRedshiftAutoCopy
```

```text
include('aws/Resource/Analytics/AmazonRedshiftAutoCopy')
```



| Illustration | AmazonRedshiftAutoCopy | AmazonRedshiftAutoCopyCard | AmazonRedshiftAutoCopyGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Resource/Analytics/AmazonRedshiftAutoCopy.png) | ![illustration for AmazonRedshiftAutoCopy](../../../aws/Resource/Analytics/AmazonRedshiftAutoCopy.Local.png) | ![illustration for AmazonRedshiftAutoCopyCard](../../../aws/Resource/Analytics/AmazonRedshiftAutoCopyCard.Local.png) | ![illustration for AmazonRedshiftAutoCopyGroup](../../../aws/Resource/Analytics/AmazonRedshiftAutoCopyGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonRedshiftAutoCopyXs>`
- `<$AmazonRedshiftAutoCopySm>`
- `<$AmazonRedshiftAutoCopyMd>`
- `<$AmazonRedshiftAutoCopyLg>`





## AmazonRedshiftAutoCopy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonRedshiftAutoCopy
include('aws/Resource/Analytics/AmazonRedshiftAutoCopy')

' renders the element
AmazonRedshiftAutoCopy('AmazonRedshiftAutoCopy', 'Amazon Redshift Auto Copy', 'an optional tech label', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonRedshiftAutoCopy
include('aws/Resource/Analytics/AmazonRedshiftAutoCopy')

' renders the element
AmazonRedshiftAutoCopy('AmazonRedshiftAutoCopy', 'Amazon Redshift Auto Copy', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonRedshiftAutoCopyCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonRedshiftAutoCopyCard
include('aws/Resource/Analytics/AmazonRedshiftAutoCopy')

' renders the element
AmazonRedshiftAutoCopyCard('AmazonRedshiftAutoCopyCard', 'Amazon Redshift Auto Copy Card', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonRedshiftAutoCopyCard
include('aws/Resource/Analytics/AmazonRedshiftAutoCopy')

' renders the element
AmazonRedshiftAutoCopyCard('AmazonRedshiftAutoCopyCard', 'Amazon Redshift Auto Copy Card', 'an optional description')
@enduml
```

## AmazonRedshiftAutoCopyGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonRedshiftAutoCopyGroup
include('aws/Resource/Analytics/AmazonRedshiftAutoCopy')

' renders the element
AmazonRedshiftAutoCopyGroup('AmazonRedshiftAutoCopyGroup', 'Amazon Redshift Auto Copy Group', 'an optional tech label') {
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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonRedshiftAutoCopyGroup
include('aws/Resource/Analytics/AmazonRedshiftAutoCopy')

' renders the element
AmazonRedshiftAutoCopyGroup('AmazonRedshiftAutoCopyGroup', 'Amazon Redshift Auto Copy Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

