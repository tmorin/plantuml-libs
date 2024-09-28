# FrontEndWebMobile


```text
aws-q2-2024/Category/FrontEndWebMobile
```

```text
include('aws-q2-2024/Category/FrontEndWebMobile')
```



| Illustration | FrontEndWebMobile | FrontEndWebMobileCard | FrontEndWebMobileGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../aws-q2-2024/Category/FrontEndWebMobile.png) | ![illustration for FrontEndWebMobile](../../aws-q2-2024/Category/FrontEndWebMobile.Local.png) | ![illustration for FrontEndWebMobileCard](../../aws-q2-2024/Category/FrontEndWebMobileCard.Local.png) | ![illustration for FrontEndWebMobileGroup](../../aws-q2-2024/Category/FrontEndWebMobileGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FrontEndWebMobileXs>`
- `<$FrontEndWebMobileSm>`
- `<$FrontEndWebMobileMd>`
- `<$FrontEndWebMobileLg>`





## FrontEndWebMobile

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element FrontEndWebMobile
include('aws-q2-2024/Category/FrontEndWebMobile')

' renders the element
FrontEndWebMobile('FrontEndWebMobile', 'Front End Web Mobile', 'an optional tech label', 'an optional description')
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element FrontEndWebMobile
include('aws-q2-2024/Category/FrontEndWebMobile')

' renders the element
FrontEndWebMobile('FrontEndWebMobile', 'Front End Web Mobile', 'an optional tech label', 'an optional description')
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element FrontEndWebMobileCard
include('aws-q2-2024/Category/FrontEndWebMobile')

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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element FrontEndWebMobileCard
include('aws-q2-2024/Category/FrontEndWebMobile')

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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element FrontEndWebMobileGroup
include('aws-q2-2024/Category/FrontEndWebMobile')

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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element FrontEndWebMobileGroup
include('aws-q2-2024/Category/FrontEndWebMobile')

' renders the element
FrontEndWebMobileGroup('FrontEndWebMobileGroup', 'Front End Web Mobile Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

