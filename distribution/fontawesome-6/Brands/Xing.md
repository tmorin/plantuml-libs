# Xing


```text
fontawesome-6/Brands/Xing
```

```text
include('fontawesome-6/Brands/Xing')
```



| Illustration | Xing |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Xing.png) | ![illustration for Xing](../../fontawesome-6/Brands/Xing.Local.png) |




## Xing

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Xing
include('fontawesome-6/Brands/Xing')

' renders the element
Xing('Xing', 'Xing', 'an optional tech label')
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

' loads the Item which embeds the element Xing
include('fontawesome-6/Brands/Xing')

' renders the element
Xing('Xing', 'Xing', 'an optional tech label')
@enduml
```

