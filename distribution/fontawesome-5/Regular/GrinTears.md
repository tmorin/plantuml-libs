# GrinTears


```text
fontawesome-5/Regular/GrinTears
```

```text
include('fontawesome-5/Regular/GrinTears')
```



| Illustration | GrinTears |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/GrinTears.png) | ![illustration for GrinTears](../../fontawesome-5/Regular/GrinTears.Local.png) |




## GrinTears

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GrinTears
include('fontawesome-5/Regular/GrinTears')

' renders the element
GrinTears('GrinTears', 'Grin Tears', 'an optional tech label')
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

' loads the Item which embeds the element GrinTears
include('fontawesome-5/Regular/GrinTears')

' renders the element
GrinTears('GrinTears', 'Grin Tears', 'an optional tech label')
@enduml
```

