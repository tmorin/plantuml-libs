# Aws Elemental Link

```text
aws-20210131/Architecture/MediaServices/AwsElementalLink
```

```text
include('aws-20210131/Architecture/MediaServices/AwsElementalLink')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsElementalLink.png)|![](AwsElementalLink.card.png)|![](AwsElementalLink.element.png)|![](AwsElementalLink.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsElementalLink element
include('aws-20210131/Architecture/MediaServices/AwsElementalLink')
AwsElementalLinkCard('aws_elemental_link', 'Aws Elemental Link', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsElementalLink element
include('aws-20210131/Architecture/MediaServices/AwsElementalLink')
AwsElementalLinkCard('aws_elemental_link', 'Aws Elemental Link', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsElementalLink element
include('aws-20210131/Architecture/MediaServices/AwsElementalLink')
AwsElementalLink('aws_elemental_link', 'Aws Elemental Link', 'an optional tech field')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsElementalLink element
include('aws-20210131/Architecture/MediaServices/AwsElementalLink')
AwsElementalLink('aws_elemental_link', 'Aws Elemental Link', 'an optional tech field')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsElementalLink element
include('aws-20210131/Architecture/MediaServices/AwsElementalLink')
AwsElementalLinkGroup('aws_elemental_link', 'Aws Elemental Link', 'an optional tech field'){
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsElementalLink element
include('aws-20210131/Architecture/MediaServices/AwsElementalLink')
AwsElementalLinkGroup('aws_elemental_link', 'Aws Elemental Link', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

