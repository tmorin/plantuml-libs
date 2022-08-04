# Fonticons


```text
fontawesome-6/Brands/Fonticons
```

```text
include('fontawesome-6/Brands/Fonticons')
```



| Illustration | Fonticons |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Fonticons.png) | ![illustration for Fonticons](../../fontawesome-6/Brands/Fonticons.Local.png) |




## Fonticons

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Fonticons
include('fontawesome-6/Brands/Fonticons')

' renders the element
Fonticons('Fonticons', 'Fonticons', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fonticons
include('fontawesome-6/Brands/Fonticons')

' renders the element
Fonticons('Fonticons', 'Fonticons', 'an optional tech label', 'an optional description')
@enduml
```

