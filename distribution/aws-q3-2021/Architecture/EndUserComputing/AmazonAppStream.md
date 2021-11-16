# AmazonAppStream


```text
aws-q3-2021/Architecture/EndUserComputing/AmazonAppStream
```

```text
include('aws-q3-2021/Architecture/EndUserComputing/AmazonAppStream')
```



| Illustration | AmazonAppStream | AmazonAppStreamCard | AmazonAppStreamGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Architecture/EndUserComputing/AmazonAppStream.png) | ![illustration for AmazonAppStream](../../../aws-q3-2021/Architecture/EndUserComputing/AmazonAppStream.Local.png) | ![illustration for AmazonAppStreamCard](../../../aws-q3-2021/Architecture/EndUserComputing/AmazonAppStreamCard.Local.png) | ![illustration for AmazonAppStreamGroup](../../../aws-q3-2021/Architecture/EndUserComputing/AmazonAppStreamGroup.Local.png) |




## AmazonAppStream

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonAppStream
include('aws-q3-2021/Architecture/EndUserComputing/AmazonAppStream')

' renders the element
AmazonAppStream('AmazonAppStream', 'Amazon App Stream', 'an optional tech label')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonAppStream
include('aws-q3-2021/Architecture/EndUserComputing/AmazonAppStream')

' renders the element
AmazonAppStream('AmazonAppStream', 'Amazon App Stream', 'an optional tech label')
@enduml
```

## AmazonAppStreamCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonAppStreamCard
include('aws-q3-2021/Architecture/EndUserComputing/AmazonAppStream')

' renders the element
AmazonAppStreamCard('AmazonAppStreamCard', 'Amazon App Stream Card', 'an optional description')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonAppStreamCard
include('aws-q3-2021/Architecture/EndUserComputing/AmazonAppStream')

' renders the element
AmazonAppStreamCard('AmazonAppStreamCard', 'Amazon App Stream Card', 'an optional description')
@enduml
```

## AmazonAppStreamGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonAppStreamGroup
include('aws-q3-2021/Architecture/EndUserComputing/AmazonAppStream')

' renders the element
AmazonAppStreamGroup('AmazonAppStreamGroup', 'Amazon App Stream Group', 'an optional tech label') {
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonAppStreamGroup
include('aws-q3-2021/Architecture/EndUserComputing/AmazonAppStream')

' renders the element
AmazonAppStreamGroup('AmazonAppStreamGroup', 'Amazon App Stream Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

