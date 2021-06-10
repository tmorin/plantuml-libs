# AmazonHoneycode


```text
aws-20210131/Architecture/BusinessApplication/AmazonHoneycode
```

```text
include('aws-20210131/Architecture/BusinessApplication/AmazonHoneycode')
```



| Illustration | AmazonHoneycode | AmazonHoneycodeCard | AmazonHoneycodeGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/BusinessApplication/AmazonHoneycode.png) | ![illustration for AmazonHoneycode](../../../aws-20210131/Architecture/BusinessApplication/AmazonHoneycode.Local.png) | ![illustration for AmazonHoneycodeCard](../../../aws-20210131/Architecture/BusinessApplication/AmazonHoneycodeCard.Local.png) | ![illustration for AmazonHoneycodeGroup](../../../aws-20210131/Architecture/BusinessApplication/AmazonHoneycodeGroup.Local.png) |




## AmazonHoneycode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonHoneycode
include('aws-20210131/Architecture/BusinessApplication/AmazonHoneycode')

' renders the element
AmazonHoneycode('AmazonHoneycode', 'Amazon Honeycode', 'an optional tech label')
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

' loads the Item which embeds the element AmazonHoneycode
include('aws-20210131/Architecture/BusinessApplication/AmazonHoneycode')

' renders the element
AmazonHoneycode('AmazonHoneycode', 'Amazon Honeycode', 'an optional tech label')
@enduml
```

## AmazonHoneycodeCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonHoneycodeCard
include('aws-20210131/Architecture/BusinessApplication/AmazonHoneycode')

' renders the element
AmazonHoneycodeCard('AmazonHoneycodeCard', 'Amazon Honeycode Card', 'an optional description')
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

' loads the Item which embeds the element AmazonHoneycodeCard
include('aws-20210131/Architecture/BusinessApplication/AmazonHoneycode')

' renders the element
AmazonHoneycodeCard('AmazonHoneycodeCard', 'Amazon Honeycode Card', 'an optional description')
@enduml
```

## AmazonHoneycodeGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonHoneycodeGroup
include('aws-20210131/Architecture/BusinessApplication/AmazonHoneycode')

' renders the element
AmazonHoneycodeGroup('AmazonHoneycodeGroup', 'Amazon Honeycode Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonHoneycodeGroup
include('aws-20210131/Architecture/BusinessApplication/AmazonHoneycode')

' renders the element
AmazonHoneycodeGroup('AmazonHoneycodeGroup', 'Amazon Honeycode Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

