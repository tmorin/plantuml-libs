# Suse


```text
fontawesome-6/Brands/Suse
```

```text
include('fontawesome-6/Brands/Suse')
```



| Illustration | Suse |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Suse.png) | ![illustration for Suse](../../fontawesome-6/Brands/Suse.Local.png) |




## Suse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Suse
include('fontawesome-6/Brands/Suse')

' renders the element
Suse('Suse', 'Suse', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Suse
include('fontawesome-6/Brands/Suse')

' renders the element
Suse('Suse', 'Suse', 'an optional tech label', 'an optional description')
@enduml
```

