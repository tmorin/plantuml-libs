# PrivateConnectivity


```text
gcp/Item/PrivateConnectivity
```

```text
include('gcp/Item/PrivateConnectivity')
```



| Illustration | PrivateConnectivity | PrivateConnectivityCard | PrivateConnectivityGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../gcp/Item/PrivateConnectivity.png) | ![illustration for PrivateConnectivity](../../gcp/Item/PrivateConnectivity.Local.png) | ![illustration for PrivateConnectivityCard](../../gcp/Item/PrivateConnectivityCard.Local.png) | ![illustration for PrivateConnectivityGroup](../../gcp/Item/PrivateConnectivityGroup.Local.png) |




## PrivateConnectivity

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element PrivateConnectivity
include('gcp/Item/PrivateConnectivity')

' renders the element
PrivateConnectivity('PrivateConnectivity', 'Private Connectivity', 'an optional tech label')
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

' loads the Item which embeds the element PrivateConnectivity
include('gcp/Item/PrivateConnectivity')

' renders the element
PrivateConnectivity('PrivateConnectivity', 'Private Connectivity', 'an optional tech label')
@enduml
```

## PrivateConnectivityCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element PrivateConnectivityCard
include('gcp/Item/PrivateConnectivity')

' renders the element
PrivateConnectivityCard('PrivateConnectivityCard', 'Private Connectivity Card', 'an optional description')
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

' loads the Item which embeds the element PrivateConnectivityCard
include('gcp/Item/PrivateConnectivity')

' renders the element
PrivateConnectivityCard('PrivateConnectivityCard', 'Private Connectivity Card', 'an optional description')
@enduml
```

## PrivateConnectivityGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element PrivateConnectivityGroup
include('gcp/Item/PrivateConnectivity')

' renders the element
PrivateConnectivityGroup('PrivateConnectivityGroup', 'Private Connectivity Group', 'an optional tech label') {
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

' loads the Item which embeds the element PrivateConnectivityGroup
include('gcp/Item/PrivateConnectivity')

' renders the element
PrivateConnectivityGroup('PrivateConnectivityGroup', 'Private Connectivity Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

