# AnchorCircleCheck


```text
fontawesome/Solid/AnchorCircleCheck
```

```text
include('fontawesome/Solid/AnchorCircleCheck')
```



| Illustration | AnchorCircleCheck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/AnchorCircleCheck.png) | ![illustration for AnchorCircleCheck](../../fontawesome/Solid/AnchorCircleCheck.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AnchorCircleCheckXs>`
- `<$AnchorCircleCheckSm>`
- `<$AnchorCircleCheckMd>`
- `<$AnchorCircleCheckLg>`





## AnchorCircleCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element AnchorCircleCheck
include('fontawesome/Solid/AnchorCircleCheck')

' renders the element
AnchorCircleCheck('AnchorCircleCheck', 'Anchor Circle Check', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element AnchorCircleCheck
include('fontawesome/Solid/AnchorCircleCheck')

' renders the element
AnchorCircleCheck('AnchorCircleCheck', 'Anchor Circle Check', 'an optional tech label', 'an optional description')
@enduml
```

