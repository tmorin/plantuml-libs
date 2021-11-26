# Dropbox


```text
fontawesome-5/Brands/Dropbox
```

```text
include('fontawesome-5/Brands/Dropbox')
```



| Illustration | Dropbox |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Dropbox.png) | ![illustration for Dropbox](../../fontawesome-5/Brands/Dropbox.Local.png) |




## Dropbox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Dropbox
include('fontawesome-5/Brands/Dropbox')

' renders the element
Dropbox('Dropbox', 'Dropbox', 'an optional tech label')
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

' loads the Item which embeds the element Dropbox
include('fontawesome-5/Brands/Dropbox')

' renders the element
Dropbox('Dropbox', 'Dropbox', 'an optional tech label')
@enduml
```

