# Surprise


```text
fontawesome-5/Regular/Surprise
```

```text
include('fontawesome-5/Regular/Surprise')
```



| Illustration | Surprise |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/Surprise.png) | ![illustration for Surprise](../../fontawesome-5/Regular/Surprise.Local.png) |




## Surprise

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Surprise
include('fontawesome-5/Regular/Surprise')

' renders the element
Surprise('Surprise', 'Surprise', 'an optional tech label')
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

' loads the Item which embeds the element Surprise
include('fontawesome-5/Regular/Surprise')

' renders the element
Surprise('Surprise', 'Surprise', 'an optional tech label')
@enduml
```

