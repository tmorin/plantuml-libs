# Sitrox


```text
fontawesome-6/Brands/Sitrox
```

```text
include('fontawesome-6/Brands/Sitrox')
```



| Illustration | Sitrox |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Sitrox.png) | ![illustration for Sitrox](../../fontawesome-6/Brands/Sitrox.Local.png) |




## Sitrox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Sitrox
include('fontawesome-6/Brands/Sitrox')

' renders the element
Sitrox('Sitrox', 'Sitrox', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sitrox
include('fontawesome-6/Brands/Sitrox')

' renders the element
Sitrox('Sitrox', 'Sitrox', 'an optional tech label', 'an optional description')
@enduml
```

