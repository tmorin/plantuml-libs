# Bilibili


```text
fontawesome-6/Brands/Bilibili
```

```text
include('fontawesome-6/Brands/Bilibili')
```



| Illustration | Bilibili |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Bilibili.png) | ![illustration for Bilibili](../../fontawesome-6/Brands/Bilibili.Local.png) |




## Bilibili

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Bilibili
include('fontawesome-6/Brands/Bilibili')

' renders the element
Bilibili('Bilibili', 'Bilibili', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bilibili
include('fontawesome-6/Brands/Bilibili')

' renders the element
Bilibili('Bilibili', 'Bilibili', 'an optional tech label', 'an optional description')
@enduml
```

