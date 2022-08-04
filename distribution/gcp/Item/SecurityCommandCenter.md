# SecurityCommandCenter


```text
gcp/Item/SecurityCommandCenter
```

```text
include('gcp/Item/SecurityCommandCenter')
```



| Illustration | SecurityCommandCenter | SecurityCommandCenterCard | SecurityCommandCenterGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../gcp/Item/SecurityCommandCenter.png) | ![illustration for SecurityCommandCenter](../../gcp/Item/SecurityCommandCenter.Local.png) | ![illustration for SecurityCommandCenterCard](../../gcp/Item/SecurityCommandCenterCard.Local.png) | ![illustration for SecurityCommandCenterGroup](../../gcp/Item/SecurityCommandCenterGroup.Local.png) |




## SecurityCommandCenter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element SecurityCommandCenter
include('gcp/Item/SecurityCommandCenter')

' renders the element
SecurityCommandCenter('SecurityCommandCenter', 'Security Command Center', 'an optional tech label', 'an optional description')
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
include('gcp/bootstrap')

' loads the Item which embeds the element SecurityCommandCenter
include('gcp/Item/SecurityCommandCenter')

' renders the element
SecurityCommandCenter('SecurityCommandCenter', 'Security Command Center', 'an optional tech label', 'an optional description')
@enduml
```

## SecurityCommandCenterCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element SecurityCommandCenterCard
include('gcp/Item/SecurityCommandCenter')

' renders the element
SecurityCommandCenterCard('SecurityCommandCenterCard', 'Security Command Center Card', 'an optional description')
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
include('gcp/bootstrap')

' loads the Item which embeds the element SecurityCommandCenterCard
include('gcp/Item/SecurityCommandCenter')

' renders the element
SecurityCommandCenterCard('SecurityCommandCenterCard', 'Security Command Center Card', 'an optional description')
@enduml
```

## SecurityCommandCenterGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element SecurityCommandCenterGroup
include('gcp/Item/SecurityCommandCenter')

' renders the element
SecurityCommandCenterGroup('SecurityCommandCenterGroup', 'Security Command Center Group', 'an optional tech label') {
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
include('gcp/bootstrap')

' loads the Item which embeds the element SecurityCommandCenterGroup
include('gcp/Item/SecurityCommandCenter')

' renders the element
SecurityCommandCenterGroup('SecurityCommandCenterGroup', 'Security Command Center Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

