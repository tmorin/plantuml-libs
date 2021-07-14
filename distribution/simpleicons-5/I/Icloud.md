# Icloud


```text
simpleicons-5/I/Icloud
```

```text
include('simpleicons-5/I/Icloud')
```



| Illustration | Icloud |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/I/Icloud.png) | ![illustration for Icloud](../../simpleicons-5/I/Icloud.Local.png) |




## Icloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Icloud
include('simpleicons-5/I/Icloud')

' renders the element
Icloud('Icloud', 'Icloud', 'an optional tech label')
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

' loads the Item which embeds the element Icloud
include('simpleicons-5/I/Icloud')

' renders the element
Icloud('Icloud', 'Icloud', 'an optional tech label')
@enduml
```

