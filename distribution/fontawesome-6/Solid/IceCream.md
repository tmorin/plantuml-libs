# IceCream


```text
fontawesome-6/Solid/IceCream
```

```text
include('fontawesome-6/Solid/IceCream')
```



| Illustration | IceCream |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/IceCream.png) | ![illustration for IceCream](../../fontawesome-6/Solid/IceCream.Local.png) |




## IceCream

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element IceCream
include('fontawesome-6/Solid/IceCream')

' renders the element
IceCream('IceCream', 'Ice Cream', 'an optional tech label')
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

' loads the Item which embeds the element IceCream
include('fontawesome-6/Solid/IceCream')

' renders the element
IceCream('IceCream', 'Ice Cream', 'an optional tech label')
@enduml
```

