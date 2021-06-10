# Crown


```text
fontawesome-5/Solid/Crown
```

```text
include('fontawesome-5/Solid/Crown')
```



| Illustration | Crown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Crown.png) | ![illustration for Crown](../../fontawesome-5/Solid/Crown.Local.png) |




## Crown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Crown
include('fontawesome-5/Solid/Crown')

' renders the element
Crown('Crown', 'Crown', 'an optional tech label')
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

' loads the Item which embeds the element Crown
include('fontawesome-5/Solid/Crown')

' renders the element
Crown('Crown', 'Crown', 'an optional tech label')
@enduml
```

