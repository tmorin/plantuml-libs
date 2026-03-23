# Coffee


```text
fontawesome/Solid/Coffee
```

```text
include('fontawesome/Solid/Coffee')
```



| Illustration | Coffee |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Coffee.png) | ![illustration for Coffee](../../fontawesome/Solid/Coffee.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CoffeeXs>`
- `<$CoffeeSm>`
- `<$CoffeeMd>`
- `<$CoffeeLg>`





## Coffee

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Coffee
include('fontawesome/Solid/Coffee')

' renders the element
Coffee('Coffee', 'Coffee', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Coffee
include('fontawesome/Solid/Coffee')

' renders the element
Coffee('Coffee', 'Coffee', 'an optional tech label', 'an optional description')
@enduml
```

