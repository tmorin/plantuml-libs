# Loyalty


```text
material/Action/Loyalty
```

```text
include('material/Action/Loyalty')
```



| Illustration | Loyalty |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Loyalty.png) | ![illustration for Loyalty](../../material/Action/Loyalty.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element Loyalty
include('material/Action/Loyalty')

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
include('material/bootstrap')

' loads the Item which embeds the element Loyalty
include('material/Action/Loyalty')

' renders the element
Loyalty('Loyalty', 'Loyalty', 'an optional tech label', 'an optional description')
@enduml
```

