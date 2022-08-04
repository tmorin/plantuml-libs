# HandsHoldingCircle


```text
fontawesome-6/Solid/HandsHoldingCircle
```

```text
include('fontawesome-6/Solid/HandsHoldingCircle')
```



| Illustration | HandsHoldingCircle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HandsHoldingCircle.png) | ![illustration for HandsHoldingCircle](../../fontawesome-6/Solid/HandsHoldingCircle.Local.png) |




## HandsHoldingCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HandsHoldingCircle
include('fontawesome-6/Solid/HandsHoldingCircle')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HandsHoldingCircle
include('fontawesome-6/Solid/HandsHoldingCircle')

' renders the element
HandsHoldingCircle('HandsHoldingCircle', 'Hands Holding Circle', 'an optional tech label', 'an optional description')
@enduml
```

