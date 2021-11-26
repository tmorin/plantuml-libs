# CartPlus


```text
fontawesome-5/Solid/CartPlus
```

```text
include('fontawesome-5/Solid/CartPlus')
```



| Illustration | CartPlus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/CartPlus.png) | ![illustration for CartPlus](../../fontawesome-5/Solid/CartPlus.Local.png) |




## CartPlus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CartPlus
include('fontawesome-5/Solid/CartPlus')

' renders the element
CartPlus('CartPlus', 'Cart Plus', 'an optional tech label')
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

' loads the Item which embeds the element CartPlus
include('fontawesome-5/Solid/CartPlus')

' renders the element
CartPlus('CartPlus', 'Cart Plus', 'an optional tech label')
@enduml
```

