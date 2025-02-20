# ServiceHeart


```text
azure-20/Item/General/ServiceHeart
```

```text
include('azure-20/Item/General/ServiceHeart')
```



| Illustration | ServiceHeart | ServiceHeartCard | ServiceHeartGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-20/Item/General/ServiceHeart.png) | ![illustration for ServiceHeart](../../../azure-20/Item/General/ServiceHeart.Local.png) | ![illustration for ServiceHeartCard](../../../azure-20/Item/General/ServiceHeartCard.Local.png) | ![illustration for ServiceHeartGroup](../../../azure-20/Item/General/ServiceHeartGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceHeartXs>`
- `<$ServiceHeartSm>`
- `<$ServiceHeartMd>`
- `<$ServiceHeartLg>`





## ServiceHeart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceHeart
include('azure-20/Item/General/ServiceHeart')

' renders the element
ServiceHeart('ServiceHeart', 'Service Heart', 'an optional tech label', 'an optional description')
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceHeart
include('azure-20/Item/General/ServiceHeart')

' renders the element
ServiceHeart('ServiceHeart', 'Service Heart', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceHeartCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceHeartCard
include('azure-20/Item/General/ServiceHeart')

' renders the element
ServiceHeartCard('ServiceHeartCard', 'Service Heart Card', 'an optional description')
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceHeartCard
include('azure-20/Item/General/ServiceHeart')

' renders the element
ServiceHeartCard('ServiceHeartCard', 'Service Heart Card', 'an optional description')
@enduml
```

## ServiceHeartGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceHeartGroup
include('azure-20/Item/General/ServiceHeart')

' renders the element
ServiceHeartGroup('ServiceHeartGroup', 'Service Heart Group', 'an optional tech label') {
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceHeartGroup
include('azure-20/Item/General/ServiceHeart')

' renders the element
ServiceHeartGroup('ServiceHeartGroup', 'Service Heart Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

