# MoneyOff


```text
material/Editor/MoneyOff
```

```text
include('material/Editor/MoneyOff')
```



| Illustration | MoneyOff |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/MoneyOff.png) | ![illustration for MoneyOff](../../material/Editor/MoneyOff.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MoneyOffXs>`
- `<$MoneyOffSm>`
- `<$MoneyOffMd>`
- `<$MoneyOffLg>`





## MoneyOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element MoneyOff
include('material/Editor/MoneyOff')

' renders the element
MoneyOff('MoneyOff', 'Money Off', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MoneyOff
include('material/Editor/MoneyOff')

' renders the element
MoneyOff('MoneyOff', 'Money Off', 'an optional tech label', 'an optional description')
@enduml
```

