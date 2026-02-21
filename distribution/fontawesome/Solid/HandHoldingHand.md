# HandHoldingHand


```text
fontawesome/Solid/HandHoldingHand
```

```text
include('fontawesome/Solid/HandHoldingHand')
```



| Illustration | HandHoldingHand |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HandHoldingHand.png) | ![illustration for HandHoldingHand](../../fontawesome/Solid/HandHoldingHand.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandHoldingHandXs>`
- `<$HandHoldingHandSm>`
- `<$HandHoldingHandMd>`
- `<$HandHoldingHandLg>`





## HandHoldingHand

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HandHoldingHand
include('fontawesome/Solid/HandHoldingHand')

' renders the element
HandHoldingHand('HandHoldingHand', 'Hand Holding Hand', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HandHoldingHand
include('fontawesome/Solid/HandHoldingHand')

' renders the element
HandHoldingHand('HandHoldingHand', 'Hand Holding Hand', 'an optional tech label', 'an optional description')
@enduml
```

