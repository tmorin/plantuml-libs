# NairaSign


```text
fontawesome-6/Solid/NairaSign
```

```text
include('fontawesome-6/Solid/NairaSign')
```



| Illustration | NairaSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/NairaSign.png) | ![illustration for NairaSign](../../fontawesome-6/Solid/NairaSign.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NairaSignXs>`
- `<$NairaSignSm>`
- `<$NairaSignMd>`
- `<$NairaSignLg>`





## NairaSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element NairaSign
include('fontawesome-6/Solid/NairaSign')

' renders the element
NairaSign('NairaSign', 'Naira Sign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element NairaSign
include('fontawesome-6/Solid/NairaSign')

' renders the element
NairaSign('NairaSign', 'Naira Sign', 'an optional tech label', 'an optional description')
@enduml
```

