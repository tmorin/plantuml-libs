# Paperclip


```text
fontawesome-5/Solid/Paperclip
```

```text
include('fontawesome-5/Solid/Paperclip')
```



| Illustration | Paperclip |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Paperclip.png) | ![illustration for Paperclip](../../fontawesome-5/Solid/Paperclip.Local.png) |




## Paperclip

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Paperclip
include('fontawesome-5/Solid/Paperclip')

' renders the element
Paperclip('Paperclip', 'Paperclip', 'an optional tech label')
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

' loads the Item which embeds the element Paperclip
include('fontawesome-5/Solid/Paperclip')

' renders the element
Paperclip('Paperclip', 'Paperclip', 'an optional tech label')
@enduml
```

