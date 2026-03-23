# Quran


```text
fontawesome/Solid/Quran
```

```text
include('fontawesome/Solid/Quran')
```



| Illustration | Quran |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Quran.png) | ![illustration for Quran](../../fontawesome/Solid/Quran.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QuranXs>`
- `<$QuranSm>`
- `<$QuranMd>`
- `<$QuranLg>`





## Quran

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Quran
include('fontawesome/Solid/Quran')

' renders the element
Quran('Quran', 'Quran', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Quran
include('fontawesome/Solid/Quran')

' renders the element
Quran('Quran', 'Quran', 'an optional tech label', 'an optional description')
@enduml
```

