# DartLang


```text
fontawesome/Brands/DartLang
```

```text
include('fontawesome/Brands/DartLang')
```



| Illustration | DartLang |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/DartLang.png) | ![illustration for DartLang](../../fontawesome/Brands/DartLang.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DartLangXs>`
- `<$DartLangSm>`
- `<$DartLangMd>`
- `<$DartLangLg>`





## DartLang

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element DartLang
include('fontawesome/Brands/DartLang')

' renders the element
DartLang('DartLang', 'Dart Lang', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DartLang
include('fontawesome/Brands/DartLang')

' renders the element
DartLang('DartLang', 'Dart Lang', 'an optional tech label', 'an optional description')
@enduml
```

