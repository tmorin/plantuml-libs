# HandHoldingHeart


```text
fontawesome-5/Solid/HandHoldingHeart
```

```text
include('fontawesome-5/Solid/HandHoldingHeart')
```



| Illustration | HandHoldingHeart |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/HandHoldingHeart.png) | ![illustration for HandHoldingHeart](../../fontawesome-5/Solid/HandHoldingHeart.Local.png) |




## HandHoldingHeart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HandHoldingHeart
include('fontawesome-5/Solid/HandHoldingHeart')

' renders the element
HandHoldingHeart('HandHoldingHeart', 'Hand Holding Heart', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HandHoldingHeart
include('fontawesome-5/Solid/HandHoldingHeart')

' renders the element
HandHoldingHeart('HandHoldingHeart', 'Hand Holding Heart', 'an optional tech label')
@enduml
```

