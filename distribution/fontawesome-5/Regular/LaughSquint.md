# LaughSquint


```text
fontawesome-5/Regular/LaughSquint
```

```text
include('fontawesome-5/Regular/LaughSquint')
```



| Illustration | LaughSquint |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/LaughSquint.png) | ![illustration for LaughSquint](../../fontawesome-5/Regular/LaughSquint.Local.png) |




## LaughSquint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element LaughSquint
include('fontawesome-5/Regular/LaughSquint')

' renders the element
LaughSquint('LaughSquint', 'Laugh Squint', 'an optional tech label')
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

' loads the Item which embeds the element LaughSquint
include('fontawesome-5/Regular/LaughSquint')

' renders the element
LaughSquint('LaughSquint', 'Laugh Squint', 'an optional tech label')
@enduml
```

