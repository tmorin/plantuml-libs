# Quran


```text
fontawesome-5/Solid/Quran
```

```text
include('fontawesome-5/Solid/Quran')
```



| Illustration | Quran |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Quran.png) | ![illustration for Quran](../../fontawesome-5/Solid/Quran.Local.png) |




## Quran

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Quran
include('fontawesome-5/Solid/Quran')

' renders the element
Quran('Quran', 'Quran', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Quran
include('fontawesome-5/Solid/Quran')

' renders the element
Quran('Quran', 'Quran', 'an optional tech label')
@enduml
```

