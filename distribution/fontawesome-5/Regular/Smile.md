# Smile


```text
fontawesome-5/Regular/Smile
```

```text
include('fontawesome-5/Regular/Smile')
```



| Illustration | Smile |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/Smile.png) | ![illustration for Smile](../../fontawesome-5/Regular/Smile.Local.png) |




## Smile

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Smile
include('fontawesome-5/Regular/Smile')

' renders the element
Smile('Smile', 'Smile', 'an optional tech label')
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

' loads the Item which embeds the element Smile
include('fontawesome-5/Regular/Smile')

' renders the element
Smile('Smile', 'Smile', 'an optional tech label')
@enduml
```

