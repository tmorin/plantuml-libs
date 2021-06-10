# GrinSquint


```text
fontawesome-5/Solid/GrinSquint
```

```text
include('fontawesome-5/Solid/GrinSquint')
```



| Illustration | GrinSquint |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/GrinSquint.png) | ![illustration for GrinSquint](../../fontawesome-5/Solid/GrinSquint.Local.png) |




## GrinSquint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GrinSquint
include('fontawesome-5/Solid/GrinSquint')

' renders the element
GrinSquint('GrinSquint', 'Grin Squint', 'an optional tech label')
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

' loads the Item which embeds the element GrinSquint
include('fontawesome-5/Solid/GrinSquint')

' renders the element
GrinSquint('GrinSquint', 'Grin Squint', 'an optional tech label')
@enduml
```

