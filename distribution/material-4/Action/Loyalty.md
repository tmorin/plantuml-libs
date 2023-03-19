# Loyalty


```text
material-4/Action/Loyalty
```

```text
include('material-4/Action/Loyalty')
```



| Illustration | Loyalty |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Loyalty.png) | ![illustration for Loyalty](../../material-4/Action/Loyalty.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LoyaltyXs>`
- `<$LoyaltySm>`
- `<$LoyaltyMd>`
- `<$LoyaltyLg>`





## Loyalty

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Loyalty
include('material-4/Action/Loyalty')

' renders the element
Loyalty('Loyalty', 'Loyalty', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Loyalty
include('material-4/Action/Loyalty')

' renders the element
Loyalty('Loyalty', 'Loyalty', 'an optional tech label', 'an optional description')
@enduml
```

