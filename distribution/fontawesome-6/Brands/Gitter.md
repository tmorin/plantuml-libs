# Gitter


```text
fontawesome-6/Brands/Gitter
```

```text
include('fontawesome-6/Brands/Gitter')
```



| Illustration | Gitter |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Gitter.png) | ![illustration for Gitter](../../fontawesome-6/Brands/Gitter.Local.png) |




## Gitter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Gitter
include('fontawesome-6/Brands/Gitter')

' renders the element
Gitter('Gitter', 'Gitter', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gitter
include('fontawesome-6/Brands/Gitter')

' renders the element
Gitter('Gitter', 'Gitter', 'an optional tech label', 'an optional description')
@enduml
```

