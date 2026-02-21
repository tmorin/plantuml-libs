# YandexInternational


```text
fontawesome/Brands/YandexInternational
```

```text
include('fontawesome/Brands/YandexInternational')
```



| Illustration | YandexInternational |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/YandexInternational.png) | ![illustration for YandexInternational](../../fontawesome/Brands/YandexInternational.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$YandexInternationalXs>`
- `<$YandexInternationalSm>`
- `<$YandexInternationalMd>`
- `<$YandexInternationalLg>`





## YandexInternational

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element YandexInternational
include('fontawesome/Brands/YandexInternational')

' renders the element
YandexInternational('YandexInternational', 'Yandex International', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element YandexInternational
include('fontawesome/Brands/YandexInternational')

' renders the element
YandexInternational('YandexInternational', 'Yandex International', 'an optional tech label', 'an optional description')
@enduml
```

