# Yandex


```text
fontawesome-6/Brands/Yandex
```

```text
include('fontawesome-6/Brands/Yandex')
```



| Illustration | Yandex |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Yandex.png) | ![illustration for Yandex](../../fontawesome-6/Brands/Yandex.Local.png) |




## Yandex

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Yandex
include('fontawesome-6/Brands/Yandex')

' renders the element
Yandex('Yandex', 'Yandex', 'an optional tech label')
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

' loads the Item which embeds the element Yandex
include('fontawesome-6/Brands/Yandex')

' renders the element
Yandex('Yandex', 'Yandex', 'an optional tech label')
@enduml
```

