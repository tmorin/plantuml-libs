# IceCream


```text
fontawesome/Solid/IceCream
```

```text
include('fontawesome/Solid/IceCream')
```



| Illustration | IceCream |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/IceCream.png) | ![illustration for IceCream](../../fontawesome/Solid/IceCream.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IceCreamXs>`
- `<$IceCreamSm>`
- `<$IceCreamMd>`
- `<$IceCreamLg>`





## IceCream

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element IceCream
include('fontawesome/Solid/IceCream')

' renders the element
IceCream('IceCream', 'Ice Cream', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element IceCream
include('fontawesome/Solid/IceCream')

' renders the element
IceCream('IceCream', 'Ice Cream', 'an optional tech label', 'an optional description')
@enduml
```

