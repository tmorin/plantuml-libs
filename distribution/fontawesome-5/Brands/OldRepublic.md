# OldRepublic


```text
fontawesome-5/Brands/OldRepublic
```

```text
include('fontawesome-5/Brands/OldRepublic')
```



| Illustration | OldRepublic |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/OldRepublic.png) | ![illustration for OldRepublic](../../fontawesome-5/Brands/OldRepublic.Local.png) |




## OldRepublic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element OldRepublic
include('fontawesome-5/Brands/OldRepublic')

' renders the element
OldRepublic('OldRepublic', 'Old Republic', 'an optional tech label')
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

' loads the Item which embeds the element OldRepublic
include('fontawesome-5/Brands/OldRepublic')

' renders the element
OldRepublic('OldRepublic', 'Old Republic', 'an optional tech label')
@enduml
```

