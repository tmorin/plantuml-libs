# AustralSign


```text
fontawesome/Solid/AustralSign
```

```text
include('fontawesome/Solid/AustralSign')
```



| Illustration | AustralSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/AustralSign.png) | ![illustration for AustralSign](../../fontawesome/Solid/AustralSign.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AustralSignXs>`
- `<$AustralSignSm>`
- `<$AustralSignMd>`
- `<$AustralSignLg>`





## AustralSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element AustralSign
include('fontawesome/Solid/AustralSign')

' renders the element
AustralSign('AustralSign', 'Austral Sign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AustralSign
include('fontawesome/Solid/AustralSign')

' renders the element
AustralSign('AustralSign', 'Austral Sign', 'an optional tech label', 'an optional description')
@enduml
```

