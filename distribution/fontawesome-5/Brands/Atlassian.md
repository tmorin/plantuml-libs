# Atlassian


```text
fontawesome-5/Brands/Atlassian
```

```text
include('fontawesome-5/Brands/Atlassian')
```



| Illustration | Atlassian |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Atlassian.png) | ![illustration for Atlassian](../../fontawesome-5/Brands/Atlassian.Local.png) |




## Atlassian

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Atlassian
include('fontawesome-5/Brands/Atlassian')

' renders the element
Atlassian('Atlassian', 'Atlassian', 'an optional tech label')
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

' loads the Item which embeds the element Atlassian
include('fontawesome-5/Brands/Atlassian')

' renders the element
Atlassian('Atlassian', 'Atlassian', 'an optional tech label')
@enduml
```

