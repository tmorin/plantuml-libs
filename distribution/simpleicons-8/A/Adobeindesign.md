# Adobeindesign


```text
simpleicons-8/A/Adobeindesign
```

```text
include('simpleicons-8/A/Adobeindesign')
```



| Illustration | Adobeindesign |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Adobeindesign.png) | ![illustration for Adobeindesign](../../simpleicons-8/A/Adobeindesign.Local.png) |




## Adobeindesign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Adobeindesign
include('simpleicons-8/A/Adobeindesign')

' renders the element
Adobeindesign('Adobeindesign', 'Adobeindesign', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Adobeindesign
include('simpleicons-8/A/Adobeindesign')

' renders the element
Adobeindesign('Adobeindesign', 'Adobeindesign', 'an optional tech label', 'an optional description')
@enduml
```

