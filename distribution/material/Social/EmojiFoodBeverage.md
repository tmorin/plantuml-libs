# EmojiFoodBeverage


```text
material/Social/EmojiFoodBeverage
```

```text
include('material/Social/EmojiFoodBeverage')
```



| Illustration | EmojiFoodBeverage |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/EmojiFoodBeverage.png) | ![illustration for EmojiFoodBeverage](../../material/Social/EmojiFoodBeverage.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EmojiFoodBeverageXs>`
- `<$EmojiFoodBeverageSm>`
- `<$EmojiFoodBeverageMd>`
- `<$EmojiFoodBeverageLg>`





## EmojiFoodBeverage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element EmojiFoodBeverage
include('material/Social/EmojiFoodBeverage')

' renders the element
EmojiFoodBeverage('EmojiFoodBeverage', 'Emoji Food Beverage', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element EmojiFoodBeverage
include('material/Social/EmojiFoodBeverage')

' renders the element
EmojiFoodBeverage('EmojiFoodBeverage', 'Emoji Food Beverage', 'an optional tech label', 'an optional description')
@enduml
```

