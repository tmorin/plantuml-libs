# TurkishLira


```text
fontawesome/Solid/TurkishLira
```

```text
include('fontawesome/Solid/TurkishLira')
```



| Illustration | TurkishLira |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TurkishLira.png) | ![illustration for TurkishLira](../../fontawesome/Solid/TurkishLira.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TurkishLiraXs>`
- `<$TurkishLiraSm>`
- `<$TurkishLiraMd>`
- `<$TurkishLiraLg>`





## TurkishLira

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TurkishLira
include('fontawesome/Solid/TurkishLira')

' renders the element
TurkishLira('TurkishLira', 'Turkish Lira', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TurkishLira
include('fontawesome/Solid/TurkishLira')

' renders the element
TurkishLira('TurkishLira', 'Turkish Lira', 'an optional tech label', 'an optional description')
@enduml
```

