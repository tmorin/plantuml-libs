# AmazonCodeGuru


```text
aws-20210131/Architecture/MachineLearning/AmazonCodeGuru
```

```text
include('aws-20210131/Architecture/MachineLearning/AmazonCodeGuru')
```



| Illustration | AmazonCodeGuru | AmazonCodeGuruCard | AmazonCodeGuruGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/MachineLearning/AmazonCodeGuru.png) | ![illustration for AmazonCodeGuru](../../../aws-20210131/Architecture/MachineLearning/AmazonCodeGuru.Local.png) | ![illustration for AmazonCodeGuruCard](../../../aws-20210131/Architecture/MachineLearning/AmazonCodeGuruCard.Local.png) | ![illustration for AmazonCodeGuruGroup](../../../aws-20210131/Architecture/MachineLearning/AmazonCodeGuruGroup.Local.png) |




## AmazonCodeGuru

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonCodeGuru
include('aws-20210131/Architecture/MachineLearning/AmazonCodeGuru')

' renders the element
AmazonCodeGuru('AmazonCodeGuru', 'Amazon Code Guru', 'an optional tech label')
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

' loads the Item which embeds the element AmazonCodeGuru
include('aws-20210131/Architecture/MachineLearning/AmazonCodeGuru')

' renders the element
AmazonCodeGuru('AmazonCodeGuru', 'Amazon Code Guru', 'an optional tech label')
@enduml
```

## AmazonCodeGuruCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonCodeGuruCard
include('aws-20210131/Architecture/MachineLearning/AmazonCodeGuru')

' renders the element
AmazonCodeGuruCard('AmazonCodeGuruCard', 'Amazon Code Guru Card', 'an optional description')
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

' loads the Item which embeds the element AmazonCodeGuruCard
include('aws-20210131/Architecture/MachineLearning/AmazonCodeGuru')

' renders the element
AmazonCodeGuruCard('AmazonCodeGuruCard', 'Amazon Code Guru Card', 'an optional description')
@enduml
```

## AmazonCodeGuruGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonCodeGuruGroup
include('aws-20210131/Architecture/MachineLearning/AmazonCodeGuru')

' renders the element
AmazonCodeGuruGroup('AmazonCodeGuruGroup', 'Amazon Code Guru Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonCodeGuruGroup
include('aws-20210131/Architecture/MachineLearning/AmazonCodeGuru')

' renders the element
AmazonCodeGuruGroup('AmazonCodeGuruGroup', 'Amazon Code Guru Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

