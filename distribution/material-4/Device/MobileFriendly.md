# MobileFriendly


```text
material-4/Device/MobileFriendly
```

```text
include('material-4/Device/MobileFriendly')
```



| Illustration | MobileFriendly |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/MobileFriendly.png) | ![illustration for MobileFriendly](../../material-4/Device/MobileFriendly.Local.png) |




## MobileFriendly

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element MobileFriendly
include('material-4/Device/MobileFriendly')

' renders the element
MobileFriendly('MobileFriendly', 'Mobile Friendly', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element MobileFriendly
include('material-4/Device/MobileFriendly')

' renders the element
MobileFriendly('MobileFriendly', 'Mobile Friendly', 'an optional tech label')
@enduml
```

