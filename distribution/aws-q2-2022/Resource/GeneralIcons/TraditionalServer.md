# TraditionalServer


```text
aws-q2-2022/Resource/GeneralIcons/TraditionalServer
```

```text
include('aws-q2-2022/Resource/GeneralIcons/TraditionalServer')
```



| Illustration | TraditionalServer | TraditionalServerCard | TraditionalServerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2022/Resource/GeneralIcons/TraditionalServer.png) | ![illustration for TraditionalServer](../../../aws-q2-2022/Resource/GeneralIcons/TraditionalServer.Local.png) | ![illustration for TraditionalServerCard](../../../aws-q2-2022/Resource/GeneralIcons/TraditionalServerCard.Local.png) | ![illustration for TraditionalServerGroup](../../../aws-q2-2022/Resource/GeneralIcons/TraditionalServerGroup.Local.png) |




## TraditionalServer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element TraditionalServer
include('aws-q2-2022/Resource/GeneralIcons/TraditionalServer')

' renders the element
TraditionalServer('TraditionalServer', 'Traditional Server', 'an optional tech label')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element TraditionalServer
include('aws-q2-2022/Resource/GeneralIcons/TraditionalServer')

' renders the element
TraditionalServer('TraditionalServer', 'Traditional Server', 'an optional tech label')
@enduml
```

## TraditionalServerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element TraditionalServerCard
include('aws-q2-2022/Resource/GeneralIcons/TraditionalServer')

' renders the element
TraditionalServerCard('TraditionalServerCard', 'Traditional Server Card', 'an optional description')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element TraditionalServerCard
include('aws-q2-2022/Resource/GeneralIcons/TraditionalServer')

' renders the element
TraditionalServerCard('TraditionalServerCard', 'Traditional Server Card', 'an optional description')
@enduml
```

## TraditionalServerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element TraditionalServerGroup
include('aws-q2-2022/Resource/GeneralIcons/TraditionalServer')

' renders the element
TraditionalServerGroup('TraditionalServerGroup', 'Traditional Server Group', 'an optional tech label') {
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element TraditionalServerGroup
include('aws-q2-2022/Resource/GeneralIcons/TraditionalServer')

' renders the element
TraditionalServerGroup('TraditionalServerGroup', 'Traditional Server Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

