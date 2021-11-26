# Adobeillustrator


```text
simpleicons-5/A/Adobeillustrator
```

```text
include('simpleicons-5/A/Adobeillustrator')
```



| Illustration | Adobeillustrator |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Adobeillustrator.png) | ![illustration for Adobeillustrator](../../simpleicons-5/A/Adobeillustrator.Local.png) |




## Adobeillustrator

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Adobeillustrator
include('simpleicons-5/A/Adobeillustrator')

' renders the element
Adobeillustrator('Adobeillustrator', 'Adobeillustrator', 'an optional tech label')
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

' loads the Item which embeds the element Adobeillustrator
include('simpleicons-5/A/Adobeillustrator')

' renders the element
Adobeillustrator('Adobeillustrator', 'Adobeillustrator', 'an optional tech label')
@enduml
```

