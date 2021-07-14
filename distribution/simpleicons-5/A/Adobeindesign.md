# Adobeindesign


```text
simpleicons-5/A/Adobeindesign
```

```text
include('simpleicons-5/A/Adobeindesign')
```



| Illustration | Adobeindesign |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Adobeindesign.png) | ![illustration for Adobeindesign](../../simpleicons-5/A/Adobeindesign.Local.png) |




## Adobeindesign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Adobeindesign
include('simpleicons-5/A/Adobeindesign')

' renders the element
Adobeindesign('Adobeindesign', 'Adobeindesign', 'an optional tech label')
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

' loads the Item which embeds the element Adobeindesign
include('simpleicons-5/A/Adobeindesign')

' renders the element
Adobeindesign('Adobeindesign', 'Adobeindesign', 'an optional tech label')
@enduml
```

