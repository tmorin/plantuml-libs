# HandsHoldingCircle


```text
fontawesome/Solid/HandsHoldingCircle
```

```text
include('fontawesome/Solid/HandsHoldingCircle')
```



| Illustration | HandsHoldingCircle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HandsHoldingCircle.png) | ![illustration for HandsHoldingCircle](../../fontawesome/Solid/HandsHoldingCircle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandsHoldingCircleXs>`
- `<$HandsHoldingCircleSm>`
- `<$HandsHoldingCircleMd>`
- `<$HandsHoldingCircleLg>`





## HandsHoldingCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HandsHoldingCircle
include('fontawesome/Solid/HandsHoldingCircle')

' renders the element
HandsHoldingCircle('HandsHoldingCircle', 'Hands Holding Circle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HandsHoldingCircle
include('fontawesome/Solid/HandsHoldingCircle')

' renders the element
HandsHoldingCircle('HandsHoldingCircle', 'Hands Holding Circle', 'an optional tech label', 'an optional description')
@enduml
```

