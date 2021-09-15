# CustomerEnablement


```text
aws-20210730/Category/CustomerEnablement
```

```text
include('aws-20210730/Category/CustomerEnablement')
```



| Illustration | CustomerEnablement | CustomerEnablementCard | CustomerEnablementGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../aws-20210730/Category/CustomerEnablement.png) | ![illustration for CustomerEnablement](../../aws-20210730/Category/CustomerEnablement.Local.png) | ![illustration for CustomerEnablementCard](../../aws-20210730/Category/CustomerEnablementCard.Local.png) | ![illustration for CustomerEnablementGroup](../../aws-20210730/Category/CustomerEnablementGroup.Local.png) |




## CustomerEnablement

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element CustomerEnablement
include('aws-20210730/Category/CustomerEnablement')

' renders the element
CustomerEnablement('CustomerEnablement', 'Customer Enablement', 'an optional tech label')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element CustomerEnablement
include('aws-20210730/Category/CustomerEnablement')

' renders the element
CustomerEnablement('CustomerEnablement', 'Customer Enablement', 'an optional tech label')
@enduml
```

## CustomerEnablementCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element CustomerEnablementCard
include('aws-20210730/Category/CustomerEnablement')

' renders the element
CustomerEnablementCard('CustomerEnablementCard', 'Customer Enablement Card', 'an optional description')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element CustomerEnablementCard
include('aws-20210730/Category/CustomerEnablement')

' renders the element
CustomerEnablementCard('CustomerEnablementCard', 'Customer Enablement Card', 'an optional description')
@enduml
```

## CustomerEnablementGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element CustomerEnablementGroup
include('aws-20210730/Category/CustomerEnablement')

' renders the element
CustomerEnablementGroup('CustomerEnablementGroup', 'Customer Enablement Group', 'an optional tech label') {
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element CustomerEnablementGroup
include('aws-20210730/Category/CustomerEnablement')

' renders the element
CustomerEnablementGroup('CustomerEnablementGroup', 'Customer Enablement Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

