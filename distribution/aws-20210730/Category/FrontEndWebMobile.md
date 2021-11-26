# FrontEndWebMobile


```text
aws-20210730/Category/FrontEndWebMobile
```

```text
include('aws-20210730/Category/FrontEndWebMobile')
```



| Illustration | FrontEndWebMobile | FrontEndWebMobileCard | FrontEndWebMobileGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../aws-20210730/Category/FrontEndWebMobile.png) | ![illustration for FrontEndWebMobile](../../aws-20210730/Category/FrontEndWebMobile.Local.png) | ![illustration for FrontEndWebMobileCard](../../aws-20210730/Category/FrontEndWebMobileCard.Local.png) | ![illustration for FrontEndWebMobileGroup](../../aws-20210730/Category/FrontEndWebMobileGroup.Local.png) |




## FrontEndWebMobile

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element FrontEndWebMobile
include('aws-20210730/Category/FrontEndWebMobile')

' renders the element
FrontEndWebMobile('FrontEndWebMobile', 'Front End Web Mobile', 'an optional tech label')
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

' loads the Item which embeds the element FrontEndWebMobile
include('aws-20210730/Category/FrontEndWebMobile')

' renders the element
FrontEndWebMobile('FrontEndWebMobile', 'Front End Web Mobile', 'an optional tech label')
@enduml
```

## FrontEndWebMobileCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element FrontEndWebMobileCard
include('aws-20210730/Category/FrontEndWebMobile')

' renders the element
FrontEndWebMobileCard('FrontEndWebMobileCard', 'Front End Web Mobile Card', 'an optional description')
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

' loads the Item which embeds the element FrontEndWebMobileCard
include('aws-20210730/Category/FrontEndWebMobile')

' renders the element
FrontEndWebMobileCard('FrontEndWebMobileCard', 'Front End Web Mobile Card', 'an optional description')
@enduml
```

## FrontEndWebMobileGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element FrontEndWebMobileGroup
include('aws-20210730/Category/FrontEndWebMobile')

' renders the element
FrontEndWebMobileGroup('FrontEndWebMobileGroup', 'Front End Web Mobile Group', 'an optional tech label') {
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

' loads the Item which embeds the element FrontEndWebMobileGroup
include('aws-20210730/Category/FrontEndWebMobile')

' renders the element
FrontEndWebMobileGroup('FrontEndWebMobileGroup', 'Front End Web Mobile Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

