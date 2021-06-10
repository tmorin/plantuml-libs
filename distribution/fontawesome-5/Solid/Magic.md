# Magic


```text
fontawesome-5/Solid/Magic
```

```text
include('fontawesome-5/Solid/Magic')
```



| Illustration | Magic |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Magic.png) | ![illustration for Magic](../../fontawesome-5/Solid/Magic.Local.png) |




## Magic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Magic
include('fontawesome-5/Solid/Magic')

' renders the element
Magic('Magic', 'Magic', 'an optional tech label')
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

' loads the Item which embeds the element Magic
include('fontawesome-5/Solid/Magic')

' renders the element
Magic('Magic', 'Magic', 'an optional tech label')
@enduml
```

