# Yoast


```text
fontawesome-6/Brands/Yoast
```

```text
include('fontawesome-6/Brands/Yoast')
```



| Illustration | Yoast |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Yoast.png) | ![illustration for Yoast](../../fontawesome-6/Brands/Yoast.Local.png) |




## Yoast

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Yoast
include('fontawesome-6/Brands/Yoast')

' renders the element
Yoast('Yoast', 'Yoast', 'an optional tech label')
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

' loads the Item which embeds the element Yoast
include('fontawesome-6/Brands/Yoast')

' renders the element
Yoast('Yoast', 'Yoast', 'an optional tech label')
@enduml
```

