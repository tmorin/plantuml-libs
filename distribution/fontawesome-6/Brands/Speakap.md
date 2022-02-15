# Speakap


```text
fontawesome-6/Brands/Speakap
```

```text
include('fontawesome-6/Brands/Speakap')
```



| Illustration | Speakap |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Speakap.png) | ![illustration for Speakap](../../fontawesome-6/Brands/Speakap.Local.png) |




## Speakap

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Speakap
include('fontawesome-6/Brands/Speakap')

' renders the element
Speakap('Speakap', 'Speakap', 'an optional tech label')
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

' loads the Item which embeds the element Speakap
include('fontawesome-6/Brands/Speakap')

' renders the element
Speakap('Speakap', 'Speakap', 'an optional tech label')
@enduml
```

