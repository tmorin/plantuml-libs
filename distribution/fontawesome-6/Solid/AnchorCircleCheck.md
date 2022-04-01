# AnchorCircleCheck


```text
fontawesome-6/Solid/AnchorCircleCheck
```

```text
include('fontawesome-6/Solid/AnchorCircleCheck')
```



| Illustration | AnchorCircleCheck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/AnchorCircleCheck.png) | ![illustration for AnchorCircleCheck](../../fontawesome-6/Solid/AnchorCircleCheck.Local.png) |




## AnchorCircleCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element AnchorCircleCheck
include('fontawesome-6/Solid/AnchorCircleCheck')

' renders the element
AnchorCircleCheck('AnchorCircleCheck', 'Anchor Circle Check', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element AnchorCircleCheck
include('fontawesome-6/Solid/AnchorCircleCheck')

' renders the element
AnchorCircleCheck('AnchorCircleCheck', 'Anchor Circle Check', 'an optional tech label')
@enduml
```

