# Dizzy


```text
fontawesome-5/Regular/Dizzy
```

```text
include('fontawesome-5/Regular/Dizzy')
```



| Illustration | Dizzy |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/Dizzy.png) | ![illustration for Dizzy](../../fontawesome-5/Regular/Dizzy.Local.png) |




## Dizzy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Dizzy
include('fontawesome-5/Regular/Dizzy')

' renders the element
Dizzy('Dizzy', 'Dizzy', 'an optional tech label')
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

' loads the Item which embeds the element Dizzy
include('fontawesome-5/Regular/Dizzy')

' renders the element
Dizzy('Dizzy', 'Dizzy', 'an optional tech label')
@enduml
```

