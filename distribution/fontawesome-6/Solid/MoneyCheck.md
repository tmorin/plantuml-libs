# MoneyCheck


```text
fontawesome-6/Solid/MoneyCheck
```

```text
include('fontawesome-6/Solid/MoneyCheck')
```



| Illustration | MoneyCheck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/MoneyCheck.png) | ![illustration for MoneyCheck](../../fontawesome-6/Solid/MoneyCheck.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MoneyCheck
include('fontawesome-6/Solid/MoneyCheck')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MoneyCheck
include('fontawesome-6/Solid/MoneyCheck')

' renders the element
MoneyCheck('MoneyCheck', 'Money Check', 'an optional tech label', 'an optional description')
@enduml
```

