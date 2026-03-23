# LuggageCart


```text
fontawesome/Solid/LuggageCart
```

```text
include('fontawesome/Solid/LuggageCart')
```



| Illustration | LuggageCart |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/LuggageCart.png) | ![illustration for LuggageCart](../../fontawesome/Solid/LuggageCart.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LuggageCartXs>`
- `<$LuggageCartSm>`
- `<$LuggageCartMd>`
- `<$LuggageCartLg>`





## LuggageCart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element LuggageCart
include('fontawesome/Solid/LuggageCart')

' renders the element
LuggageCart('LuggageCart', 'Luggage Cart', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LuggageCart
include('fontawesome/Solid/LuggageCart')

' renders the element
LuggageCart('LuggageCart', 'Luggage Cart', 'an optional tech label', 'an optional description')
@enduml
```

