# GrinSquintTears


```text
fontawesome-5/Regular/GrinSquintTears
```

```text
include('fontawesome-5/Regular/GrinSquintTears')
```



| Illustration | GrinSquintTears |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/GrinSquintTears.png) | ![illustration for GrinSquintTears](../../fontawesome-5/Regular/GrinSquintTears.Local.png) |




## GrinSquintTears

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GrinSquintTears
include('fontawesome-5/Regular/GrinSquintTears')

' renders the element
GrinSquintTears('GrinSquintTears', 'Grin Squint Tears', 'an optional tech label')
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

' loads the Item which embeds the element GrinSquintTears
include('fontawesome-5/Regular/GrinSquintTears')

' renders the element
GrinSquintTears('GrinSquintTears', 'Grin Squint Tears', 'an optional tech label')
@enduml
```

