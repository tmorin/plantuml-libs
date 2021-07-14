# Amul


```text
simpleicons-5/A/Amul
```

```text
include('simpleicons-5/A/Amul')
```



| Illustration | Amul |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Amul.png) | ![illustration for Amul](../../simpleicons-5/A/Amul.Local.png) |




## Amul

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Amul
include('simpleicons-5/A/Amul')

' renders the element
Amul('Amul', 'Amul', 'an optional tech label')
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

' loads the Item which embeds the element Amul
include('simpleicons-5/A/Amul')

' renders the element
Amul('Amul', 'Amul', 'an optional tech label')
@enduml
```

