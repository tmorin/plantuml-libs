# Sourcetree


```text
fontawesome-5/Brands/Sourcetree
```

```text
include('fontawesome-5/Brands/Sourcetree')
```



| Illustration | Sourcetree |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Sourcetree.png) | ![illustration for Sourcetree](../../fontawesome-5/Brands/Sourcetree.Local.png) |




## Sourcetree

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Sourcetree
include('fontawesome-5/Brands/Sourcetree')

' renders the element
Sourcetree('Sourcetree', 'Sourcetree', 'an optional tech label')
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

' loads the Item which embeds the element Sourcetree
include('fontawesome-5/Brands/Sourcetree')

' renders the element
Sourcetree('Sourcetree', 'Sourcetree', 'an optional tech label')
@enduml
```

