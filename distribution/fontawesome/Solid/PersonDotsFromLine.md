# PersonDotsFromLine


```text
fontawesome/Solid/PersonDotsFromLine
```

```text
include('fontawesome/Solid/PersonDotsFromLine')
```



| Illustration | PersonDotsFromLine |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PersonDotsFromLine.png) | ![illustration for PersonDotsFromLine](../../fontawesome/Solid/PersonDotsFromLine.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersonDotsFromLineXs>`
- `<$PersonDotsFromLineSm>`
- `<$PersonDotsFromLineMd>`
- `<$PersonDotsFromLineLg>`





## PersonDotsFromLine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PersonDotsFromLine
include('fontawesome/Solid/PersonDotsFromLine')

' renders the element
PersonDotsFromLine('PersonDotsFromLine', 'Person Dots From Line', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonDotsFromLine
include('fontawesome/Solid/PersonDotsFromLine')

' renders the element
PersonDotsFromLine('PersonDotsFromLine', 'Person Dots From Line', 'an optional tech label', 'an optional description')
@enduml
```

