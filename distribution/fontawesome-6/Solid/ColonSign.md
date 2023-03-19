# ColonSign


```text
fontawesome-6/Solid/ColonSign
```

```text
include('fontawesome-6/Solid/ColonSign')
```



| Illustration | ColonSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ColonSign.png) | ![illustration for ColonSign](../../fontawesome-6/Solid/ColonSign.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ColonSign
include('fontawesome-6/Solid/ColonSign')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ColonSign
include('fontawesome-6/Solid/ColonSign')

' renders the element
ColonSign('ColonSign', 'Colon Sign', 'an optional tech label', 'an optional description')
@enduml
```

