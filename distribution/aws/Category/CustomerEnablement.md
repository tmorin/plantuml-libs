# CustomerEnablement


```text
aws/Category/CustomerEnablement
```

```text
include('aws/Category/CustomerEnablement')
```



| Illustration | CustomerEnablement | CustomerEnablementCard | CustomerEnablementGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../aws/Category/CustomerEnablement.png) | ![illustration for CustomerEnablement](../../aws/Category/CustomerEnablement.Local.png) | ![illustration for CustomerEnablementCard](../../aws/Category/CustomerEnablementCard.Local.png) | ![illustration for CustomerEnablementGroup](../../aws/Category/CustomerEnablementGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CustomerEnablementXs>`
- `<$CustomerEnablementSm>`
- `<$CustomerEnablementMd>`
- `<$CustomerEnablementLg>`





## CustomerEnablement

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element CustomerEnablement
include('aws/Category/CustomerEnablement')

' renders the element
CustomerEnablement('CustomerEnablement', 'Customer Enablement', 'an optional tech label', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element CustomerEnablement
include('aws/Category/CustomerEnablement')

' renders the element
CustomerEnablement('CustomerEnablement', 'Customer Enablement', 'an optional tech label', 'an optional description')
@enduml
```

## CustomerEnablementCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element CustomerEnablementCard
include('aws/Category/CustomerEnablement')

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
include('aws/bootstrap')

' loads the Item which embeds the element CustomerEnablementCard
include('aws/Category/CustomerEnablement')

' renders the element
CustomerEnablementCard('CustomerEnablementCard', 'Customer Enablement Card', 'an optional description')
@enduml
```

## CustomerEnablementGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element CustomerEnablementGroup
include('aws/Category/CustomerEnablement')

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
include('aws/bootstrap')

' loads the Item which embeds the element CustomerEnablementGroup
include('aws/Category/CustomerEnablement')

' renders the element
CustomerEnablementGroup('CustomerEnablementGroup', 'Customer Enablement Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

