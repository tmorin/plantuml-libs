# Aws Marketplace

```text
aws-20200430/Item/General/AwsMarketplace
```

```text
include('aws-20200430/Item/General/AwsMarketplace')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsMarketplace.png)|![](AwsMarketplace.card.png)|![](AwsMarketplace.element.png)|![](AwsMarketplace.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsMarketplace element
include('aws-20200430/Item/General/AwsMarketplace')
AwsMarketplaceCard('aws_marketplace', 'Aws Marketplace', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsMarketplace element
include('aws-20200430/Item/General/AwsMarketplace')
AwsMarketplaceCard('aws_marketplace', 'Aws Marketplace', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```


## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsMarketplace element
include('aws-20200430/Item/General/AwsMarketplace')
AwsMarketplace('aws_marketplace', 'Aws Marketplace', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsMarketplace element
include('aws-20200430/Item/General/AwsMarketplace')
AwsMarketplace('aws_marketplace', 'Aws Marketplace', 'an optional tech field')
@enduml
```


## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsMarketplace element
include('aws-20200430/Item/General/AwsMarketplace')
AwsMarketplaceGroup('aws_marketplace', 'Aws Marketplace', 'an optional tech field'){
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
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsMarketplace element
include('aws-20200430/Item/General/AwsMarketplace')
AwsMarketplaceGroup('aws_marketplace', 'Aws Marketplace', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

