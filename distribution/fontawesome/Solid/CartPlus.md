# CartPlus


```text
fontawesome/Solid/CartPlus
```

```text
include('fontawesome/Solid/CartPlus')
```



| Illustration | CartPlus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CartPlus.png) | ![illustration for CartPlus](../../fontawesome/Solid/CartPlus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CartPlusXs>`
- `<$CartPlusSm>`
- `<$CartPlusMd>`
- `<$CartPlusLg>`





## CartPlus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CartPlus
include('fontawesome/Solid/CartPlus')

' renders the element
CartPlus('CartPlus', 'Cart Plus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CartPlus
include('fontawesome/Solid/CartPlus')

' renders the element
CartPlus('CartPlus', 'Cart Plus', 'an optional tech label', 'an optional description')
@enduml
```

