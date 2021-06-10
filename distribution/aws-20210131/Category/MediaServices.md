# MediaServices


```text
aws-20210131/Category/MediaServices
```

```text
include('aws-20210131/Category/MediaServices')
```



| Illustration | MediaServices | MediaServicesCard | MediaServicesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../aws-20210131/Category/MediaServices.png) | ![illustration for MediaServices](../../aws-20210131/Category/MediaServices.Local.png) | ![illustration for MediaServicesCard](../../aws-20210131/Category/MediaServicesCard.Local.png) | ![illustration for MediaServicesGroup](../../aws-20210131/Category/MediaServicesGroup.Local.png) |




## MediaServices

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element MediaServices
include('aws-20210131/Category/MediaServices')

' renders the element
MediaServices('MediaServices', 'Media Services', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element MediaServices
include('aws-20210131/Category/MediaServices')

' renders the element
MediaServices('MediaServices', 'Media Services', 'an optional tech label')
@enduml
```

## MediaServicesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element MediaServicesCard
include('aws-20210131/Category/MediaServices')

' renders the element
MediaServicesCard('MediaServicesCard', 'Media Services Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element MediaServicesCard
include('aws-20210131/Category/MediaServices')

' renders the element
MediaServicesCard('MediaServicesCard', 'Media Services Card', 'an optional description')
@enduml
```

## MediaServicesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element MediaServicesGroup
include('aws-20210131/Category/MediaServices')

' renders the element
MediaServicesGroup('MediaServicesGroup', 'Media Services Group', 'an optional tech label') {
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
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element MediaServicesGroup
include('aws-20210131/Category/MediaServices')

' renders the element
MediaServicesGroup('MediaServicesGroup', 'Media Services Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

