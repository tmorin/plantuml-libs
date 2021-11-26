# Multimedia


```text
aws-20210730/Resource/GeneralIcons/Multimedia
```

```text
include('aws-20210730/Resource/GeneralIcons/Multimedia')
```



| Illustration | Multimedia | MultimediaCard | MultimediaGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Resource/GeneralIcons/Multimedia.png) | ![illustration for Multimedia](../../../aws-20210730/Resource/GeneralIcons/Multimedia.Local.png) | ![illustration for MultimediaCard](../../../aws-20210730/Resource/GeneralIcons/MultimediaCard.Local.png) | ![illustration for MultimediaGroup](../../../aws-20210730/Resource/GeneralIcons/MultimediaGroup.Local.png) |




## Multimedia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element Multimedia
include('aws-20210730/Resource/GeneralIcons/Multimedia')

' renders the element
Multimedia('Multimedia', 'Multimedia', 'an optional tech label')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element Multimedia
include('aws-20210730/Resource/GeneralIcons/Multimedia')

' renders the element
Multimedia('Multimedia', 'Multimedia', 'an optional tech label')
@enduml
```

## MultimediaCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element MultimediaCard
include('aws-20210730/Resource/GeneralIcons/Multimedia')

' renders the element
MultimediaCard('MultimediaCard', 'Multimedia Card', 'an optional description')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element MultimediaCard
include('aws-20210730/Resource/GeneralIcons/Multimedia')

' renders the element
MultimediaCard('MultimediaCard', 'Multimedia Card', 'an optional description')
@enduml
```

## MultimediaGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element MultimediaGroup
include('aws-20210730/Resource/GeneralIcons/Multimedia')

' renders the element
MultimediaGroup('MultimediaGroup', 'Multimedia Group', 'an optional tech label') {
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element MultimediaGroup
include('aws-20210730/Resource/GeneralIcons/Multimedia')

' renders the element
MultimediaGroup('MultimediaGroup', 'Multimedia Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

