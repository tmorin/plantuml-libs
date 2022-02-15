# Staylinked


```text
fontawesome-6/Brands/Staylinked
```

```text
include('fontawesome-6/Brands/Staylinked')
```



| Illustration | Staylinked |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Staylinked.png) | ![illustration for Staylinked](../../fontawesome-6/Brands/Staylinked.Local.png) |




## Staylinked

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Staylinked
include('fontawesome-6/Brands/Staylinked')

' renders the element
Staylinked('Staylinked', 'Staylinked', 'an optional tech label')
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

' loads the Item which embeds the element Staylinked
include('fontawesome-6/Brands/Staylinked')

' renders the element
Staylinked('Staylinked', 'Staylinked', 'an optional tech label')
@enduml
```

