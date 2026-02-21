# PhonelinkOff


```text
material/Hardware/PhonelinkOff
```

```text
include('material/Hardware/PhonelinkOff')
```



| Illustration | PhonelinkOff |
| :---: | :---: |
| ![illustration for Illustration](../../material/Hardware/PhonelinkOff.png) | ![illustration for PhonelinkOff](../../material/Hardware/PhonelinkOff.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PhonelinkOffXs>`
- `<$PhonelinkOffSm>`
- `<$PhonelinkOffMd>`
- `<$PhonelinkOffLg>`





## PhonelinkOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PhonelinkOff
include('material/Hardware/PhonelinkOff')

' renders the element
PhonelinkOff('PhonelinkOff', 'Phonelink Off', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PhonelinkOff
include('material/Hardware/PhonelinkOff')

' renders the element
PhonelinkOff('PhonelinkOff', 'Phonelink Off', 'an optional tech label', 'an optional description')
@enduml
```

