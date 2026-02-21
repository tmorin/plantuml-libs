# ColonSign


```text
fontawesome/Solid/ColonSign
```

```text
include('fontawesome/Solid/ColonSign')
```



| Illustration | ColonSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ColonSign.png) | ![illustration for ColonSign](../../fontawesome/Solid/ColonSign.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ColonSignXs>`
- `<$ColonSignSm>`
- `<$ColonSignMd>`
- `<$ColonSignLg>`





## ColonSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ColonSign
include('fontawesome/Solid/ColonSign')

' renders the element
ColonSign('ColonSign', 'Colon Sign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ColonSign
include('fontawesome/Solid/ColonSign')

' renders the element
ColonSign('ColonSign', 'Colon Sign', 'an optional tech label', 'an optional description')
@enduml
```

