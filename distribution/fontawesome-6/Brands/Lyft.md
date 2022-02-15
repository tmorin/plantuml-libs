# Lyft


```text
fontawesome-6/Brands/Lyft
```

```text
include('fontawesome-6/Brands/Lyft')
```



| Illustration | Lyft |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Lyft.png) | ![illustration for Lyft](../../fontawesome-6/Brands/Lyft.Local.png) |




## Lyft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Lyft
include('fontawesome-6/Brands/Lyft')

' renders the element
Lyft('Lyft', 'Lyft', 'an optional tech label')
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

' loads the Item which embeds the element Lyft
include('fontawesome-6/Brands/Lyft')

' renders the element
Lyft('Lyft', 'Lyft', 'an optional tech label')
@enduml
```

