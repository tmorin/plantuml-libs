# FoodBank


```text
material/Places/FoodBank
```

```text
include('material/Places/FoodBank')
```



| Illustration | FoodBank |
| :---: | :---: |
| ![illustration for Illustration](../../material/Places/FoodBank.png) | ![illustration for FoodBank](../../material/Places/FoodBank.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FoodBankXs>`
- `<$FoodBankSm>`
- `<$FoodBankMd>`
- `<$FoodBankLg>`





## FoodBank

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FoodBank
include('material/Places/FoodBank')

' renders the element
FoodBank('FoodBank', 'Food Bank', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element FoodBank
include('material/Places/FoodBank')

' renders the element
FoodBank('FoodBank', 'Food Bank', 'an optional tech label', 'an optional description')
@enduml
```

