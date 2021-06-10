# AmazonChime


```text
aws-20210131/Architecture/BusinessApplication/AmazonChime
```

```text
include('aws-20210131/Architecture/BusinessApplication/AmazonChime')
```



| Illustration | AmazonChime | AmazonChimeCard | AmazonChimeGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/BusinessApplication/AmazonChime.png) | ![illustration for AmazonChime](../../../aws-20210131/Architecture/BusinessApplication/AmazonChime.Local.png) | ![illustration for AmazonChimeCard](../../../aws-20210131/Architecture/BusinessApplication/AmazonChimeCard.Local.png) | ![illustration for AmazonChimeGroup](../../../aws-20210131/Architecture/BusinessApplication/AmazonChimeGroup.Local.png) |




## AmazonChime

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonChime
include('aws-20210131/Architecture/BusinessApplication/AmazonChime')

' renders the element
AmazonChime('AmazonChime', 'Amazon Chime', 'an optional tech label')
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

' loads the Item which embeds the element AmazonChime
include('aws-20210131/Architecture/BusinessApplication/AmazonChime')

' renders the element
AmazonChime('AmazonChime', 'Amazon Chime', 'an optional tech label')
@enduml
```

## AmazonChimeCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonChimeCard
include('aws-20210131/Architecture/BusinessApplication/AmazonChime')

' renders the element
AmazonChimeCard('AmazonChimeCard', 'Amazon Chime Card', 'an optional description')
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

' loads the Item which embeds the element AmazonChimeCard
include('aws-20210131/Architecture/BusinessApplication/AmazonChime')

' renders the element
AmazonChimeCard('AmazonChimeCard', 'Amazon Chime Card', 'an optional description')
@enduml
```

## AmazonChimeGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonChimeGroup
include('aws-20210131/Architecture/BusinessApplication/AmazonChime')

' renders the element
AmazonChimeGroup('AmazonChimeGroup', 'Amazon Chime Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonChimeGroup
include('aws-20210131/Architecture/BusinessApplication/AmazonChime')

' renders the element
AmazonChimeGroup('AmazonChimeGroup', 'Amazon Chime Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

