# GroupNetwork


```text
azure-11/Group/GroupNetwork
```

```text
include('azure-11/Group/GroupNetwork')
```



| Illustration | GroupNetwork |
| :---: | :---: |
| ![illustration for Illustration](../../azure-11/Item/Networking/ServiceVirtualNetworks.png) | ![illustration for GroupNetwork](../../azure-11/Group/GroupNetwork.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GroupNetworkXs>`
- `<$GroupNetworkSm>`
- `<$GroupNetworkMd>`
- `<$GroupNetworkLg>`





## GroupNetwork

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element GroupNetwork
include('azure-11/Group/GroupNetwork')

GroupNetwork('GroupNetwork', 'Group Network', 'an optional tech label') {
  note as note
  the content of the boundary
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
include('azure-11/bootstrap')

' loads the Item which embeds the element GroupNetwork
include('azure-11/Group/GroupNetwork')

GroupNetwork('GroupNetwork', 'Group Network', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

