# AmazonWorkMail


```text
aws-20210131/Architecture/BusinessApplication/AmazonWorkMail
```

```text
include('aws-20210131/Architecture/BusinessApplication/AmazonWorkMail')
```



| Illustration | AmazonWorkMail | AmazonWorkMailCard | AmazonWorkMailGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/BusinessApplication/AmazonWorkMail.png) | ![illustration for AmazonWorkMail](../../../aws-20210131/Architecture/BusinessApplication/AmazonWorkMail.Local.png) | ![illustration for AmazonWorkMailCard](../../../aws-20210131/Architecture/BusinessApplication/AmazonWorkMailCard.Local.png) | ![illustration for AmazonWorkMailGroup](../../../aws-20210131/Architecture/BusinessApplication/AmazonWorkMailGroup.Local.png) |




## AmazonWorkMail

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonWorkMail
include('aws-20210131/Architecture/BusinessApplication/AmazonWorkMail')

' renders the element
AmazonWorkMail('AmazonWorkMail', 'Amazon Work Mail', 'an optional tech label')
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

' loads the Item which embeds the element AmazonWorkMail
include('aws-20210131/Architecture/BusinessApplication/AmazonWorkMail')

' renders the element
AmazonWorkMail('AmazonWorkMail', 'Amazon Work Mail', 'an optional tech label')
@enduml
```

## AmazonWorkMailCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonWorkMailCard
include('aws-20210131/Architecture/BusinessApplication/AmazonWorkMail')

' renders the element
AmazonWorkMailCard('AmazonWorkMailCard', 'Amazon Work Mail Card', 'an optional description')
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

' loads the Item which embeds the element AmazonWorkMailCard
include('aws-20210131/Architecture/BusinessApplication/AmazonWorkMail')

' renders the element
AmazonWorkMailCard('AmazonWorkMailCard', 'Amazon Work Mail Card', 'an optional description')
@enduml
```

## AmazonWorkMailGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonWorkMailGroup
include('aws-20210131/Architecture/BusinessApplication/AmazonWorkMail')

' renders the element
AmazonWorkMailGroup('AmazonWorkMailGroup', 'Amazon Work Mail Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonWorkMailGroup
include('aws-20210131/Architecture/BusinessApplication/AmazonWorkMail')

' renders the element
AmazonWorkMailGroup('AmazonWorkMailGroup', 'Amazon Work Mail Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

