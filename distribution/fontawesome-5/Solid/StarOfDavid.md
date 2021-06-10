# StarOfDavid


```text
fontawesome-5/Solid/StarOfDavid
```

```text
include('fontawesome-5/Solid/StarOfDavid')
```



| Illustration | StarOfDavid |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/StarOfDavid.png) | ![illustration for StarOfDavid](../../fontawesome-5/Solid/StarOfDavid.Local.png) |




## StarOfDavid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element StarOfDavid
include('fontawesome-5/Solid/StarOfDavid')

' renders the element
StarOfDavid('StarOfDavid', 'Star Of David', 'an optional tech label')
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

' loads the Item which embeds the element StarOfDavid
include('fontawesome-5/Solid/StarOfDavid')

' renders the element
StarOfDavid('StarOfDavid', 'Star Of David', 'an optional tech label')
@enduml
```

