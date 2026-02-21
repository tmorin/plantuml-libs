# JediOrder


```text
fontawesome/Brands/JediOrder
```

```text
include('fontawesome/Brands/JediOrder')
```



| Illustration | JediOrder |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/JediOrder.png) | ![illustration for JediOrder](../../fontawesome/Brands/JediOrder.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JediOrderXs>`
- `<$JediOrderSm>`
- `<$JediOrderMd>`
- `<$JediOrderLg>`





## JediOrder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element JediOrder
include('fontawesome/Brands/JediOrder')

' renders the element
JediOrder('JediOrder', 'Jedi Order', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element JediOrder
include('fontawesome/Brands/JediOrder')

' renders the element
JediOrder('JediOrder', 'Jedi Order', 'an optional tech label', 'an optional description')
@enduml
```

