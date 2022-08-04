# Crown


```text
fontawesome-6/Solid/Crown
```

```text
include('fontawesome-6/Solid/Crown')
```



| Illustration | Crown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Crown.png) | ![illustration for Crown](../../fontawesome-6/Solid/Crown.Local.png) |




## Crown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Crown
include('fontawesome-6/Solid/Crown')

' renders the element
Crown('Crown', 'Crown', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Crown
include('fontawesome-6/Solid/Crown')

' renders the element
Crown('Crown', 'Crown', 'an optional tech label', 'an optional description')
@enduml
```

