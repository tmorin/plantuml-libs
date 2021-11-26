# LuggageCart


```text
fontawesome-5/Solid/LuggageCart
```

```text
include('fontawesome-5/Solid/LuggageCart')
```



| Illustration | LuggageCart |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/LuggageCart.png) | ![illustration for LuggageCart](../../fontawesome-5/Solid/LuggageCart.Local.png) |




## LuggageCart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element LuggageCart
include('fontawesome-5/Solid/LuggageCart')

' renders the element
LuggageCart('LuggageCart', 'Luggage Cart', 'an optional tech label')
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

' loads the Item which embeds the element LuggageCart
include('fontawesome-5/Solid/LuggageCart')

' renders the element
LuggageCart('LuggageCart', 'Luggage Cart', 'an optional tech label')
@enduml
```

