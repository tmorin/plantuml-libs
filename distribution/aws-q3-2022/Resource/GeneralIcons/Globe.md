# Globe


```text
aws-q3-2022/Resource/GeneralIcons/Globe
```

```text
include('aws-q3-2022/Resource/GeneralIcons/Globe')
```



| Illustration | Globe | GlobeCard | GlobeGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2022/Resource/GeneralIcons/Globe.png) | ![illustration for Globe](../../../aws-q3-2022/Resource/GeneralIcons/Globe.Local.png) | ![illustration for GlobeCard](../../../aws-q3-2022/Resource/GeneralIcons/GlobeCard.Local.png) | ![illustration for GlobeGroup](../../../aws-q3-2022/Resource/GeneralIcons/GlobeGroup.Local.png) |




## Globe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element Globe
include('aws-q3-2022/Resource/GeneralIcons/Globe')

' renders the element
Globe('Globe', 'Globe', 'an optional tech label', 'an optional description')
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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element Globe
include('aws-q3-2022/Resource/GeneralIcons/Globe')

' renders the element
Globe('Globe', 'Globe', 'an optional tech label', 'an optional description')
@enduml
```

## GlobeCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element GlobeCard
include('aws-q3-2022/Resource/GeneralIcons/Globe')

' renders the element
GlobeCard('GlobeCard', 'Globe Card', 'an optional description')
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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element GlobeCard
include('aws-q3-2022/Resource/GeneralIcons/Globe')

' renders the element
GlobeCard('GlobeCard', 'Globe Card', 'an optional description')
@enduml
```

## GlobeGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element GlobeGroup
include('aws-q3-2022/Resource/GeneralIcons/Globe')

' renders the element
GlobeGroup('GlobeGroup', 'Globe Group', 'an optional tech label') {
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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element GlobeGroup
include('aws-q3-2022/Resource/GeneralIcons/Globe')

' renders the element
GlobeGroup('GlobeGroup', 'Globe Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

