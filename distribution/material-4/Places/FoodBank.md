# FoodBank


```text
material-4/Places/FoodBank
```

```text
include('material-4/Places/FoodBank')
```



| Illustration | FoodBank |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/FoodBank.png) | ![illustration for FoodBank](../../material-4/Places/FoodBank.Local.png) |



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
include('material-4/bootstrap')

' loads the Item which embeds the element FoodBank
include('material-4/Places/FoodBank')

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
include('material-4/bootstrap')

' loads the Item which embeds the element FoodBank
include('material-4/Places/FoodBank')

' renders the element
FoodBank('FoodBank', 'Food Bank', 'an optional tech label', 'an optional description')
@enduml
```

