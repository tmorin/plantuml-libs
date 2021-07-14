# Chartmogul


```text
simpleicons-5/C/Chartmogul
```

```text
include('simpleicons-5/C/Chartmogul')
```



| Illustration | Chartmogul |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Chartmogul.png) | ![illustration for Chartmogul](../../simpleicons-5/C/Chartmogul.Local.png) |




## Chartmogul

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Chartmogul
include('simpleicons-5/C/Chartmogul')

' renders the element
Chartmogul('Chartmogul', 'Chartmogul', 'an optional tech label')
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

' loads the Item which embeds the element Chartmogul
include('simpleicons-5/C/Chartmogul')

' renders the element
Chartmogul('Chartmogul', 'Chartmogul', 'an optional tech label')
@enduml
```

