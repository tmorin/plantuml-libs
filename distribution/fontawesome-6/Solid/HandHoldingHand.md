# HandHoldingHand


```text
fontawesome-6/Solid/HandHoldingHand
```

```text
include('fontawesome-6/Solid/HandHoldingHand')
```



| Illustration | HandHoldingHand |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HandHoldingHand.png) | ![illustration for HandHoldingHand](../../fontawesome-6/Solid/HandHoldingHand.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HandHoldingHand
include('fontawesome-6/Solid/HandHoldingHand')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HandHoldingHand
include('fontawesome-6/Solid/HandHoldingHand')

' renders the element
HandHoldingHand('HandHoldingHand', 'Hand Holding Hand', 'an optional tech label', 'an optional description')
@enduml
```

