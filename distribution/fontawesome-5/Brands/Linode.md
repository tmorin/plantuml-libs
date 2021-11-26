# Linode


```text
fontawesome-5/Brands/Linode
```

```text
include('fontawesome-5/Brands/Linode')
```



| Illustration | Linode |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Linode.png) | ![illustration for Linode](../../fontawesome-5/Brands/Linode.Local.png) |




## Linode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Linode
include('fontawesome-5/Brands/Linode')

' renders the element
Linode('Linode', 'Linode', 'an optional tech label')
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

' loads the Item which embeds the element Linode
include('fontawesome-5/Brands/Linode')

' renders the element
Linode('Linode', 'Linode', 'an optional tech label')
@enduml
```

