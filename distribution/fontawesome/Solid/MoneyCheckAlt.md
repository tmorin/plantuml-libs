# MoneyCheckAlt


```text
fontawesome/Solid/MoneyCheckAlt
```

```text
include('fontawesome/Solid/MoneyCheckAlt')
```



| Illustration | MoneyCheckAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MoneyCheckAlt.png) | ![illustration for MoneyCheckAlt](../../fontawesome/Solid/MoneyCheckAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MoneyCheckAltXs>`
- `<$MoneyCheckAltSm>`
- `<$MoneyCheckAltMd>`
- `<$MoneyCheckAltLg>`





## MoneyCheckAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MoneyCheckAlt
include('fontawesome/Solid/MoneyCheckAlt')

' renders the element
MoneyCheckAlt('MoneyCheckAlt', 'Money Check Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MoneyCheckAlt
include('fontawesome/Solid/MoneyCheckAlt')

' renders the element
MoneyCheckAlt('MoneyCheckAlt', 'Money Check Alt', 'an optional tech label', 'an optional description')
@enduml
```

