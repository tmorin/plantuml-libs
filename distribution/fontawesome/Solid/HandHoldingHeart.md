# HandHoldingHeart


```text
fontawesome/Solid/HandHoldingHeart
```

```text
include('fontawesome/Solid/HandHoldingHeart')
```



| Illustration | HandHoldingHeart |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HandHoldingHeart.png) | ![illustration for HandHoldingHeart](../../fontawesome/Solid/HandHoldingHeart.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandHoldingHeartXs>`
- `<$HandHoldingHeartSm>`
- `<$HandHoldingHeartMd>`
- `<$HandHoldingHeartLg>`





## HandHoldingHeart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HandHoldingHeart
include('fontawesome/Solid/HandHoldingHeart')

' renders the element
HandHoldingHeart('HandHoldingHeart', 'Hand Holding Heart', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HandHoldingHeart
include('fontawesome/Solid/HandHoldingHeart')

' renders the element
HandHoldingHeart('HandHoldingHeart', 'Hand Holding Heart', 'an optional tech label', 'an optional description')
@enduml
```

