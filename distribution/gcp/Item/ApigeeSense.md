# ApigeeSense


```text
gcp/Item/ApigeeSense
```

```text
include('gcp/Item/ApigeeSense')
```



| Illustration | ApigeeSense | ApigeeSenseCard | ApigeeSenseGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../gcp/Item/ApigeeSense.png) | ![illustration for ApigeeSense](../../gcp/Item/ApigeeSense.Local.png) | ![illustration for ApigeeSenseCard](../../gcp/Item/ApigeeSenseCard.Local.png) | ![illustration for ApigeeSenseGroup](../../gcp/Item/ApigeeSenseGroup.Local.png) |




## ApigeeSense

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element ApigeeSense
include('gcp/Item/ApigeeSense')

' renders the element
ApigeeSense('ApigeeSense', 'Apigee Sense', 'an optional tech label')
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

' loads the Item which embeds the element ApigeeSense
include('gcp/Item/ApigeeSense')

' renders the element
ApigeeSense('ApigeeSense', 'Apigee Sense', 'an optional tech label')
@enduml
```

## ApigeeSenseCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element ApigeeSenseCard
include('gcp/Item/ApigeeSense')

' renders the element
ApigeeSenseCard('ApigeeSenseCard', 'Apigee Sense Card', 'an optional description')
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

' loads the Item which embeds the element ApigeeSenseCard
include('gcp/Item/ApigeeSense')

' renders the element
ApigeeSenseCard('ApigeeSenseCard', 'Apigee Sense Card', 'an optional description')
@enduml
```

## ApigeeSenseGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element ApigeeSenseGroup
include('gcp/Item/ApigeeSense')

' renders the element
ApigeeSenseGroup('ApigeeSenseGroup', 'Apigee Sense Group', 'an optional tech label') {
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

' loads the Item which embeds the element ApigeeSenseGroup
include('gcp/Item/ApigeeSense')

' renders the element
ApigeeSenseGroup('ApigeeSenseGroup', 'Apigee Sense Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

