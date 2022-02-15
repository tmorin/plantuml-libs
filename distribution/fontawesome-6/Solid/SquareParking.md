# SquareParking


```text
fontawesome-6/Solid/SquareParking
```

```text
include('fontawesome-6/Solid/SquareParking')
```



| Illustration | SquareParking |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/SquareParking.png) | ![illustration for SquareParking](../../fontawesome-6/Solid/SquareParking.Local.png) |




## SquareParking

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquareParking
include('fontawesome-6/Solid/SquareParking')

' renders the element
SquareParking('SquareParking', 'Square Parking', 'an optional tech label')
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

' loads the Item which embeds the element SquareParking
include('fontawesome-6/Solid/SquareParking')

' renders the element
SquareParking('SquareParking', 'Square Parking', 'an optional tech label')
@enduml
```

