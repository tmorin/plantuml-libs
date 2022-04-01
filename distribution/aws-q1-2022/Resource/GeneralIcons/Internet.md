# Internet


```text
aws-q1-2022/Resource/GeneralIcons/Internet
```

```text
include('aws-q1-2022/Resource/GeneralIcons/Internet')
```



| Illustration | Internet | InternetCard | InternetGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2022/Resource/GeneralIcons/Internet.png) | ![illustration for Internet](../../../aws-q1-2022/Resource/GeneralIcons/Internet.Local.png) | ![illustration for InternetCard](../../../aws-q1-2022/Resource/GeneralIcons/InternetCard.Local.png) | ![illustration for InternetGroup](../../../aws-q1-2022/Resource/GeneralIcons/InternetGroup.Local.png) |




## Internet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element Internet
include('aws-q1-2022/Resource/GeneralIcons/Internet')

' renders the element
Internet('Internet', 'Internet', 'an optional tech label')
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

' loads the Item which embeds the element Internet
include('aws-q1-2022/Resource/GeneralIcons/Internet')

' renders the element
Internet('Internet', 'Internet', 'an optional tech label')
@enduml
```

## InternetCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element InternetCard
include('aws-q1-2022/Resource/GeneralIcons/Internet')

' renders the element
InternetCard('InternetCard', 'Internet Card', 'an optional description')
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

' loads the Item which embeds the element InternetCard
include('aws-q1-2022/Resource/GeneralIcons/Internet')

' renders the element
InternetCard('InternetCard', 'Internet Card', 'an optional description')
@enduml
```

## InternetGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element InternetGroup
include('aws-q1-2022/Resource/GeneralIcons/Internet')

' renders the element
InternetGroup('InternetGroup', 'Internet Group', 'an optional tech label') {
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

' loads the Item which embeds the element InternetGroup
include('aws-q1-2022/Resource/GeneralIcons/Internet')

' renders the element
InternetGroup('InternetGroup', 'Internet Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

