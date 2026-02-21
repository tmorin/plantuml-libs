# SquareCheck


```text
fontawesome/Regular/SquareCheck
```

```text
include('fontawesome/Regular/SquareCheck')
```



| Illustration | SquareCheck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/SquareCheck.png) | ![illustration for SquareCheck](../../fontawesome/Regular/SquareCheck.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareCheckXs>`
- `<$SquareCheckSm>`
- `<$SquareCheckMd>`
- `<$SquareCheckLg>`





## SquareCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SquareCheck
include('fontawesome/Regular/SquareCheck')

' renders the element
SquareCheck('SquareCheck', 'Square Check', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareCheck
include('fontawesome/Regular/SquareCheck')

' renders the element
SquareCheck('SquareCheck', 'Square Check', 'an optional tech label', 'an optional description')
@enduml
```

