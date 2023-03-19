# Money


```text
material-4/Maps/Money
```

```text
include('material-4/Maps/Money')
```



| Illustration | Money |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/Money.png) | ![illustration for Money](../../material-4/Maps/Money.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MoneyXs>`
- `<$MoneySm>`
- `<$MoneyMd>`
- `<$MoneyLg>`





## Money

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Money
include('material-4/Maps/Money')

' renders the element
Money('Money', 'Money', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Money
include('material-4/Maps/Money')

' renders the element
Money('Money', 'Money', 'an optional tech label', 'an optional description')
@enduml
```

