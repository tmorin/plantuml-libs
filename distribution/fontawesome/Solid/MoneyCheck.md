# MoneyCheck


```text
fontawesome/Solid/MoneyCheck
```

```text
include('fontawesome/Solid/MoneyCheck')
```



| Illustration | MoneyCheck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MoneyCheck.png) | ![illustration for MoneyCheck](../../fontawesome/Solid/MoneyCheck.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MoneyCheckXs>`
- `<$MoneyCheckSm>`
- `<$MoneyCheckMd>`
- `<$MoneyCheckLg>`





## MoneyCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MoneyCheck
include('fontawesome/Solid/MoneyCheck')

' renders the element
MoneyCheck('MoneyCheck', 'Money Check', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MoneyCheck
include('fontawesome/Solid/MoneyCheck')

' renders the element
MoneyCheck('MoneyCheck', 'Money Check', 'an optional tech label', 'an optional description')
@enduml
```

