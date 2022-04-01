# AmazonWorkSpaces


```text
aws-q1-2022/Architecture/EndUserComputing/AmazonWorkSpaces
```

```text
include('aws-q1-2022/Architecture/EndUserComputing/AmazonWorkSpaces')
```



| Illustration | AmazonWorkSpaces | AmazonWorkSpacesCard | AmazonWorkSpacesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2022/Architecture/EndUserComputing/AmazonWorkSpaces.png) | ![illustration for AmazonWorkSpaces](../../../aws-q1-2022/Architecture/EndUserComputing/AmazonWorkSpaces.Local.png) | ![illustration for AmazonWorkSpacesCard](../../../aws-q1-2022/Architecture/EndUserComputing/AmazonWorkSpacesCard.Local.png) | ![illustration for AmazonWorkSpacesGroup](../../../aws-q1-2022/Architecture/EndUserComputing/AmazonWorkSpacesGroup.Local.png) |




## AmazonWorkSpaces

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonWorkSpaces
include('aws-q1-2022/Architecture/EndUserComputing/AmazonWorkSpaces')

' renders the element
AmazonWorkSpaces('AmazonWorkSpaces', 'Amazon Work Spaces', 'an optional tech label')
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonWorkSpaces
include('aws-q1-2022/Architecture/EndUserComputing/AmazonWorkSpaces')

' renders the element
AmazonWorkSpaces('AmazonWorkSpaces', 'Amazon Work Spaces', 'an optional tech label')
@enduml
```

## AmazonWorkSpacesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonWorkSpacesCard
include('aws-q1-2022/Architecture/EndUserComputing/AmazonWorkSpaces')

' renders the element
AmazonWorkSpacesCard('AmazonWorkSpacesCard', 'Amazon Work Spaces Card', 'an optional description')
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonWorkSpacesCard
include('aws-q1-2022/Architecture/EndUserComputing/AmazonWorkSpaces')

' renders the element
AmazonWorkSpacesCard('AmazonWorkSpacesCard', 'Amazon Work Spaces Card', 'an optional description')
@enduml
```

## AmazonWorkSpacesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonWorkSpacesGroup
include('aws-q1-2022/Architecture/EndUserComputing/AmazonWorkSpaces')

' renders the element
AmazonWorkSpacesGroup('AmazonWorkSpacesGroup', 'Amazon Work Spaces Group', 'an optional tech label') {
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonWorkSpacesGroup
include('aws-q1-2022/Architecture/EndUserComputing/AmazonWorkSpaces')

' renders the element
AmazonWorkSpacesGroup('AmazonWorkSpacesGroup', 'Amazon Work Spaces Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

