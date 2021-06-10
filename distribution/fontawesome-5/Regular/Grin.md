# Grin


```text
fontawesome-5/Regular/Grin
```

```text
include('fontawesome-5/Regular/Grin')
```



| Illustration | Grin |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/Grin.png) | ![illustration for Grin](../../fontawesome-5/Regular/Grin.Local.png) |




## Grin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Grin
include('fontawesome-5/Regular/Grin')

' renders the element
Grin('Grin', 'Grin', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Grin
include('fontawesome-5/Regular/Grin')

' renders the element
Grin('Grin', 'Grin', 'an optional tech label')
@enduml
```

