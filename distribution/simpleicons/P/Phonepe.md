# Phonepe


```text
simpleicons/P/Phonepe
```

```text
include('simpleicons/P/Phonepe')
```



| Illustration | Phonepe |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Phonepe.png) | ![illustration for Phonepe](../../simpleicons/P/Phonepe.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PhonepeXs>`
- `<$PhonepeSm>`
- `<$PhonepeMd>`
- `<$PhonepeLg>`





## Phonepe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Phonepe
include('simpleicons/P/Phonepe')

' renders the element
Phonepe('Phonepe', 'Phonepe', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Phonepe
include('simpleicons/P/Phonepe')

' renders the element
Phonepe('Phonepe', 'Phonepe', 'an optional tech label', 'an optional description')
@enduml
```

