# Hashnode


```text
fontawesome-6/Brands/Hashnode
```

```text
include('fontawesome-6/Brands/Hashnode')
```



| Illustration | Hashnode |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Hashnode.png) | ![illustration for Hashnode](../../fontawesome-6/Brands/Hashnode.Local.png) |




## Hashnode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Hashnode
include('fontawesome-6/Brands/Hashnode')

' renders the element
Hashnode('Hashnode', 'Hashnode', 'an optional tech label')
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

' loads the Item which embeds the element Hashnode
include('fontawesome-6/Brands/Hashnode')

' renders the element
Hashnode('Hashnode', 'Hashnode', 'an optional tech label')
@enduml
```

