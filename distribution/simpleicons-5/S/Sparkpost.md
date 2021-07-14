# Sparkpost


```text
simpleicons-5/S/Sparkpost
```

```text
include('simpleicons-5/S/Sparkpost')
```



| Illustration | Sparkpost |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Sparkpost.png) | ![illustration for Sparkpost](../../simpleicons-5/S/Sparkpost.Local.png) |




## Sparkpost

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Sparkpost
include('simpleicons-5/S/Sparkpost')

' renders the element
Sparkpost('Sparkpost', 'Sparkpost', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Sparkpost
include('simpleicons-5/S/Sparkpost')

' renders the element
Sparkpost('Sparkpost', 'Sparkpost', 'an optional tech label')
@enduml
```

