# YandexInternational


```text
fontawesome-5/Brands/YandexInternational
```

```text
include('fontawesome-5/Brands/YandexInternational')
```



| Illustration | YandexInternational |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/YandexInternational.png) | ![illustration for YandexInternational](../../fontawesome-5/Brands/YandexInternational.Local.png) |




## YandexInternational

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element YandexInternational
include('fontawesome-5/Brands/YandexInternational')

' renders the element
YandexInternational('YandexInternational', 'Yandex International', 'an optional tech label')
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

' loads the Item which embeds the element YandexInternational
include('fontawesome-5/Brands/YandexInternational')

' renders the element
YandexInternational('YandexInternational', 'Yandex International', 'an optional tech label')
@enduml
```

