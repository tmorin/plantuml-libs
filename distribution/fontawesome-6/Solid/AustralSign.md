# AustralSign


```text
fontawesome-6/Solid/AustralSign
```

```text
include('fontawesome-6/Solid/AustralSign')
```



| Illustration | AustralSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/AustralSign.png) | ![illustration for AustralSign](../../fontawesome-6/Solid/AustralSign.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element AustralSign
include('fontawesome-6/Solid/AustralSign')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element AustralSign
include('fontawesome-6/Solid/AustralSign')

' renders the element
AustralSign('AustralSign', 'Austral Sign', 'an optional tech label', 'an optional description')
@enduml
```

