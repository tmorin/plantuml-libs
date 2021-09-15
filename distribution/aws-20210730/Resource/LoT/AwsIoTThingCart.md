# AwsIoTThingCart


```text
aws-20210730/Resource/LoT/AwsIoTThingCart
```

```text
include('aws-20210730/Resource/LoT/AwsIoTThingCart')
```



| Illustration | AwsIoTThingCart | AwsIoTThingCartCard | AwsIoTThingCartGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Resource/LoT/AwsIoTThingCart.png) | ![illustration for AwsIoTThingCart](../../../aws-20210730/Resource/LoT/AwsIoTThingCart.Local.png) | ![illustration for AwsIoTThingCartCard](../../../aws-20210730/Resource/LoT/AwsIoTThingCartCard.Local.png) | ![illustration for AwsIoTThingCartGroup](../../../aws-20210730/Resource/LoT/AwsIoTThingCartGroup.Local.png) |




## AwsIoTThingCart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsIoTThingCart
include('aws-20210730/Resource/LoT/AwsIoTThingCart')

' renders the element
AwsIoTThingCart('AwsIoTThingCart', 'Aws Io T Thing Cart', 'an optional tech label')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsIoTThingCart
include('aws-20210730/Resource/LoT/AwsIoTThingCart')

' renders the element
AwsIoTThingCart('AwsIoTThingCart', 'Aws Io T Thing Cart', 'an optional tech label')
@enduml
```

## AwsIoTThingCartCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsIoTThingCartCard
include('aws-20210730/Resource/LoT/AwsIoTThingCart')

' renders the element
AwsIoTThingCartCard('AwsIoTThingCartCard', 'Aws Io T Thing Cart Card', 'an optional description')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsIoTThingCartCard
include('aws-20210730/Resource/LoT/AwsIoTThingCart')

' renders the element
AwsIoTThingCartCard('AwsIoTThingCartCard', 'Aws Io T Thing Cart Card', 'an optional description')
@enduml
```

## AwsIoTThingCartGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsIoTThingCartGroup
include('aws-20210730/Resource/LoT/AwsIoTThingCart')

' renders the element
AwsIoTThingCartGroup('AwsIoTThingCartGroup', 'Aws Io T Thing Cart Group', 'an optional tech label') {
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsIoTThingCartGroup
include('aws-20210730/Resource/LoT/AwsIoTThingCart')

' renders the element
AwsIoTThingCartGroup('AwsIoTThingCartGroup', 'Aws Io T Thing Cart Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

