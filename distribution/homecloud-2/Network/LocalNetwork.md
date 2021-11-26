# LocalNetwork


```text
homecloud-2/Network/LocalNetwork
```

```text
include('homecloud-2/Network/LocalNetwork')
```



| Illustration | LocalNetwork | LocalNetworkCard | LocalNetworkGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../homecloud-2/Network/LocalNetwork.png) | ![illustration for LocalNetwork](../../homecloud-2/Network/LocalNetwork.Local.png) | ![illustration for LocalNetworkCard](../../homecloud-2/Network/LocalNetworkCard.Local.png) | ![illustration for LocalNetworkGroup](../../homecloud-2/Network/LocalNetworkGroup.Local.png) |




## LocalNetwork

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('homecloud-2/bootstrap')

' loads the Item which embeds the element LocalNetwork
include('homecloud-2/Network/LocalNetwork')

' renders the element
LocalNetwork('LocalNetwork', 'Local Network', 'an optional tech label')
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
include('homecloud-2/bootstrap')

' loads the Item which embeds the element LocalNetwork
include('homecloud-2/Network/LocalNetwork')

' renders the element
LocalNetwork('LocalNetwork', 'Local Network', 'an optional tech label')
@enduml
```

## LocalNetworkCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('homecloud-2/bootstrap')

' loads the Item which embeds the element LocalNetworkCard
include('homecloud-2/Network/LocalNetwork')

' renders the element
LocalNetworkCard('LocalNetworkCard', 'Local Network Card', 'an optional description')
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
include('homecloud-2/bootstrap')

' loads the Item which embeds the element LocalNetworkCard
include('homecloud-2/Network/LocalNetwork')

' renders the element
LocalNetworkCard('LocalNetworkCard', 'Local Network Card', 'an optional description')
@enduml
```

## LocalNetworkGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('homecloud-2/bootstrap')

' loads the Item which embeds the element LocalNetworkGroup
include('homecloud-2/Network/LocalNetwork')

' renders the element
LocalNetworkGroup('LocalNetworkGroup', 'Local Network Group', 'an optional tech label') {
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
include('homecloud-2/bootstrap')

' loads the Item which embeds the element LocalNetworkGroup
include('homecloud-2/Network/LocalNetwork')

' renders the element
LocalNetworkGroup('LocalNetworkGroup', 'Local Network Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

