# AmazonLocationServicePlace


```text
aws-q1-2023/Resource/FrontEndWebMobile/AmazonLocationServicePlace
```

```text
include('aws-q1-2023/Resource/FrontEndWebMobile/AmazonLocationServicePlace')
```



| Illustration | AmazonLocationServicePlace | AmazonLocationServicePlaceCard | AmazonLocationServicePlaceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Resource/FrontEndWebMobile/AmazonLocationServicePlace.png) | ![illustration for AmazonLocationServicePlace](../../../aws-q1-2023/Resource/FrontEndWebMobile/AmazonLocationServicePlace.Local.png) | ![illustration for AmazonLocationServicePlaceCard](../../../aws-q1-2023/Resource/FrontEndWebMobile/AmazonLocationServicePlaceCard.Local.png) | ![illustration for AmazonLocationServicePlaceGroup](../../../aws-q1-2023/Resource/FrontEndWebMobile/AmazonLocationServicePlaceGroup.Local.png) |




## AmazonLocationServicePlace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonLocationServicePlace
include('aws-q1-2023/Resource/FrontEndWebMobile/AmazonLocationServicePlace')

' renders the element
AmazonLocationServicePlace('AmazonLocationServicePlace', 'Amazon Location Service Place', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonLocationServicePlace
include('aws-q1-2023/Resource/FrontEndWebMobile/AmazonLocationServicePlace')

' renders the element
AmazonLocationServicePlace('AmazonLocationServicePlace', 'Amazon Location Service Place', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonLocationServicePlaceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonLocationServicePlaceCard
include('aws-q1-2023/Resource/FrontEndWebMobile/AmazonLocationServicePlace')

' renders the element
AmazonLocationServicePlaceCard('AmazonLocationServicePlaceCard', 'Amazon Location Service Place Card', 'an optional description')
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

' loads the Item which embeds the element AmazonLocationServicePlaceCard
include('aws-q1-2023/Resource/FrontEndWebMobile/AmazonLocationServicePlace')

' renders the element
AmazonLocationServicePlaceCard('AmazonLocationServicePlaceCard', 'Amazon Location Service Place Card', 'an optional description')
@enduml
```

## AmazonLocationServicePlaceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonLocationServicePlaceGroup
include('aws-q1-2023/Resource/FrontEndWebMobile/AmazonLocationServicePlace')

' renders the element
AmazonLocationServicePlaceGroup('AmazonLocationServicePlaceGroup', 'Amazon Location Service Place Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonLocationServicePlaceGroup
include('aws-q1-2023/Resource/FrontEndWebMobile/AmazonLocationServicePlace')

' renders the element
AmazonLocationServicePlaceGroup('AmazonLocationServicePlaceGroup', 'Amazon Location Service Place Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

