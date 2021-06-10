# Snapchat


```text
fontawesome-5/Brands/Snapchat
```

```text
include('fontawesome-5/Brands/Snapchat')
```



| Illustration | Snapchat |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Snapchat.png) | ![illustration for Snapchat](../../fontawesome-5/Brands/Snapchat.Local.png) |




## Snapchat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Snapchat
include('fontawesome-5/Brands/Snapchat')

' renders the element
Snapchat('Snapchat', 'Snapchat', 'an optional tech label')
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

' loads the Item which embeds the element Snapchat
include('fontawesome-5/Brands/Snapchat')

' renders the element
Snapchat('Snapchat', 'Snapchat', 'an optional tech label')
@enduml
```

