# MoneyBill1Wave


```text
fontawesome-6/Solid/MoneyBill1Wave
```

```text
include('fontawesome-6/Solid/MoneyBill1Wave')
```



| Illustration | MoneyBill1Wave |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/MoneyBill1Wave.png) | ![illustration for MoneyBill1Wave](../../fontawesome-6/Solid/MoneyBill1Wave.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MoneyBill1WaveXs>`
- `<$MoneyBill1WaveSm>`
- `<$MoneyBill1WaveMd>`
- `<$MoneyBill1WaveLg>`





## MoneyBill1Wave

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MoneyBill1Wave
include('fontawesome-6/Solid/MoneyBill1Wave')

' renders the element
MoneyBill1Wave('MoneyBill1Wave', 'Money Bill1 Wave', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MoneyBill1Wave
include('fontawesome-6/Solid/MoneyBill1Wave')

' renders the element
MoneyBill1Wave('MoneyBill1Wave', 'Money Bill1 Wave', 'an optional tech label', 'an optional description')
@enduml
```

